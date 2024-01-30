import { createStore } from 'effector'
import { Cat } from '../../MainPage/model/types'

export const $favoriteCards = createStore<Cat[] | null>(null)

$favoriteCards.watch((el) => console.log(el))
