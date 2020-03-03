import React from 'react';
import _ from 'lodash';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Tile from '/Documents/Homework/Good Programs/tapit/components/common/tile'


export default class Row extends React.Component {
    state = {
        rowData: '',
    }

    handleTilePress = (tileValue) => {
        if (tileValue === 1) {
          this.setState({
            grid: this.buildGrid()
          });
        } else {
          console.log('The user clicked the wrong tile');
        }
    
      }

    render() {
        return (
            <View style={this.styles.row} key={`row_${i}`}>
            {
              _.map(row, (tileValue, j) => {
                return(
                  <Tile
                    key={`column_${j}`}
                    title={tileValue}
                    style={this.styles.column}
                    onPress={() => this.handleTilePress(tileValue)}
                  />
                );
              })
            }
          </View>
        );
    }
}