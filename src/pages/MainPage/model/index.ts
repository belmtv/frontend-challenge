import { createEffect, createStore, sample, guard } from 'effector'
import { Cat } from './types'
import { apiServise } from '../../../api/apiServise'

export const fetchAllCats = createEffect<{}, Cat[]>(async () => {
    const { data } = await apiServise()
    return data
})

export const $catsList = createStore<Cat[] | null>(null)

export const loadMoreCats = createEffect<{}, Cat[]>(async () => {
    const { data } =
        await apiServise(/* дополнительные параметры, если необходимо */)
    return data
})

export const $isLoading = createStore(false)

$catsList.on(fetchAllCats.doneData, (state, newData) => {
    const updatedData = newData.map((el) => ({
        id: el.id,
        url: el.url,
    }))

    return state === null ? updatedData : [...state, ...updatedData]
})
