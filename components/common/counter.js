import React from 'react';

import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Button from './button';

export default class Counter extends React.Component {
  styles = StyleSheet.create({
    counter: {
      fontSize: 32,
      color: 'white',
      width: 50,
      left: 0,
      backgroundColor: 'navy',
      position: 'absolute',
      marginTop:30,
      textAlign: 'center',
    },
    label: {
      fontSize: 16,
      color: 'white',
      width: 50,
      left: 0,
      backgroundColor: 'navy',
      position: 'absolute',
      position: 'absolute',
      marginTop:10,
      textAlign: 'center',
  },
    button: {
      height: 30,
  },
  });
  
    state = {
        secondsPassed: 15,
        stopwatchRunning: false,
    }

    timerId = null

    componentWillUnmount = () => {
      clearTimeout(this.timerId);
    }
  
    toggleStopwatch = () => {
      if (!this.state.stopwatchRunning) {
        // starting the timer
        this.timerId = setInterval(
          () => {
            this.setState((state) => {
              const newState = { ...state };
              newState.secondsPassed = state.secondsPassed - 1;
              return newState;
            });
          },
          1000
        );
  
        // telling the app the timer start
        this.setState({
          stopwatchRunning: true,
        })
      } else {
        // stopping the timer
        clearTimeout(this.timerId);
        this.setState({
          stopwatchRunning: false,
        });
      }
    }
    
  
    render() {
      const { navigateTo } = this.props;
      return (
        <View>
          <Text style={[this.styles.label]}>Time:</Text>
          <Text style={[this.styles.counter]} >{this.state.secondsPassed}</Text>
        <Button style={[this.styles.button]}
          title="Toggle Stopwatch On/Off"
          onPress={this.toggleStopwatch}
        />
      </View>
      );
    }
  }