import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Button, Text, View} from 'react-native';
import Timer from './components/Timer'


export default function App() {
  
  const image = {uri: "https://i.imgur.com/IAYgsSi.png"}

  return (

    <ImageBackground source={image} style={styles.image}>
      <View style={styles.timer}>
        <Timer/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  timer: {
    justifyContent: "center",
    alignItems: "center"
  }
});
