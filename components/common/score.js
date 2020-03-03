import React from 'react';

import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Button from './button';

export default class Score extends React.Component {

    styles = StyleSheet.create({
        counter: {
            fontSize: 16,
            color: 'white',
            right: 0,
            width: 50,
            backgroundColor: 'navy',
            position: 'absolute',
            marginTop:30,
            textAlign: 'center',

        },
        label: {
            fontSize: 16,
            color: 'white',
            textAlign: 'center',
            marginTop:10,
            width: 50,
            right: 0,
            backgroundColor: 'navy',
            position: 'absolute',
            textAlign: 'center',


        },
        button: {
            height: 20,
        },
    });
    
        state = {
            score: 0,
        }
    
        toggleIncrease = () => {
            this.setState((state) => {
                const newState = {...state};
                newState.score = state.score + 1;
                return newState;
              });
        }
    
        render() {
        const { navigateTo } = this.props;
        return (
            <View>
                <Text style={[this.styles.label]}>Score:</Text>
                <Text style={[this.styles.counter]}>{this.state.score}</Text>
            {/* <Button style={[this.styles.button]}
                title="Increase Score"
                onPress={this.toggleIncrease}
            /> */}
            </View>
            );
        }
    }