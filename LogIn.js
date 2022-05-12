import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function LogIn() {
  return (
    

      <ImageBackground  
      style={styles.back}
      source={require('./bg1.jpg')} >

        <Text style={styles.welcome}>Welcome to Moorosi Tutorials</Text>

      <View style={styles.details}>
        <Text style={styles.text}>User Name</Text>

           <TextInput style={styles.input}
           placeholder="Enter User Name"
           onChangeText={(Text)=>(Text)} />
             <Text style={styles.text}>Password</Text>

             <TextInput style={styles.input} 
             placeholder="Enter Password"
             onChangeText={(Text)=>(Text)}/>

             <Text>FORGOT PASSWORD</Text>

        <TouchableOpacity>
            <View style={styles.log}>
            <Text style={styles.ln}>LOG IN</Text>
        </View>
        </TouchableOpacity>
      </View>
      </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
    back:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        width:'100%'
    },
    details:{
        backgroundColor:'yellow',
        width:200,
        alignItems:'center',
        padding:10,
        borderRadius:10,
        
        
    },
    log:{
        backgroundColor:'blue',
        padding:5,
        borderRadius:5,
        width:70,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
    },
    input:{
        borderWidth:1,
        borderColor:'purple',
        borderRadius:3,
        marginVertical:8,
        width:170,
    },
    text:{
      color:'black',
      fontWeight:'bold',
      fontSize:20,
    },
    ln:{
      fontWeight:'bold',
      color:'white',
    },
    welcome:{
      fontSize:20,
      fontWeight:'bold',
      fontStyle:'italic',
      color:'white',
      textShadowColor:'black',
      
    }
});
