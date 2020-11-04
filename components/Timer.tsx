import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, ViewComponent, Button, TouchableOpacity} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const Timer = () => {
  const [playing, setPlaying] = useState(false)

  
    const togglePlaying = () => {
      setPlaying(!playing)
    }

    return(
    <View >
      <CountdownCircleTimer

        isPlaying={playing}
        duration={1500}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}
        
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor }}>
            {Math.floor(remainingTime / 60 ) + " minutes"}
          </Animated.Text>
        )}

      </CountdownCircleTimer>
      {/* <Button onPress={togglePlaying} title="Start/Stop"></Button> */}
      {playing ? <TouchableOpacity style={styles.button} onPress={togglePlaying}><Text style={styles.text} >Stop</Text></TouchableOpacity> : <TouchableOpacity onPress={togglePlaying} style={styles.button}><Text style={styles.text}>Start</Text></TouchableOpacity>}
    </View>
    )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: '#4f0a52'
  
  },
  text: {
    color: '#ffffff'
  }
});

export default Timer

