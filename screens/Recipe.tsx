import { useRoute, RouteProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Switch } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ingredients from '../components/Ingredients'
import Paragraph from '../components/Paragraph'
import { useGetRecipesQuery } from '../features/recipes/fetchRecipes'
import { textSize } from '../styles'
import { RecipeScreenProps } from '../types'

const Recipe: React.FunctionComponent = () => {
  const {
    params: { packId, recipeId },
  } = useRoute<RouteProp<Record<string, RecipeScreenProps>, string>>()

  const { data = [], isFetching } = useGetRecipesQuery()
  const recipe = data[packId].recipes[recipeId]

  const [isFourPeople, setIsFourPeople] = useState(false)
  return (
    <View>
      <Image
        source={{ uri: recipe.image }}
        style={{ height: hp(30), width: '100%' }}
      />
      <View
        style={{
          marginHorizontal: hp(3),
          marginTop: hp(2),
          alignItems: 'center',
        }}
      >
        <Paragraph bold style={{ fontSize: textSize.sd }}>
          {recipe.title}
        </Paragraph>

        {/* SWITCH */}
        <View style={{ alignItems: 'center', marginVertical: hp(3) }}>
          <Text>People:</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: hp(10),
              justifyContent: 'space-between',
            }}
          >
            <Text>2</Text>
            <Switch value={isFourPeople} onValueChange={setIsFourPeople} />
            <Text>4</Text>
          </View>
        </View>

        {/* INGREDIENTS */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <Paragraph style={{ fontSize: textSize.sd, marginBottom: hp(2) }}>
            Ingredients:
          </Paragraph>

          <Ingredients number={1} name='Souce' qty={1} measure='g' />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Paragraph>1. Souce</Paragraph>
            <Paragraph>20g</Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Paragraph>1. Souce</Paragraph>
            <Paragraph>20g</Paragraph>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Recipe
