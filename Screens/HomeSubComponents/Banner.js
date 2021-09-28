import React from "react"
import { Dimensions, Text, View, ScrollView, Image, TouchableWithoutFeedback, Linking } from "react-native"
import Images from "../../getImages"

const Card = (props) => {
    const x = props.x
    const width = Dimensions.get('screen').width*0.5
    const height = width*0.7
    return <View style={{alignItems:'center',margin:10,
    shadowColor:"#000",backgroundColor:'#fff',borderRadius:10,
    shadowOffset: {width: 1,height: 2},shadowOpacity: 0.4,shadowRadius: 5,elevation:5}}>
        <TouchableWithoutFeedback onPress = {() => Linking.openURL(x.url)}>
        <Image source={Images[x.image]}
         style={{height:parseInt(height),width:parseInt(width),
            borderRadius:10
            }} />
        </TouchableWithoutFeedback>
    </View>
}

const Banner = (props) => {
    const banner = props.banner
    return <View style={{marginBottom:10}}>
        <View>
            <ScrollView showsHorizontalScrollIndicator={false}
             horizontal={true} style={{paddingBottom:10}}>
                {
                    banner.map((x,i) => {
                        return <Card key={i} x = {x}/>
                    })
                }
            </ScrollView>
        </View>
    </View>

}

export default Banner