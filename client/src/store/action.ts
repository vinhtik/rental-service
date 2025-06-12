import { createAction } from "@reduxjs/toolkit";
import { CityOffer, OffersList } from "../types/offer";

const changeCity = createAction('offer/changeCity', (city: CityOffer) => ({
    payload: city
}));

const offersCityList = createAction('offer/offersCityList', (offers: OffersList[]) => ({
    payload: offers
}));

export { changeCity, offersCityList };