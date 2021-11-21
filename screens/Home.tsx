import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Button from '../components/Button'
import { logoutUser } from '../features/login/loginSlice'
import { useGetRecipesQuery } from '../features/recipes/fetchRecipes'
import { PackWithKeys } from '../features/recipes/types'
import { useAppDispatch } from '../hooks/redux/selectorDispatch'
import { RootStackParamList } from '../types'
import PackCard from '../components/PackCard'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import useOrientation from '../hooks/useOrientation'

function HomeScreen() {
  const dispatch = useAppDispatch()
  const { data = [], isFetching } = useGetRecipesQuery()
  const onLogoutHandler = () => {
    dispatch(logoutUser())
  }

  const renderItem: ListRenderItem<PackWithKeys> = ({
    item: { id, photo, name, recipes },
  }) => (
    <PackCard packId={id} packPhoto={photo} packName={name} recipes={recipes} />
  )

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <FlatList<PackWithKeys>
        data={Object.values(data)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={{
          width: '100%',
        }}
      />
      <Button onPress={onLogoutHandler}>Logout</Button>
    </View>
  )
}

export default HomeScreen
