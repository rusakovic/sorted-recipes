import React from 'react'
import { Pressable, View, Image, Text } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
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
    <View
      style={{
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
      }}
    >
      <View
        style={{
          height: hp(25),
          overflow: 'hidden',
          borderTopStartRadius: radius.sd,
          borderTopEndRadius: radius.sd,
        }}
      >
        <Image
          resizeMode='cover'
          source={{ uri: packPhoto }}
          style={{ height: '100%', width: '100%' }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: colour.opacity.grey40opacity,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paragraph
            bold
            style={{ fontSize: textSize.sd, color: colour.grey.veryLight }}
          >
            {packName}
          </Paragraph>
        </View>
      </View>
      <View style={{ justifyContent: 'center', marginVertical: 50 }}>
        {PackCardRecipes}
      </View>
    </View>
  )
}

export default PackCard
