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
        'id': 'bag36a0e-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'stone apps',
        'description': 'A new spacious appartment.',
        'type': 'apartment',
        'price': 320,
        'images': [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
        ],
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 44.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
                'latitude': 44.85661,
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
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 4,
        'maxAdults': 6
    },
    
]