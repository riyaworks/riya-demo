import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
 
  const navigation = useNavigation();
     const loginpress = () =>{
      navigation.navigate('(tabs)');
     };
     const SignUp = () =>{
      navigation.navigate('(screen)');
     };
  
  
  return (
      <ImageBackground source ={require("D:/react/demo/assets/images/lavender.jpeg")}
      style={styles.background}>
      <View style={styles.container}>
      <View style={styles.subview1}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.subview2}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter Username" placeholderTextColor="#888" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor="#888" secureTextEntry />
        <Button onPress={loginpress} title="Login" />
        <View>
        <TouchableOpacity>
        <Button onPress={SignUp} title="Don't have an account? Sign up" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 16,
  },
  subview1: {
    marginBottom: 20,
  },
  
  subview2: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
