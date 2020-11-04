import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, ViewComponent, Button} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


const Timer = () => {
  const [playing, setPlaying] = useState(false)
  
    const togglePlaying = () => {
      setPlaying(!playing)
    }

    return(
    <View>
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
      <Button onPress={togglePlaying} title="Toggle"></Button>
    </View>
    )
}

export default Timer

