import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Button } from 'react-native'
import { Provider } from 'react-redux'
import { view as GoogleMaps } from './containers/GoogleMap'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GoogleMaps />
      </Provider>
    )
  }
}

export default App