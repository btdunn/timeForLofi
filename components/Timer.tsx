import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

// const [seconds, setSeconds] = useState(10)

// const minuteSeconds = 60;


// const getTimeSeconds = (time: number) => (minuteSeconds - time / 1000) | 0;
// const getTimeMinutes = (time: number) => ((time) / minuteSeconds) | 0;




  const Timer = () => (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  )

  

export default Timer
