import { Cat } from '../../pages/MainPage/model/types'
import styles from './Card.module.scss'
import { setLikedCard } from '../../pages/MainPage/model'

type CardProps = {
    Card: Cat
}

export const Card = ({ Card }: CardProps) => {
    const handleLikeClick = () => {
        setLikedCard(Card)
    }

    return (
        <div className={styles.block}>
            <img className={styles.image} src={Card.url} />
            <button
                className={`${styles.imageLike} ${Card.liked ? styles.imageActiveLike : styles.imageDefaultLike}`}
                onClick={() => handleLikeClick()}
            ></button>
        </div>
    )
}
