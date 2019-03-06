import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { view as GoogleMaps } from './containers/GoogleMap'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <GoogleMaps />
        </View>
      </Provider>
    )
  }
}

export default App