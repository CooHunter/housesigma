import React, { Component } from 'react'
import { View, Text, Image, Alert, Button, Picker, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class App extends Component {
  render() {
    const { width, height } = Dimensions.get('window');

    const initialRegion = {
      latitude: 43.66957,
      longitude: -79.38373,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: '100%', height: '100%' }}
        region={initialRegion}
      />
    );
  }
}