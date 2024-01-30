import { useUnit } from 'effector-react'
import { $catsList, fetchAllCats } from './model'
import { useEffect } from 'react'
import { CardList } from '../../components/CardList/CardList'

export const MainPage = () => {
    const test = useUnit($catsList)

    useEffect(() => {
        fetchAllCats({})
    }, [])

    if (!test) return <div>Loading...</div>
    return (
        <div style={{ margin: '50px 62px' }}>
            <CardList cards={test} />
        </div>
    )
}
