import React from 'react'
import { View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Twist } from '../features/recipes/types'
import { textSize } from '../styles'
import Paragraph from './Paragraph'

interface CommentProps {
  name: Twist['name']
  comment: Twist['comment']
}

const Comment: React.FunctionComponent<CommentProps> = ({ name, comment }) => {
  return (
    <View
      style={{
        marginTop: hp(3),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paragraph style={{ fontSize: textSize.sd }}>COMMENTS:</Paragraph>
      <View>
        <Paragraph bold>{name}:</Paragraph>
        <Paragraph>{comment}</Paragraph>
      </View>
    </View>
  )
}

export default Comment
