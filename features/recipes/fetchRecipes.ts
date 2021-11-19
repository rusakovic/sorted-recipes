import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootMenu, TransformedPacksRoot } from './types'
import keyBy from 'lodash/keyBy'
export const recipesApiSlice = createApi({
  reducerPath: 'recipes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cook.sorted.club/api/v1/',
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<TransformedPacksRoot, void>({
      query: () => 'menu',
      transformResponse: (response: RootMenu) => {
        const packs = response[0].packs

        /* 1. Data transformation by adding keys.
          For easier navigation to pack and recipe
          Not to pass the whole recipe object
          via React Navigation props.
          Calculate once here, reuse in all components.

          All it's done for this
          https://reactnavigation.org/docs/params/#what-should-be-in-params
        */
        const recipesKeyed = packs.map((pack) => {
          const recipes = pack.recipes.map((recipe) => {
            // Add keys for 'num_people' for toggle slider
            return {
              ...recipe,
              cooking_time: keyBy(recipe.cooking_time, 'num_people'),
              num_people: recipe.num_people.split(','),
            }
          })

          // Add keys for recipes
          const recipesWithKeys = keyBy(recipes, 'id')
          return {
            ...pack,
            recipes: recipesWithKeys,
          }
        })

        // Add keys for packs
        const packWithKeys = keyBy(recipesKeyed, 'id')
        return packWithKeys
      },
    }),
  }),
})

export const { useGetRecipesQuery } = recipesApiSlice
