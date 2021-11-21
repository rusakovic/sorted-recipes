import { View, StyleSheet } from 'react-native'

import React from 'react'
import Paragraph from './Paragraph'

interface ErrorContainerProps {
  errorMessage: string
}

const ErrorContainer: React.FunctionComponent<ErrorContainerProps> = ({
  errorMessage,
}) => {
  return (
    <View style={ErrorContainerStyles.mainWrapper}>
      <Paragraph>Sorry, error occurred:</Paragraph>
      <Paragraph>{errorMessage}</Paragraph>
    </View>
  )
}

const ErrorContainerStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  packWrapper: {
    width: '100%',
  },
})

export default ErrorContainer
