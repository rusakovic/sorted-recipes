import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import { logoutUser } from '../features/login/loginSlice'
import { useGetRecipesQuery } from '../features/recipes/fetchRecipes'
import { useAppDispatch } from '../hooks/redux/selectorDispatch'

function HomeScreen() {
  const dispatch = useAppDispatch()
  const { data = [], isFetching } = useGetRecipesQuery()
  const onLogoutHandler = () => {
    dispatch(logoutUser())
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={onLogoutHandler}>Logout</Button>
    </View>
  )
}

export default HomeScreen
