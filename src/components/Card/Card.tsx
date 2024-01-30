import { Cat } from '../../pages/MainPage/model/types'
import styles from './Card.module.scss'

type CardProps = {
    Card: Cat
}

export const Card = ({ Card }: CardProps) => {
    return (
        <div>
            <img className={styles.image} src={Card.url} />
        </div>
    )
}
