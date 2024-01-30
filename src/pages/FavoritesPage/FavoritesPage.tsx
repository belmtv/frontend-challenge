import { useUnit } from 'effector-react/compat'
import { $favoriteCards } from './model'
import { CardList } from '../../components/CardList/CardList'

export const FavoritesPage = () => {
    const favoritesCards = useUnit($favoriteCards)
    return (
        <div className="page-default">
            <CardList cards={favoritesCards} />
        </div>
    )
}
