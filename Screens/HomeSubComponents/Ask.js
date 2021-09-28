import React, { useState } from "react"
import { Text, View } from "react-native"
import { Picker } from '@react-native-picker/picker'

const Ask = (props) => {
    const questions = props.question
    const navigation = props.navigation
    const [question,setQuestion] = useState(null)
    return <View style={{marginBottom:10}}>
        <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',flex:1}}>
                Ask Question
            </Text>
        </View>
        <Text style={{flex:1,margin:10,fontSize:16}}>
            Seek accurate answers to your life problems and guide you
            towards the right path. Whether the problem is related to
            love, self, life, business, money, education or work, our
            astrologers will do an in depth study of your birth chart
            provide personalized responses along with remedies.
        </Text>
        <View style={{padding:20,backgroundColor:'#eee',margin:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',flex:1}}>
                Choose Category
            </Text>
            <Picker 
                selectedValue = {question}
                onValueChange = {(v,i) => setQuestion(v)}
                style={{
                    flex: 1,
                    borderWidth: 0,
                    borderRadius: 0,
                    backgroundColor:'#fff',
                    marginTop:10
                  }}
                
            >
                <Picker.Item 
                label='Select a category: Love, career, more...' value = {null}/>
                {
                    questions.map((x,i) => {
                        return <Picker.Item key={i} label = {x.name} value={x.name} />
                    })
                }
            </Picker>
            <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',marginRight:5,fontSize:12}}>
                   {'\u20A8'} 99
                </Text>
                <Text style={{fontSize:12}}>
                    (including GST)
                </Text>
                </View>
                <Text style={{fontSize:12,fontWeight:'bold'}}>
                    Ideas what to ask
                </Text>
                <Text 
                onPress = {e => {
                    navigation.navigate({
                        name:'Ask Question'
                    })
                }}
                style={{padding:8,marginLeft:10,borderRadius:5,
                    color:'#fff',backgroundColor:'#ff944d'}}>
                    Ask a Question
                </Text>
            </View>
        </View>
    </View>
}

export default Ask