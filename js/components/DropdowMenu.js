import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native'

class DropdownMenu extends Component {
  constructor(props) {
    super(props)

    const { data } = this.props
    const selectIndex = []
    for (let i = 0; i < data.length; i++) {
      selectIndex.push(0)
    }
    this.state = {
      activityIndex: -1,
      selectIndex: selectIndex
    }
  }

  toggleMenu = index => () => {
    const { activityIndex } = this.state

    if (activityIndex === index) {
      this.setState({
        activityIndex: -1
      })
    } else {
      this.setState({
        activityIndex: index
      })
    }
  }

  selectMenu = (index, item) => () => {
    const { activityIndex, selectIndex } = this.state
    if (activityIndex >= 0) {
      selectIndex[activityIndex] = index
      this.setState({
        selectIndex: selectIndex
      })
    }
    this.toggleMenu(activityIndex)()
    this.props.handler(item)
  }

  renderButton() {
    const { data } = this.props
    return (
      <View style={{flexDirection: 'row'}}>
        {
          data.map((row, index) => {
            return (
              <View
                key={index}
                style={{flex: 1, height: 40, alignItems: 'center', justifyContent: 'center'}}
              >
                <TouchableWithoutFeedback
                  onPress={this.toggleMenu(index)}
                >
                  <Text
                  >
                    {row[this.state.selectIndex[index]].name}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            )
          })
        }
      </View>
    )
  }

  renderMenu() {
    const { activityIndex } = this.state

    if (activityIndex >= 0) {
      return (
        <View style={styles.menu}>
          <TouchableOpacity
            activeOpacity={1}
            style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
            onPress={this.toggleMenu(activityIndex)}
          >
            <View style={{opacity: 0.4, backgroundColor: 'black', flex: 1 }} />
          </TouchableOpacity>
          <View
            style={{position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white'}}
          >
            {
              this.props.data[activityIndex].map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={{flex: 1, height: 30}}
                  >
                    <TouchableWithoutFeedback
                      onPress={this.selectMenu(index, item)}
                    >
                      <Text style={{fontSize: 14}}>{item.name}</Text>
                    </TouchableWithoutFeedback>
                  </View>
                )
              })
            }
          </View>
        </View>
      )
    }
    return null
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderButton()}
        {this.renderMenu()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default DropdownMenu