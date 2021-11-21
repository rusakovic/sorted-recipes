import { useRoute, RouteProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Switch, ScrollView } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Comment from '../components/Comment'
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

  const Comments = recipe.twists.map(({ name, comment, id }) => (
    <Comment name={name} comment={comment} key={id} />
  ))

  return (
    <ScrollView>
      <Image
        source={{ uri: recipe.image }}
        style={{ height: hp(30), width: '100%' }}
      />
      <View
        style={{
          marginHorizontal: hp(3),
          marginTop: hp(2),
        }}
      >
        <Paragraph bold style={{ fontSize: textSize.sd }}>
          {recipe.title}
        </Paragraph>

        <View style={{ alignItems: 'center', minHeight: hp(50) }}>
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
              width: '60%',
            }}
          >
            <Paragraph style={{ fontSize: textSize.sd, marginBottom: hp(2) }}>
              INGREDIENTS:
            </Paragraph>

            <Ingredients number={1} name='Souse' qty={100} measure='g' />
            <Ingredients number={2} name='Rice' qty={250} measure='g' />
            <Ingredients number={3} name='Sausages' qty={200} measure='g' />
          </View>

          {/* COMMENTS */}
          {Comments}
        </View>
      </View>
    </ScrollView>
  )
}

export default Recipe
