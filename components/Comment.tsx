import React from 'react'
import { StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Twist } from '../features/recipes/types'
import Paragraph from './Paragraph'

interface CommentProps {
  name: Twist['name']
  comment: Twist['comment']
}

const Comment: React.FunctionComponent<CommentProps> = ({ name, comment }) => {
  return (
    <View style={CommentStyles.mainWrapper}>
      <View>
        <Paragraph bold>{name}:</Paragraph>
        <Paragraph>{comment}</Paragraph>
      </View>
    </View>
  )
}

const CommentStyles = StyleSheet.create({
  mainWrapper: {
    marginTop: hp(2),
    width: '100%',
  },
})

export default Comment
