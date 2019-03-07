import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import DropdownMenu from '../../../components/DropdowMenu'
import GoogleMaps from './map'
import { setFilter } from '../actions'

class Maps extends Component {
  constructor() {
    super()
    this.state = {
      iosStyle: null
    }
  }

  handler = (item) => {
    if (item.type === 'housetype') {
      this.props.filter(item.id)
    }
  }

  fixUI = isShowMenu => {
    if (Platform.OS !== 'ios') {
      return
    }
    if (isShowMenu) {
      this.setState({
        iosStyle: {
          zIndex: 1
        }
      })
    } else {
      this.setState({
        iosStyle: null
      })
    }
  }

  renderIOS() {
    const { daysFilter, housetypeFilter, list } = this.props

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <View style={[styles.menu, this.state.iosStyle]}>
            <DropdownMenu
              data={[daysFilter, housetypeFilter]}
              handler={this.handler}
              fixUI={this.fixUI}
            />
          </View>
          <View style={styles.maps}>
            <GoogleMaps list={list} />
          </View>
        </View>
      </SafeAreaView>
    )
  }

  renderAndroid() {
    const { daysFilter, housetypeFilter, list } = this.props

    return (
      <View style={{flex: 1}}>
        <View style={styles.maps}>
          <GoogleMaps list={list} />
        </View>
        <View style={styles.menu}>
          <DropdownMenu
            data={[daysFilter, housetypeFilter]}
            handler={this.handler}
            fixUI={this.fixUI}
          />
        </View>
      </View>
    )
  }

  render() {
    return Platform.OS === 'ios' ? this.renderIOS() : this.renderAndroid()
  }
}

const selectList = (list, filter) => {
  if (filter === 'all') {
    return list
  }
  return list.filter(item => item.house_type === filter)
}

const mapStateToProps = state => {
  return {
    daysFilter: state.maps.daysFilter,
    housetypeFilter: state.maps.housetypeFilter,
    list: selectList(state.maps.list, state.maps.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filter: id => {
      dispatch(setFilter(id))
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Maps)