import React from 'react'
import { View } from 'react-native'
import Paragraph from './Paragraph'

interface IngredientsProps {
  number: number
  name: string
  qty: number
  measure: string
}

const Ingredients: React.FunctionComponent<IngredientsProps> = ({
  measure,
  name,
  number,
  qty,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Paragraph>
        {number}. {name}
      </Paragraph>
      <Paragraph>
        {qty}
        {measure}
      </Paragraph>
    </View>
  )
}

export default Ingredients
