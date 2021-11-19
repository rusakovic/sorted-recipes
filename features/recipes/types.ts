export type RootMenu = Menu[]

export interface Menu {
  id: number
  packs: Pack[]
  title: string
  subtitle: string
  label: string
  image: Image
  description: string
  schedule_type: string
  schedule: string
  published: boolean
  published_at: string
  task_id: string
}

export interface TransformedPacksRoot {
  [key: number]: PackWithKeys
}

export interface PackWithKeys {
  id: number
  is_trial: boolean
  code: string
  name: string
  story: string
  photo?: string
  alt_photos: AltPhotos
  shopping_list: ShoppingList[]
  cooking_count: number
  num_people: string
  num_recipes: any
  twists: any[]
  tags: string[]
  recipes: RecipeWithKeys
}

interface RecipeWithKeys {
  [key: number]: TransformedRecipe
}

interface TransformedRecipe {
  id: number
  cooking_time: CookingTimeWithKeys
  twists: Twist[]
  alt_images: AltImages
  index: number
  code: string
  title: string
  image: string
  intro_audio: any
  num_people: string[]
  finished_importing: boolean
  is_previous_data: boolean
  pack: number
  equipment_items: number[]
}

interface CookingTimeWithKeys {
  [key: number]: CookingTime
}

export interface Pack {
  id: number
  is_trial: boolean
  code: string
  name: string
  story: string
  photo?: string
  alt_photos: AltPhotos
  recipes: Recipe[]
  shopping_list: ShoppingList[]
  cooking_count: number
  num_people: string
  num_recipes: any
  twists: any[]
  tags: string[]
}

export interface AltPhotos {
  medium?: string
  small?: string
  thumbnail?: string
  full_size?: string
}

export interface Recipe {
  id: number
  cooking_time: CookingTime[]
  twists: Twist[]
  alt_images: AltImages
  index: number
  code: string
  title: string
  image: string
  intro_audio: any
  num_people: string
  finished_importing: boolean
  is_previous_data: boolean
  pack: number
  equipment_items: number[]
}

export interface CookingTime {
  id: number
  num_people: number
  duration: number
  recipe: number
}

export interface Twist {
  id: number
  object_id: number
  title: string
  comment: string
  name: string
  city: string
  country: string
  approved: boolean
  content_type: number
}

export interface AltImages {
  medium: string
  small: string
  thumbnail: string
  full_size: string
}

export interface ShoppingList {
  id: number
  items: Item[]
  pack: number
  ingredient_prep_audio: any
  equipment_prep_audio: any
}

export interface Item {
  id: number
  quantities: Quantity[]
  ingredient: Ingredient
  list_type: string
  shopping_list: number
}

export interface Quantity {
  id: number
  unit: Unit
  num_people: number
  quantity: number
  prep_instructions?: string
  shopping_list_item: number
}

export interface Unit {
  id: number
  name: string
  name_abbrev: string
  plural_abbrev: string
  type: string
  system?: string
}

export interface Ingredient {
  id: number
  name: string
  category?: Category
  sub_category?: SubCategory
  type?: Type
  unit?: Unit2
  quantity?: number
  unit_imperial?: UnitImperial
  quantity_imperial?: number
  cost?: number
  tags: string[]
}

export interface Category {
  id: number
  name: string
  shopping_list_display: string
}

export interface SubCategory {
  id: number
  name: string
}

export interface Type {
  id: number
  name: string
}

export interface Unit2 {
  id: number
  name: string
  name_abbrev: string
  plural_abbrev: string
  type: string
  system?: string
}

export interface UnitImperial {
  id: number
  name: string
  name_abbrev: string
  plural_abbrev: string
  type: string
  system?: string
}

export interface Image {}
