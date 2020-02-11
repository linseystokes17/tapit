import Header from './header';
import Grid from './grid';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default class Level1 extends React.Component {
    styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    })

    render(){
        return(
            <View style={[this.styles.container]}>
                <Header></Header>
            </View>
        );
    }
}