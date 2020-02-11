import Counter from '../common/counter';
import Score from '../common/score';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';


export default class Header extends React.Component {
    styles = StyleSheet.create({
    });
    render() {
        return (
          <View>
              <Score></Score>
              <Counter></Counter>
          </View>
        );
    }
}