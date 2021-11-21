import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { PackWithKeys, TransformedRecipe } from '../features/recipes/types'
import { colour, radius, textSize } from '../styles'
import PackCardRecipe from './PackCardRecipe'
import Paragraph from './Paragraph'

interface PackCardProps {
  packId: PackWithKeys['id']
  packPhoto: PackWithKeys['photo']
  packName: PackWithKeys['name']
  recipes: PackWithKeys['recipes']
}

const PackCard: React.FunctionComponent<PackCardProps> = ({
  packPhoto,
  packId,
  packName,
  recipes,
}) => {
  const PackCardRecipes = Object.values(recipes).map(
    (recipe: TransformedRecipe) => (
      <PackCardRecipe key={recipe.id} recipe={recipe} packId={packId} />
    )
  )

  return (
    <View style={PackCardStyles.shadowWrapper}>
      <View style={PackCardStyles.imageWithName}>
        <Image
          resizeMode='cover'
          source={{ uri: packPhoto }}
          style={PackCardStyles.image}
        />
        <View style={PackCardStyles.recipeNameWrapper}>
          <Paragraph bold style={PackCardStyles.recipeText}>
            {packName}
          </Paragraph>
        </View>
      </View>
      <View style={PackCardStyles.recipesWrapper}>{PackCardRecipes}</View>
    </View>
  )
}

const PackCardStyles = StyleSheet.create({
  shadowWrapper: {
    marginVertical: 30,
    marginHorizontal: 15,

    backgroundColor: '#fff',

    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowColor: colour.black.fullBlack,
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: radius.sd,
  },
  imageWithName: {
    height: hp(25),
    overflow: 'hidden',
    borderTopStartRadius: radius.sd,
    borderTopEndRadius: radius.sd,
  },
  image: { height: '100%', width: '100%' },
  recipeNameWrapper: {
    position: 'absolute',
    backgroundColor: colour.opacity.grey40opacity,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeText: { fontSize: textSize.sd, color: colour.grey.veryLight },

  recipesWrapper: { justifyContent: 'center', marginVertical: hp(5) },
})

export default PackCard
