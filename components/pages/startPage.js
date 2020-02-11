import React from 'react';

import { Text, StyleSheet, SafeAreaView } from 'react-native';
import Button from "../common/button";

export default class StartPage extends React.Component {
  state = {
    active: false,
  }

  start = (delta) => {
    this.setState(state => ({ active: delta}));
  } 

    styles = StyleSheet.create({
        title: {
          color: 'navy',
          fontSize: 64,
        },
        description: {
          textAlign: 'center',
          marginLeft: 20,
          marginRight: 20,
          top: 100,
          flexShrink: 1,
          flexDirection: 'row',
        },
        tapit: {
          textAlign: 'center',
          top: 50,
          fontSize: 32,
          fontWeight: 'bold',
          color: 'navy',
          fontFamily: 'fantasy',
        }
      });

  render() {
    return (
        <SafeAreaView>
            <Text style={[this.styles.tapit]}>Tapit</Text>
            <Text style={[this.styles.description]}>
                Tap the blue button as many times 
                as you can before time expires. If 
                you score at least 10 points, you get 
                to go to Level 2!
            </Text>
        </SafeAreaView>
    );
  }
}