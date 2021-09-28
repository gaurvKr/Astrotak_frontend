import React from "react"
import { Text, View, ScrollView, Image, Dimensions } from "react-native"


const Card = (props) => {
    const x = props.x
    const width = Dimensions.get('screen').width * 0.7;
    return <View style = {{padding:20,borderRadius:5,shadowColor:"#000",
    backgroundColor:'#fff',shadowOffset: {width: 1,height: 2},width:parseInt(width)
    ,shadowOpacity: 0.4,shadowRadius: 5,elevation: 4,margin:5}}>
        <Text style={{fontSize:18,color:'blue'}}>
            "
        </Text>
        <Text style={{flex:1,marginBottom:30,fontSize:15}}>
            {x.msg}
        </Text>
        <View style={{height:0,zIndex:1,alignItems:'center'}}>
            <Image source={require('../../assets/profile.png')}
            style={{width:50,height:50,resizeMode:'cover',overflow:'hidden',
            marginTop:-25,backgroundColor:'#eee',borderRadius:25}} />
        </View>
        <View style={{padding:30,backgroundColor:'#eee',alignItems:'center'}}>
            <Text style = {{fontSize:15}}>
                {x.name}
            </Text>
            <Text style ={{fontSize:12,color:'#666'}}>
                {x.location}
            </Text>
        </View>
    </View>
}


const Testimonials = () => {
    const arr = [
        {
        msg:"I discussed with Mr.Arvind ji and I'm very satisfied with the discussion. He has very good knowledge andunderstanding and told correctly. My questions are clearly answered and I want to contact with him further for my family as well. Thank you for your support.",
        name: "Gagan Deep Agarwal",
        location: "Bhopal, India"
        },
        {
            msg:"Thank you so much dearest proud to be associated with guidance seeker. I am really grateful to you and very happy services rendered to me. You definitely champions on the Love you lots.",
            name: "Anurag",
            location: "Delhi, India"
        }
    ]
    return <View>
        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',flex:1}}>
                Hear from our Happy Customers!
            </Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}
             horizontal={true} style={{paddingBottom:10}}>
                {
                    arr.map((x,i) => {
                        return <Card key={i} x = {x}/>
                    })
                }
            </ScrollView>
    </View>
}

export default Testimonials