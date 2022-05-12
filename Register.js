import { StyleSheet, Text, View,ImageBackground,TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

export default function Register() {
  
  return (
   
    <ImageBackground  
    style={styles.back}
    source={require('./bg.jpg')} >
      <View style={styles.logo}>
     <Text style={styles.welcome}>Welcome to Moorosi Tutorials</Text>
     </View>
        <Text style={styles.text}>Registration</Text>
        <View style={styles.container}>
          <Text style={styles.text}>Enter First Name</Text>
          <TextInput style={styles.input}
             placeholder="Type Here..."
               onChangeText={(Text)=>(Text)} />

           <Text style={styles.text}>Enter Last Name</Text>
              <TextInput style={styles.input}
               placeholder="Type Here..."
               onChangeText={(Text)=>(Text)} />

               <Text style={styles.text}>Enter Email Address</Text>
                   <TextInput style={styles.input}
                     placeholder="Type Here..."
                      onChangeText={(Text)=>(Text)} />

                      <Text style={styles.text}>Set Password</Text>
                          <TextInput style={styles.input}
                           placeholder="Type Here..."
                        onChangeText={(Text)=>(Text)} />

                        <Text style={styles.text}>Comfirm Password</Text>
                           <TextInput style={styles.input}
                           placeholder="Type Here..."
                              onChangeText={(Text)=>(Text)} />

     <TouchableOpacity>
            <View style={styles.sign}>
            <Text >Sign IN</Text>
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
  container:{
    padding:15,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'#4fc3f7',
  },
  input:{
  borderWidth:1,
  borderColor:'white',
  borderRadius:3,
  marginVertical:8,
  color:'white',
  width:190,
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
text:{
  color:'black',
  fontSize:20,
},
welcome:{
  fontSize:20,
  fontWeight:'bold',
  fontStyle:'italic',
  color:'white'
},
logo:{
  flexDirection:'row',
  justifyContent:'space-between',
  padding:10,
  marginVertical:15,
}
});