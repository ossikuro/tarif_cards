// data/tariffs.js

const tarifs = [
    {
        id: 1,
        name: 'Базовый',
        price: 299,
        speed: '100 Мбит/с',
        description: 'Оптимально для веб-серфинга и видео в HD.',
        popular: false,
    },
    {
        id: 2,
        name: 'Продвинутый',
        price: 499,
        speed: '300 Мбит/с',
        description: 'Для активных пользователей и стриминга в Full HD.',
        popular: false,
    },
    {
        id: 3,
        name: 'Максимум',
        price: 799,
        speed: '1 Гбит/с',
        description: 'Подходит для геймеров и работы с большими файлами.',
        popular: true,
    },
    {
        id: 4,
        name: 'Корпоративный',
        price: 1999,
        speed: '10 Гбит/с',
        description: 'Подходит для компаний с большим объемом данных.',
        popular: false,
    },
]

export default tarifs
