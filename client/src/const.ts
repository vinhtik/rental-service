export const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer/:id',
} as const;

export const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}

export const Setting = {
    RentalOffersCount: 312,
} as const;

export const STARS_COUNT = 5;