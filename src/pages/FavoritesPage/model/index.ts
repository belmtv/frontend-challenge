import { createStore } from 'effector'
import { Cat } from '../../MainPage/model/types'

export const $favoriteCards = createStore<Cat[] | null>(null)
