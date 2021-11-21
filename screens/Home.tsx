import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
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
import LoadingContainer from '../components/LoadingContainer'

function HomeScreen() {
  const dispatch = useAppDispatch()
  const { data = [], isFetching } = useGetRecipesQuery()
  const onLogoutHandler = () => {
    dispatch(logoutUser())
  }

  const packDataArray = Object.values(data)

  if (isFetching) {
    return <LoadingContainer />
  }

  const renderItem: ListRenderItem<PackWithKeys> = ({
    item: { id, photo, name, recipes },
  }) => (
    <PackCard
      key={id.toString()}
      packId={id}
      packPhoto={photo}
      packName={name}
      recipes={recipes}
    />
  )

  return (
    <View style={HomeScreenStyles.mainWrapper}>
      <FlatList<PackWithKeys>
        data={packDataArray}
        renderItem={renderItem}
        style={HomeScreenStyles.packWrapper}
      />
      <Button onPress={onLogoutHandler}>Logout</Button>
    </View>
  )
}

const HomeScreenStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  packWrapper: {
    width: '100%',
  },
})

export default HomeScreen
