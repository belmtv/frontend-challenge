import styles from './NavBar.module.scss'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

enum ButtonType {
    AllCats = 'allCats',
    FavCats = 'favCats',
}

export const NavBar = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null)

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName)
    }
    return (
        <div className={styles.block}>
            <div className={styles.blockButton}>
                <Link to={'/'}>
                    <Button
                        color="white"
                        isActive={activeButton === ButtonType.AllCats}
                        onClick={() => handleButtonClick(ButtonType.AllCats)}
                    >
                        Все котики
                    </Button>
                </Link>
                <Link to={'/favorites'}>
                    <Button
                        color="white"
                        isActive={activeButton === ButtonType.FavCats}
                        onClick={() => handleButtonClick(ButtonType.FavCats)}
                    >
                        Любимые котики
                    </Button>
                </Link>
            </div>
        </div>
    )
}
