import React from 'react'
import { View, FlatList, ListRenderItem, StyleSheet } from 'react-native'

import Button from '../components/Button'
import { logoutUser } from '../features/login/loginSlice'
import { useGetRecipesQuery } from '../features/recipes/fetchRecipes'
import { PackWithKeys } from '../features/recipes/types'
import { useAppDispatch } from '../hooks/redux/selectorDispatch'
import PackCard from '../components/PackCard'
import LoadingContainer from '../components/LoadingContainer'
import ErrorContainer from '../components/ErrorContainer'

function HomeScreen() {
  const dispatch = useAppDispatch()
  const { data = [], isFetching, isError } = useGetRecipesQuery()
  const onLogoutHandler = () => {
    dispatch(logoutUser())
  }

  const packDataArray = Object.values(data)

  if (isFetching) {
    return <LoadingContainer />
  }

  if (isError) {
    return <ErrorContainer errorMessage='Error occurred during data loading' />
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
