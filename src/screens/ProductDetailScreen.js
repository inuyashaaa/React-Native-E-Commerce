import React, { Component } from 'react'
import {
  View, StyleSheet, Image, SafeAreaView, Dimensions, TouchableOpacity,
} from 'react-native'
import {
  back, search, more, nikeRed, heart, startActive, starDefault,
} from '../../assets/images'
import {
  Colors, Fonts, TextStyles, mainPaddingH,
} from '../../assets/styles'
import { Text, SelectSizeComponent } from '../components'

const { width } = Dimensions.get('window')
class ProductDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSize: '6',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 26, paddingHorizontal: 16,
        }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={back}
              style={{
                width: 24, height: 24, marginLeft: 12, marginRight: 12,
              }}
              resizeMode="contain"
            />
            <Text
              style={[{
                color: Colors.neutralDark, ...TextStyles.heading4,
              }]}
            >
              Nike Air Max 270 Rea...
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={search}
              style={{ width: 24, height: 24, marginRight: 16 }}
              resizeMode="contain"
            />
            <Image
              source={more}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </View>
        </View>

        <Image
          source={nikeRed}
          style={{ width, height: 238 }}
          resizeMode="cover"
        />

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: mainPaddingH,
          paddingTop: 16,
          paddingBottom: 8,
        }}
        >
          <Text style={{ ...TextStyles.heading3, color: Colors.neutralDark, width: 275 / 375 * width }}>Nike Air Zoom Pegasus 36 Miami</Text>
          <Image
            source={heart}
            style={{ width: 24, height: 24 }}
          />
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: mainPaddingH, marginBottom: 16 }}>
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={startActive}
            style={{ width: 16, height: 16, marginRight: 4 }}
            resizeMode="contain"
          />
          <Image
            source={starDefault}
            style={{ width: 16, height: 16 }}
            resizeMode="contain"
          />
        </View>

        <View style={{ flex: 1, paddingLeft: mainPaddingH }}>
          <Text style={{
            ...TextStyles.heading3,
            color: Colors.primaryBlue,
          }}
          >
            $299,43
          </Text>

          <Text style={{
            ...TextStyles.heading5,
            color: Colors.neutralDark,
            marginTop: 24,
          }}
          >
            Select Size
          </Text>

          <View
            style={{ flexDirection: 'row' }}
          >
            <SelectSizeComponent
              sizeValue="6"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '6'}
            />
            <SelectSizeComponent
              sizeValue="6.5"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '6.5'}
            />
            <SelectSizeComponent
              sizeValue="7"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '7'}
            />
            <SelectSizeComponent
              sizeValue="7.5"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '7.5'}
            />
            <SelectSizeComponent
              sizeValue="8"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '8'}
            />
            <SelectSizeComponent
              sizeValue="8.5"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '8.5'}
            />
            <SelectSizeComponent
              sizeValue="9"
              onPress={(sizeValue) => {
                this.setState({
                  currentSize: sizeValue,
                })
              }}
              isActive={this.state.currentSize === '9'}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ProductDetailScreen
