import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import LogIn from './LogIn';
import Register from './Register';

export default function App() {
  const[registered, setregistered]=useState(false);
  
  function log_in(){
    if(registered===false){
      setregistered(true)
    }
    else{
      setregistered(false)
    }
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />  
      {registered? <LogIn /> : <Register/>}

      <TouchableOpacity onPress={log_in}>
            <View style={styles.sign}>
            <Text >Log IN</Text>
        </View> 
        </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607d8b',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  sign:{
    backgroundColor:'yellow',
    padding:5,
    borderRadius:5,
    width:70,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
  },

});
