import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DropdownMenu from '../../../components/DropdowMenu'
import GoogleMaps from './map' 

class Maps extends Component {
  render() {
    const { daysFilter, housetypeFilter, list } = this.props

    return (
      <View style={{flex: 1}}>
        <View style={styles.maps}>
          <GoogleMaps list={list} />
        </View>
        <View style={styles.menu}>
          <DropdownMenu
            data={[daysFilter, housetypeFilter]}
          />
        </View>
      </View>
    )
  }
}

function formatList(list) {
  const ret = []
  const len = list.length
  for (let i = 0; i < len; i++) {
    const item = list[i]
    ret.push(Object.assign({}, item, {
      latitude: item.lat,
      longitude: item.lng,
      location: {
        latitude: item.lat,
        longitude: item.lng
      }
    }))
  }
  return ret
}

const mapStateToProps = state => {
  return {
    daysFilter: state.maps.daysFilter,
    housetypeFilter: state.maps.housetypeFilter,
    list: formatList(state.maps.list)
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1
  },
  maps: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default connect(mapStateToProps)(Maps)