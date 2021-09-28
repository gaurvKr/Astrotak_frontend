import React, { memo, useEffect, useState } from "react";
import { View,Text, Image, TextInput,
    TouchableWithoutFeedback, ActivityIndicator } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { FlatList } from "react-native-gesture-handler"
import Images from '../getImages'

const SubComponent = (props) => {
    const iconName = props.iconName
    const arr = props.arr
    return   <View
    style={{flexDirection:'row',
    alignItems:'center',marginBottom:2}}>
   <Icon name={iconName}
    style={{height:15,width:15,fontSize:15,marginTop:5,
    color:'#ff6b09',marginRight:10,alignSelf:'flex-start'}} />

    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
      <Text>
          {arr[0]}
      </Text>
    {arr.map((x,index) => {
        if(index != 0) {
        return <Text key = {index}>
            , {x}
        </Text>
        }
    })}
    </View>
</View>
}

const Profile = ({item}) => {
    return (
         <View style = {{borderBottomWidth:1,zIndex:0,
            borderColor:'#a2a2a2',backgroundColor:'#fff'}}>
        <View style={{flexDirection:'row',margin:10}}>
            <Image source={Images[item.profliePicUrl]}
             style={{height:100,width:100,resizeMode:'stretch',marginRight:10}} />
             <View style={{flex:1}}>
                 <Text style={{fontWeight:'bold',marginBottom:5,
                 fontSize:18,marginRight:10,}}>{item.firstName} {item.lastName}</Text>
                 <SubComponent iconName= 'medal' arr = {item.skills} />
                 <SubComponent iconName= 'language' arr = {item.languages} />
                 <View
                      style={{flexDirection:'row',
                      alignItems:'center',marginBottom:2}}>
                     <Icon name='money-check-alt'
                      style={{height:15,width:15,fontSize:15,marginTop:5,
                      color:'#ff6b09',marginRight:10,alignSelf:'flex-start'}} />
                      <Text style={{fontSize:15,fontWeight:'bold'}}>
                            {item.charge}/ Min
                      </Text>
                  </View>
             </View>
             <Text>
                {item.experience} years
            </Text>
        </View>
        
        <View style={{marginBottom:10}}>
            <View style={{flexDirection:'row',backgroundColor:'#ff944d',
            padding: 10,paddingLeft:30,paddingRight:30,alignSelf:'center',
            borderRadius: 5,shadowColor: "#000",shadowOffset: {width: 0,height: 1,},
            shadowOpacity: 0.20,shadowRadius: 1.41,elevation: 2,
            }}>
                <Ionicons name='call-outline' color='#fff' size={20} />
                <Text style={{marginLeft:20}}> Talk on Call</Text>
            </View>
        </View>
        </View>
    )
}

