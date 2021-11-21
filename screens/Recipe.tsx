import { useRoute, RouteProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Switch, ScrollView, StyleSheet } from 'react-native'
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

  const { data = [] } = useGetRecipesQuery()
  const recipe = data[packId].recipes[recipeId]

  const [isFourPeople, setIsFourPeople] = useState(false)

  const Comments = recipe.twists.map(({ name, comment, id }) => (
    <Comment name={name} comment={comment} key={id} />
  ))

  return (
    <ScrollView>
      <Image source={{ uri: recipe.image }} style={RecipeStyles.image} />
      <View style={RecipeStyles.contentWrapper}>
        <Paragraph bold style={RecipeStyles.recipeTitleText}>
          {recipe.title}
        </Paragraph>

        {/* SWITCH */}
        <View style={RecipeStyles.switchWrapper}>
          <Text>People:</Text>
          <View style={RecipeStyles.switchCountNumberWrapper}>
            <Text>2</Text>
            <Switch value={isFourPeople} onValueChange={setIsFourPeople} />
            <Text>4</Text>
          </View>
        </View>

        {/* INGREDIENTS */}
        <View style={RecipeStyles.ingredientsWrapper}>
          <Paragraph style={RecipeStyles.ingredientsTextTitle}>
            INGREDIENTS:
          </Paragraph>

          <Ingredients number={1} name='Souse' qty={100} measure='g' />
          <Ingredients number={2} name='Rice' qty={250} measure='g' />
          <Ingredients number={3} name='Sausages' qty={200} measure='g' />
        </View>

        {/* COMMENTS */}
        <Paragraph style={RecipeStyles.commentsTitle}>COMMENTS:</Paragraph>

        {Comments}
      </View>
    </ScrollView>
  )
}

const RecipeStyles = StyleSheet.create({
  image: { height: hp(30), width: '100%' },
  contentWrapper: {
    marginHorizontal: hp(3),
    marginTop: hp(2),
    alignItems: 'center',
  },

  recipeTitleText: { fontSize: textSize.sd },

  switchWrapper: { alignItems: 'center', marginVertical: hp(3) },
  switchCountNumberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: hp(10),
    justifyContent: 'space-between',
  },

  ingredientsWrapper: {
    alignItems: 'center',
    width: '60%',
  },
  ingredientsTextTitle: { fontSize: textSize.sd, marginBottom: hp(2) },

  commentsTitle: { fontSize: textSize.sd, marginTop: hp(3) },
})

export default Recipe
