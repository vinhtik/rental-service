import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import { offers } from './mocks/offers'
import { Setting } from './const'
import { offersList } from './mocks/offers-list'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store = { store }>
      <App
        rentalOffersCount={ Setting.RentalOffersCount }
        offersList={ offersList }
        fullOffers = { offers }
      />
    </Provider>
  </StrictMode>,
)
