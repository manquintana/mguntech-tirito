
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dropdown, Label} from 'react-native';
import LoadPointsScreen from './LoadPointsScreen.js';


export default function App() {
  
  
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ width: '100%', height: '15%', backgroundColor: 'white', justifyContent: 'center',
    alignItems: 'center'}}>
          <Image source={require('./images/logo-tirito.png')} style={{ width: 200, height: 90 }} />
        </View>

        <View style={{ width: '100%', height: '80%', backgroundColor: 'skyblue' }}>
          <LoadPointsScreen />
        </View>

        <View style={{ width: '100%', height: '5%', backgroundColor: 'skyblue' }}>
          <Text>     TIRITO - Diplomatura Data Science - UADE - Grupo 3 - 2020</Text>
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
