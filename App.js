import React from 'react';
import {SafeAreaView,View, Text, StyleSheet} from 'react-native';
import StartPage, {active} from './components/pages/startPage';
import Grid from './components/pages/grid';
import Header from './components/pages/header';
import Button from './components/common/button';
import Level1 from './components/pages/level1';

export default class App extends React.Component{
  state = {
    active: true,
    passLevel1: false,
  }

  start = (delta) => {
    this.setState(state => ({ active: delta}));
  } 

  styles = StyleSheet.create({
    header: {
      textAlignVertical: 'top',
    },
    start:{
      textAlign: "center",
      textAlignVertical: 'bottom',
    }
  });

  get currentPageComponent(){
    if(this.state.active == false){
      return(
        <View>
          <Level1></Level1>
        </View>
      );
    }
    if(this.state.passLevel1 == true){
      return(
        <View>
          <Level1></Level1>
        </View>
      )
    }
    else{
      return (
        <React.Fragment>
          <StartPage></StartPage>
          <Button title="Start" onPress={() => this.start(false) } style = {[this.styles.start]}></Button>
        </React.Fragment>
      );
    }
  }

  render(){
    return(
      <SafeAreaView>
        {this.currentPageComponent}
      </SafeAreaView>
      );
    }
  }
