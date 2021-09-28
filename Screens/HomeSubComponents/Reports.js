import React from "react"
import { Text, View,ScrollView,Image, Linking } from "react-native"
import Images from "../../getImages"


const Card = (props) => {
    const x = props.x
    return <View style={{marginRight:10,alignItems:'center',marginTop:10}}>
        <Image source={Images[x.image]}
         style={{borderRadius:10}} />
        <View style={{flexDirection:'row',padding:10,
        borderBottomRightRadius:10,borderBottomLeftRadius:10,
        alignItems:'center',marginTop:-60,backgroundColor: 'rgba(50, 50, 50, 0.4)'}}>
        <Text style={{fontSize:15,marginBottom:10,flex:1,color:'#fff'}}>
        &#x20B9; {x.price} / min
        </Text>
        <Text onPress = { e => {
            Linking.openURL(x.url)
        }}
        style={{padding:10,paddingLeft:15,marginLeft:10,borderRadius:5,
            paddingRight:15,color:'#fff',backgroundColor:'#ff944d'}}>
             Buy Now
         </Text>
        </View>
    </View>
}


const Reports = (props) => {
    const navigation = props.navigation
    const reports = props.report
    return <View>
        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',flex:1}}>
                Reports
            </Text>
            <Text 
            onPress = {e => {
                navigation.navigate({
                    name:'Report'
                })
            }}
            style={{color:'#ff944d',fontSize:15,fontWeight:'bold'}}>
                See All {'>'}
            </Text>
        </View>
        <Text style={{flex:1,margin:10,fontSize:16}}>
            Astrology report or what is commonly known as Horoscope
            report is basically an in depth look at your birth chart.
            Horoscope report will look at various planetary positions in
            your birth charts and also derive relationships and angle to
            understand your personality and trait.
        </Text>
        <View>
            <ScrollView showsHorizontalScrollIndicator={false}
             horizontal={true} style={{paddingBottom:10}}>
                {
                    reports.map((x,i) => {
                        return <Card key={i} x={x} />
                    })
                }
            </ScrollView>
        </View>
    </View>

}

export default Reports