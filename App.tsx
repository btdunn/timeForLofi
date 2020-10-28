import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Button, Text, View} from 'react-native';

export default function App() {
  

  const [count, setCount] = useState(0)

  const handlePress = () => {
    setCount(count + 100)
  }

  const image = {uri: "https://danbooru.donmai.us/data/sample/sample-77c5eb102bd7cee0c369e17c313e1ca8.jpg"}

  return (

    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text>welcome to hellllll{count} </Text>
        <Button onPress={handlePress} title="hell button"></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
});
