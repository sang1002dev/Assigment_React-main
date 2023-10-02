import { View, Text, TextInput, StyleSheet, Button, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import NewPostScreen from './NewPostScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const HomeScreen = ({navigation, onSearch}) => {

  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView style = {{flex: 1}}>
        <View style = {{backgroundColor: '#99CCFF', height: 150, paddingTop: 40, paddingLeft: 20, paddingBottom: 20, borderBottomWidth: 1}}>
            <View style = {{flexDirection: 'row'}}>
                <Text style = {{fontWeight: 'bold', fontSize: 25}}>CodeBug</Text>
                <View style = {{flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderWidth: 1, height: 36, width: 250, justifyContent: 'space-between', borderRadius: 8, backgroundColor: 'white', marginLeft: 20}}>
                    <TextInput placeholder='Search...'
                        onChangeText={text => setSearchText(text)}
                        value = {searchText}
                        style = {{padding: 10, fontSize: 13}}/>
                    <TouchableOpacity onPress={() => {
                            if(searchText){
                            onSearch(searchText)
                            }
                        }}>
                        <Ionicons name = "search" size={14} color='black' style = {{padding: 10}}/>
                    </TouchableOpacity>
                </View> 
            </View>
            
            <View style = {{marginTop: 25, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                <View style = {{ flexDirection: 'row', alignItems: 'center'}}>
                    <View style = {{width: 40, height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
                        <Ionicons name = "people" size={20} color= 'black' onPress={() => navigation.navigate('User')}/>
                    </View>       
                    <TouchableOpacity onPress={() => navigation.navigate('NewPost')} style={{ marginLeft: 10, backgroundColor: 'white', width: 250, height: 30, justifyContent: 'center'}}>
                        <Text style = {{padding: 5}}>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>      
                </View>
                <Ionicons name = "images" size={20} style = {{paddingEnd: 40}}/>
            </View>
        
        </View>
        
    </ScrollView>
  )
}

export default HomeScreen