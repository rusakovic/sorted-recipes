import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import Paragraph from './Paragraph'

const LoadingContainer: React.FunctionComponent = () => {
  return (
    <View style={ParagraphStyles.mainWrapper}>
      <ActivityIndicator size='large' />
      <Paragraph>Loading recipes...</Paragraph>
    </View>
  )
}

const ParagraphStyles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
})

export default LoadingContainer