const Talk = ({navigation, route}) => {
    const astro = route.params.astro
    const [showSearchBar,setShowSearchBar] = useState(false)
    const sortArr = ['Experience - high to low','Experience - low to high',
                'Price - high to low','Price - low to high']
    const [sortAlgoNo,setSortAlgoNo] = useState(-1);
    const [showSort,setShowSort] = useState(false)
    const [search,setSearch] = useState('')
    const [filterItems,setFilterItem] = useState([...astro])

    const [loading,setLoading] = useState(false)


    useEffect(() => {
        var fillteredAstro = []
        if(search == '' || !search) {
            fillteredAstro =  [...astro]
        }
        else {
            const regex = new RegExp(search,'gi')
            fillteredAstro = astro.filter(x => {
                var ans = false
                ans = ans || (`${x.firstName} ${x.lastName}`).match(regex)
                x.languages.map(x => {
                    ans = ans || x.match(regex)
                })
                x.skills.map(x => {
                    ans = ans || x.match(regex)
                })
                return ans
            })
        }
        
        if(sortAlgoNo == 0) {
            fillteredAstro.sort((x1,x2) => {
                return x2.experience - x1.experience
            })
        }
        else if(sortAlgoNo == 1) {
            fillteredAstro.sort((x1,x2) => {
                return x1.experience - x2.experience
            })
        }
        else if(sortAlgoNo == 2) {
            fillteredAstro.sort((x1,x2) => {
                return x2.charge - x1.charge
            })
        }
        else if(sortAlgoNo == 3) {
            fillteredAstro.sort((x1,x2) => {
                return x1.charge - x2.charge
            })
        }
        setFilterItem(fillteredAstro)
        setShowSort(false)
        setLoading(false)
    },[sortAlgoNo,search])

    const Sort = () => {
        return <View style={{padding:10,backgroundColor:'#fff',
        shadowOffset: {width: 1,height: 2},marginLeft:10,zIndex:1,
        shadowOpacity: 0,shadowRadius: 5,elevation: 4}}>
            <Text style={{color:'#ff944d',fontSize:18,paddingBottom:10,
            borderBottomWidth:1,borderColor:'#a2a2a2'}}>
                    Sort By
            </Text>
                {
                    sortArr.map((x,index) => {
                        return <Text key = {index} onPress = {e => {
                            setLoading(true)
                            if(index == sortAlgoNo) setSortAlgoNo(-1)
                            else setSortAlgoNo(index)
                        }}
                         style={{padding: 8,fontSize:18,
                         backgroundColor: sortAlgoNo == index ? '#ddd' : '#fff'}}>
                                {x}
                            </Text>
                    })
                }
        </View>
    }

    return(
        <>
        <View 
         style={{display:'flex',flexDirection:'column',flex:1,
         backgroundColor:'#fff',opacity: loading ? 0.4 : 1}}>
        <View style={{padding:10,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',flex:1,fontSize:15,textAlignVertical:'center'}}>
                    Talk to an Astrologer
                </Text>
                <TouchableWithoutFeedback onPress={e => {
                    setShowSearchBar(true)
                    setShowSort(false)
                }}>
                    <Image source={require('../assets/search.png')} 
                    style={{width:30,height:30,resizeMode:'contain',marginRight:10}} />
                    </TouchableWithoutFeedback>
                <Image source={require('../assets/filter.png')} 
                style={{width:30,height:30,resizeMode:'contain',marginRight:10}} />
                <View>
                    <TouchableWithoutFeedback onPress = {e => {
                        setShowSort(!showSort)
                        setShowSearchBar(false)
                    }}>
                    <Image source={require('../assets/sort.png')} 
                    style={{width:30,height:30,resizeMode:'contain',marginRight:10}} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
        {
            showSearchBar ? <View style={{padding:10,flexDirection:'row',alignItems:'center',
            backgroundColor:'#fff',shadowOffset: {width: 1,height: 2},marginLeft:10,
            shadowOpacity: 0.4,shadowRadius: 5,elevation: 4,marginRight:10}}>
                <Image source={require('../assets/search.png')}
                style={{width:15,height:15,resizeMode:'contain',marginRight:10}} />
                <TextInput 
                showSoftInputOnFocus = {false}
                autoFocus = {true}
                keyboardType = 'default'
                 placeholder='Search Astrologer' value={search}
                 style={{flex:1,borderWidth:0}}
                onChangeText = {e => {
                    setSearch(e)
                }} />
                <Text onPress = {e => {
                    setSearch('')
                    setShowSearchBar(false)
                }}
                style={{color:'#ff944d',fontSize:20,fontWeight:'700'}}>
                        &#9587;
                </Text>
            </View>
        
            : null
        }
            <FlatList
             style={{flex:1}}
             onTouchStart = {e => setShowSort(false)}
                data = {filterItems}
                keyExtractor = {(item) => item._id}
                renderItem = {Profile}
            />
        {showSort ? <View style={{zIndex:2,position:'absolute',right:10,top:50}}>
                        <Sort />
                    </View>
            : null 
        }
        </View>
        {
            loading ? <View style={{ position:'absolute',top:0, width:'100%',height:'100%',
            justifyContent:'center',alignItems:'center',zIndex:2}}>
                <ActivityIndicator size="large" color='#4630eb' />
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Loading...
                </Text>
            </View> : null
        }
        </>
    )
}

export default memo(Talk)