import React, { Component } from 'react'
import {
  Dimensions, StyleSheet, TouchableOpacity, View,
} from 'react-native'
import { Colors, Fonts, TextStyles } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')

class SelectSizeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { sizeValue, isActive, onPress } = this.props

    return (
      <TouchableOpacity
        onPress={() => onPress(sizeValue)}
      >
        <View style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: Colors.backgroundWhite,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: isActive ? Colors.primaryBlue : Colors.neutralLight,
          marginRight: 16,
        }}
        >
          <Text style={{ ...TextStyles.heading5, color: Colors.neutralDark }}>{sizeValue}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SelectSizeComponent
