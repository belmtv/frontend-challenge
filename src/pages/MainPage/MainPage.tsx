import { useUnit } from 'effector-react'
import { $catsList, fetchAllCats } from './model'
import { useEffect, useState } from 'react'
import { CardList } from '../../components/CardList/CardList'

export const MainPage = () => {
    const catsList = useUnit($catsList)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const isBottom = () => {
            return (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight
            )
        }
        const loadMoreCats = () => {
            if (isBottom() && !loading) {
                setLoading(true)

                fetchAllCats({})
            }
        }

        window.addEventListener('scroll', loadMoreCats)

        return () => {
            window.removeEventListener('scroll', loadMoreCats)
        }
    }, [loading])

    useEffect(() => {
        setLoading(false)
    }, [catsList])

    useEffect(() => {
        fetchAllCats({})
    }, [])

    if (!catsList) return <div>Loading...</div>

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
