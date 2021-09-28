import React from "react";
import { View,Text, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ask from "./HomeSubComponents/Ask";
import Testimonials from "./HomeSubComponents/Testimonials";
import Talk from "./HomeSubComponents/Talk";
import Banner from "./HomeSubComponents/Banner";
import Reports from "./HomeSubComponents/Reports";
import Horoscope from "./HomeSubComponents/Horoscope";
import Images from "../getImages";

const Home = ({navigation, route}) => {
    const astro = route.params.astro
    const horo = route.params.horo
    const banner = route.params.banner
    const report = route.params.report
    const question = route.params.question
    const logo = 'HomeLogo'
    return(
        <View style={{backgroundColor:'#fff',flex:1}}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{margin:10, justifyContent:'center',
                    flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1}}>
                            <Text style={{color:'blue',fontSize:20}}>
                                ''''
                            </Text>
                            <Text style={{fontSize:18}}>
                                There is no better boat than
                                horoscope to help a man
                                cross over the sea of life.
                            </Text>
                            <Text style={{color:'blue',fontSize:20}}>
                                ''''
                            </Text>
                            <Text style={{color:'#666',alignSelf:'center'}}>
                                - Varahamihira
                            </Text>
                        </View>
                        <Image source={Images[logo]} 
                        style={{height:120,width:120,resizeMode:'cover',borderRadius:60,marginLeft:20}} />
                    </View>
                    <Banner banner = {banner} />
                    <Horoscope horo = {horo} />
                    <Talk astro = {astro} navigation = {navigation} />
                    <Reports report = {report} navigation = {navigation} />
                    <Ask question = {question} navigation = {navigation} />
                    <Testimonials />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Home