import { useRoute, RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { RecipeScreenProps } from '../types'

const Recipe: React.FunctionComponent = () => {
  const {
    params: { packId, recipeId },
  } = useRoute<RouteProp<Record<string, RecipeScreenProps>, string>>()
  return (
    <View>
      <Text>{packId}</Text>
    </View>
  )
}

export default Recipe
