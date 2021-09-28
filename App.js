import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ask from './Screens/Ask';
import Talk from './Screens/Talk';
import Report from './Screens/Reports';
import Home from './Screens/Home';
import axios from 'axios'

export default function App() {

  const Tab = createBottomTabNavigator();
  const [astro,setAstro] = useState([])
  const [banner,setBanner] = useState([])
  const [horo,setHoro] = useState([])
  const [report,setReport] = useState([])
  const [question,setQuestion] = useState([])
  const [loading,setLoading] = useState(true)
  const [loading1,setLoading1] = useState(true)

  const fetch = () => {
    axios.get('http://192.168.43.12:5000/astrologer').then((res) => {
      setAstro(res.data)
      setLoading(false)
      axios.get('http://192.168.43.12:5000/banner').then((res) => {
      setBanner(res.data)
      axios.get('http://192.168.43.12:5000/Horoscope').then((res) => {
      setHoro(res.data)
      axios.get('http://192.168.43.12:5000/question').then((res) => {
      setQuestion(res.data)
      axios.get('http://192.168.43.12:5000/report').then((res) => {
      setReport(res.data)
      setLoading1(false)
    })
    })
    })
    })
    })
    
  }

  if(loading)  {
    fetch()
  }

  const Icon = (props) => {
     return <View style = {{flex:1,zIndex:-1}}>
       <Image source={props.src} style={{height:30,width:30,resizeMode:'contain',
         marginTop:10, tintColor: props.focus ? '#ff6b09' : '#a2a2a2',alignSelf:'center' }}/>
       <Text style = {{color: props.focus ? '#ff6b09' : '#a2a2a2',fontSize:12}}>
          {props.name}
       </Text>
     </View>
  }
  
  return (
    loading1 ? <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
    <ActivityIndicator size="large" color='#4630eb' />
      <Text style={{fontSize:20,fontWeight:'bold'}}>
          Loading...
      </Text>
   </View>
     :
    <NavigationContainer>
      <View style={{flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
                  <Image source={require('./assets/hamburger.png')}
                   style={{height:30,width:30,resizeMode:'contain',alignSelf:'center',}} />
                  <Image source={require('./assets/logo.png')}
                   style={{height:50,width:50,resizeMode:'contain',flex:1}} />
                  <Image source={require('./assets/profile.png')}
                   style={{height:30,width:30,resizeMode:'contain',alignSelf:'center'}} />
                </View>
        <Tab.Navigator
            screenOptions = {({route}) => ({
              tabBarShowLabel: false,
              tabBarHideOnKeyboard:true,
              header: (params) => {
                return null
              },
              tabBarStyle: {
                  height: 65
              },
              tabBarIcon: (params) => {
                var src = ''
                if(route.name == 'Home') src = require('./assets/home.png')
                else if(route.name == 'Talk To Astrologer') src = require('./assets/talk.png')
                else if(route.name == 'Ask Question') src = require('./assets/ask.png')
                else if(route.name == 'Report') src = require('./assets/reports.png')
                return <Icon src={src} name={route.name} focus = {params.focused} />
              }
            }
          ) 
        }
        >
          <Tab.Screen name='Home' component={Home} 
          initialParams={{astro,banner,horo,question,report}} />
          <Tab.Screen name='Talk To Astrologer' component={Talk} 
          initialParams={{astro}}/>
          <Tab.Screen name='Ask Question' component={Ask} />
          <Tab.Screen name='Report' component={Report} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
