import { createEffect, createStore, createEvent, sample } from 'effector'
import { Cat } from './types'
import { apiServise } from '../../../api/apiServise'
import { $favoriteCards } from '../../FavoritesPage/model'

export const fetchAllCats = createEffect<{}, Cat[]>(async () => {
    const { data } = await apiServise()
    return data
})

export const $catsList = createStore<Cat[] | null>(null)

export const setLikedCard = createEvent<Cat | null>(null)

$catsList
    .on(fetchAllCats.doneData, (state, newData) => {
        const updatedData = newData.map((el) => ({
            id: el.id,
            url: el.url,
            liked: false,
        }))

        return state === null ? updatedData : [...state, ...updatedData]
    })
    .on(setLikedCard, (cats, cat) => {
        const result = cats.map((el) => {
            if (el.id === cat.id) {
                return { ...el, liked: !cat.liked }
            }
            return el
        })

        return result
    })

sample({
    clock: $catsList,
    fn: (state) => state.filter((el) => el.liked === true),
    target: $favoriteCards,
})
