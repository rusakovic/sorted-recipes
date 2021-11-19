import { PackWithKeys, TransformedRecipe } from '../features/recipes/types'

export type RootStackParamList = {
  Home: undefined
  Welcome: undefined
  Recipe: RecipeScreenProps
}

export interface RecipeScreenProps {
  packId: PackWithKeys['id']
  recipeId: TransformedRecipe['id']
}
