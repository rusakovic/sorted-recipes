import React, { useEffect, useState, useCallback } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import HomeScreen from './screens/Home'
import WelcomeScreen from './screens/Welcome'

import { RootStackParamList } from './types'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { useAppSelector } from './hooks/redux/selectorDispatch'
import {} from './features/login/loginSlice'

const renogare = require('./assets/fonts/Renogare-Regular.otf')
const montserrat = require('./assets/fonts/Montserrat-Regular.ttf')
const montserratBold = require('./assets/fonts/Montserrat-Bold.ttf')

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  const loggedUser = useAppSelector((state) => state.login.user?.exp ?? null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedUser ? (
          <Stack.Screen name='Home' component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen
              name='Welcome'
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Pre-load fonts, make any API calls you need to do here
        await Promise.all([
          Font.loadAsync({
            renogare,
            montserrat,
            montserratBold,
          }),
        ])
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Navigator />
      </View>
    </Provider>
  )
}
