import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

export const ORIENTATION = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
}

const getWindowOrientation = () => {
  const { width, height } = Dimensions.get('window')
  return height >= width ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE
}

const useOrientation = () => {
  const [orientation, setOrientation] = useState(getWindowOrientation)

  useEffect(() => {
    const updateState = () => {
      setOrientation(getWindowOrientation())
    }
    Dimensions.addEventListener('change', updateState)
    return () => Dimensions.removeEventListener('change', updateState)
  }, [])
  return orientation
}

export default useOrientation
