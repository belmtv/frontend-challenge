type CatApiResponse = {
    breeds: any[] 
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
> & { liked: boolean }
