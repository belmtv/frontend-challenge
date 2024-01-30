import { Cat } from '../../pages/MainPage/model/types'
import styles from './CardList.module.scss'
import { Card } from '../Card/Card'

type Cards = {
    cards: Cat[]
}

export const CardList = ({ cards }: Cards) => {
    return (
        <div className={styles.block}>
            {cards?.map((el) => <Card key={el.id} Card={el} />)}
        </div>
    )
}
