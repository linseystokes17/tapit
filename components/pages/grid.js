import { Text, StyleSheet, SafeAreaView } from 'react-native';
import Tile from '../common/tile';
import Header from '../pages/header';
import React from 'react';

const ROWS = 8;
const COLS = 5;

export default class Grid extends React.Component {
    styles = StyleSheet.create({
      grid:{
      }
    });

  
    render() {
      return (
        <SafeAreaView>
          <Text styles = {[this.styles.grid]}>Grid here</Text>
        </SafeAreaView>
      );
    }
  }
