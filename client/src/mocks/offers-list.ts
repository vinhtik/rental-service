import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
     {
        'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage':'apartment-01.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 16
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
    },
    {
        'id': 'bap06a0e-3f92-436d-9a68-sdfg4b5d38e2b',
        'title': 'White house',
        'type': 'house',
        'price': 670,
        'previewImage':'apartment-02.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.3909553943508,
                'longitude': 4.85309666406198,
                'zoom': 13
            }
        },
        'location': {
                'latitude': 52.3909553943508,
                'longitude': 4.85309666406198,
                'zoom': 16
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.5,
    },
    {
        "id": "478fe2-9de7-4cfc-832e-98bbf1aef6ec",
        "title": "Good appartment in good place",
        "type": "apartment",
        "price": 150,
        "city": {
            "name": "Amsterdam",
            "location": {
                "latitude": 52.3609553943508,
                "longitude": 4.85309666406198,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 52.3609553943508,
            "longitude": 4.85309666406198,
            "zoom": 16
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.2,
        "previewImage": "apartment-03.jpg"
    },
]