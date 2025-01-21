import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar, Platform } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    }
     else if (value === 'C') {
      setInput('');
      setResult('');
    } 
     else if (value === '<') {
      setInput(input.slice(0,-1));
      setResult('');
    } 
    else {
      setInput(input + value);
    }
  };

  const createButton = (label) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(label)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'android' ? 'light-content' : 'default'} />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="0"
        keyboardType="numeric"
        placeholderTextColor="#888"
      />
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonRow}>
        {createButton('7')}
        {createButton('8')}
        {createButton('9')}
        {createButton('/')}
        {createButton('C')}
      </View>
      <View style={styles.buttonRow}>
        {createButton('4')}
        {createButton('5')}
        {createButton('6')}
        {createButton('*')}
        {createButton('<')}
      </View>
      <View style={styles.buttonRow}>
        {createButton('1')}
        {createButton('2')}
        {createButton('3')}
        {createButton('-')}
        {createButton('()')}
      </View>
      <View style={styles.buttonRow}>
        {createButton('0')}
        {createButton('00')}
        {createButton('.')}
        {createButton('+')}
        {createButton('=')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lavender',  
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 32,
    textAlign: 'right',
    color: 'pink',  
    paddingRight: 10,
    paddingTop: 20,
    backgroundColor: '#000f',  
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  result: {
    fontSize: 24,
    textAlign: 'right',
    paddingRight: 10,
    paddingTop: 20,
    color: 'black', 
    backgroundColor : 'white', 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'grey',  
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
});

    