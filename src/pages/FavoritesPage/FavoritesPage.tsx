import { useUnit } from 'effector-react/compat'
import { $favoriteCards } from './model'
import { CardList } from '../../components/CardList/CardList'

export const FavoritesPage = () => {
    const favoritesCards = useUnit($favoriteCards)
    return (
        <div style={{ margin: '50px 62px', height: '100vh' }}>
            <CardList cards={favoritesCards} />
        </div>
    )
}
