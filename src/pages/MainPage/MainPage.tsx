import { useUnit } from 'effector-react'
import { $catsList, fetchAllCats } from './model'
import { useEffect } from 'react'
import { CardList } from '../../components/CardList'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { Loading } from '../../components/Loading'

export const MainPage = () => {
    const catsList = useUnit($catsList)
    const { loading, setLoading } = useInfiniteScroll()

    useEffect(() => {
        fetchAllCats({})
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [catsList])

    if (!catsList) return <Loading />

    return (
        <div className="page-default">
            <CardList cards={catsList} />
            {loading && (
                <div
                    style={{
                        display: 'flex',
                        margin: '50px auto',
                        justifyContent: 'center',
                    }}
                >
                    ...загружаем еще котиков...
                </div>
            )}
        </div>
    )
}
