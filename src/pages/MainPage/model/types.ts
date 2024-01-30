type CatApiResponse = {
    breeds: any[] // Пока что не типизируем породы, можно добавить типы по мере необходимости
    categories: {
        id: number
        name: string
    }[]
    id: string
    url: string
    width: number
    height: number
}

export type Cat = Omit<
    CatApiResponse,
    'breeds' | 'categories' | 'width' | 'height'
>
