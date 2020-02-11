import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      backgroundColor: 'navy',
      width: 100,
      height: 50,
      position: 'absolute',
      right: 130,
      top: 300,
    },
    title: {
      fontSize: 32,
      alignSelf: 'center',
      color: 'white',
    }
  });

  render() {
   const { onPress, style, title, titleStyle } = this.props;

    return (
        <TouchableOpacity style={[this.styles.button, style]} onPress={onPress}>
          <Text style={[this.styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
  }
}