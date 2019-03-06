import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class GoogleMaps extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.maps.title
  }
}

export default connect(mapStateToProps)(GoogleMaps)