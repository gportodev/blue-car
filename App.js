import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import car from './animation/bluecar.json';

export default class App extends Component {
  speedUp = () => {
    this.car.play();
  };

  slowDown = () => {
    this.car.reset();
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#0d0d0d'}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}
        />

        <LottieView
          ref={(car) => {
            this.car = car;
          }}
          source={car}
        />

        <View
          style={{
            alignItems: 'center',
            marginTop: 400,
          }}>
          <View style={{marginTop: -10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#333333',
                width: 100,
                height: 30,
                borderRadius: 500,
              }}
              onPress={this.speedUp}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 18,
                  paddingLeft: 5,
                  color: '#FFFF',
                  paddingLeft: 10,
                }}>
                Speed Up
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#333333',
                width: 104,
                height: 30,
                borderRadius: 20,
              }}
              onPress={this.slowDown}>
              <Text
                style={{
                  fontWeight: '900',
                  width: 500,
                  fontSize: 18,
                  color: '#FFFF',
                  paddingLeft: 7,
                }}>
                Slow Down
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View />
      </View>
    );
  }
}
