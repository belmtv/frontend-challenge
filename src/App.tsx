import './styles/index.scss'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { FavoritesPage } from './pages/FavoritesPage'

export const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route
                    path={'/frontend-challenge/'}
                    element={<MainPage />}
                    index
                />
                <Route
                    path={'/frontend-challenge/favorites'}
                    element={<FavoritesPage />}
                />
            </Routes>
        </div>
    )
}
