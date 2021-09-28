import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import Images  from "../../getImages";

const Card = (props) => {
    const x = props.x
    return <View style = {{padding:20,borderRadius:5,shadowColor:"#000",
    backgroundColor:'#fff',shadowOffset: {width: 1,height: 2}
    ,shadowOpacity: 0.4,shadowRadius: 5,elevation: 4,margin:10}}>
    <View style={{marginBottom:20}}>
    <Image source={Images[x.profliePicUrl]}
     style={{height:200,width:180,marginBottom:15}} />
     <View style={{flexDirection:'row'}}>
         <Text style = {{fontSize:18,fontWeight:'bold',flex:1}}>
             {`${x.firstName} ${x.lastName}`}
         </Text>
         <Text style={{fontSize:18,fontWeight:'600'}}>
             {x.rating}
         </Text>
     </View>
     </View>
     <Text style={{marginBottom:10}}>
         {x.skills[0]}
     </Text>
     <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
         <Text>
             {x.charge} / min
         </Text>
         <Text style={{padding:10,paddingLeft:15,marginLeft:20,borderRadius:5,
            paddingRight:15,color:'#fff',backgroundColor:'#ff944d'}}>
             Talk Now
         </Text>
     </View>
</View>
}


const Talk = (props) => {
    const astro = props.astro
    const navigation = props.navigation
    return <View>
        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',flex:1}}>
                Talk to an Astrologer
            </Text>
            <Text 
            onPress = {e => {
                navigation.navigate({
                    name:'Talk To Astrologer'
                })
            }}
             style={{color:'#ff944d',fontSize:15,fontWeight:'bold'}}>
                See All {'>'}
            </Text>
        </View>
        <Text  style={{flex:1,margin:10,fontSize:16}}>
            Leading astrologers of India are just a phone call away. Our
            panel of astrologers not just provides solutions to your life
            problems but also guide you so that you can take the right
            path towards growth and prosperity.
        </Text>
        <View>
            <ScrollView showsHorizontalScrollIndicator={false}
             horizontal={true} style={{paddingBottom:10}}>
                {
                    astro.map((x,i) => {
                        return <Card key={i} x={x} />
                    })
                }
            </ScrollView>
        </View>
    </View>
}

export default Talk