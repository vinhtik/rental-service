import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { FavoritesPage } from './pages/favorites-page/favorites-page'
import { LoginPage } from './pages/login-page/login-page'
import { OfferPage } from './pages/offer-page/offer-page'
import { EmptyPage } from './pages/empty-page/empty-page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <LoginPage />
    <OfferPage /> */}
    <EmptyPage />
  </StrictMode>,
)
