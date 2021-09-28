import React from "react"
import { ScrollView, Text, View,Image } from "react-native"
import Images from '../../getImages'

const Card = ({x}) => {
    return <View style={{marginRight:10,alignItems:'center'}}>
        <Image source={Images[x.img]}
         style={{height:100,width:100,margin:10}} />
        <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>
            {x.name}
        </Text>
        <Text style={{color:'#a2a2a2'}}>
            {x.date}
        </Text>
    </View>
}

const Horoscope = (props) => {

    const horo = props.horo
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1]
    return <View style={{marginBottom:10}}>
        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',flex:1}}>
                Daily Horoscope
            </Text>
            <Text style={{color:'#ff944d',fontSize:15,fontWeight:'bold'}}>
                See All {'>'}
            </Text>
        </View>
        <Text style={{flex:1,margin:10,fontSize:16}}>
            Read your daily horoscope based on your sunsign, 
            select your zodiac sign and give the right start your day.
        </Text>
        <View>
            <ScrollView showsHorizontalScrollIndicator={false}
             horizontal={true} style={{paddingBottom:10}}>
                {
                    horo.map((x,i) => {
                        return <Card key={i} x = {x} />
                    })
                }
            </ScrollView>
        </View>
    </View>
}

export default Horoscope