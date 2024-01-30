import { fetchAllCats } from '../../pages/MainPage/model'
import { useEffect, useState } from 'react'

export const useInfiniteScroll = () => {
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

    return { loading, setLoading }
}
