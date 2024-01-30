import './styles/index.scss'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'

export const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/favorites'} element={<FavoritesPage />} />
            </Routes>
        </div>
    )
}
