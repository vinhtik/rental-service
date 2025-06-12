import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
    {
        'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. Jacuzzi top.',
        'type': 'apartment',
        'price': 370,
        'images': [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '7.jpg',
        ],
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
        'goods':[
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Vinh',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
        'id': 'bap06a0e-3f92-436d-9a68-sdfg4b5d38e2b',
        'title': 'White house',
        'description': 'A new spacious house.',
        'type': 'house',
        'price': 670,
        'images': [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
        ],
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
        'goods':[
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Vinh',
            'avatarUrl': 'avatar-angelina.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 4,
        'maxAdults': 6
    },
        {
        "id": "478fe2-9de7-4cfc-832e-98bbf1aef6ec",
        "title": "Good appartment in good place",
        "description": "Cozy apartment. Perfect for tourists.",
        "type": "apartment",
        "price": 180,
        "city": {
            "name": "Amsterdam",
            "location": {
                "latitude": 52.3809553943508,
                "longitude": 4.939309666406198,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 52.3809553943508,
            "longitude": 4.939309666406198,
            "zoom": 16
        },
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.4,
        "bedrooms": 2,
        "goods": [
            "Breakfast",
            "Air conditioning",
            "Laptop friendly workspace",
            "Baby seat",
            "Washer",
            "Towels",
            "Fridge"
        ],
        "host": {
            "name": "Angelina",
            "avatarUrl": "avatar-angelina.jpg",
            "isPro": true
        },
        "images": [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg'
        ],
        "maxAdults": 3
    },
    
]