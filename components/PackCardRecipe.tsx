import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { PackWithKeys, TransformedRecipe } from '../features/recipes/types'
import { colour, radius } from '../styles'
import { RootStackParamList } from '../types'

interface PackCardRecipeProps {
  packId: PackWithKeys['id']
  recipe: TransformedRecipe
}

const PackCardRecipe: React.FunctionComponent<PackCardRecipeProps> = ({
  recipe: { image, title, id },
  packId,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()

  const onPressRecipeHandler = () => {
    navigation.navigate('Recipe', {
      packId,
      recipeId: id,
    })
  }

  return (
    <Pressable
      key={id}
      onPress={onPressRecipeHandler}
      style={{
        marginHorizontal: 15,
        marginVertical: 10,
        height: hp(20),
        backgroundColor: colour.white.fullWhite,
        elevation: 5,
        shadowOffset: {
          height: 1,
          width: 0,
        },
        shadowColor: colour.black.fullBlack,
        shadowOpacity: 0.2,
        shadowRadius: 7,
        borderRadius: radius.sm,
      }}
    >
      <View
        style={{
          height: '80%',
          overflow: 'hidden',
          borderTopStartRadius: radius.sm,
          borderTopEndRadius: radius.sm,
        }}
      >
        <Image
          resizeMode='cover'
          source={{ uri: image }}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
      <View
        style={{
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{title}</Text>
      </View>
    </Pressable>
  )
}

export default PackCardRecipe
