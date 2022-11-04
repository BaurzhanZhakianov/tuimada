import {format} from 'date-fns';
import {INews} from '../types/news';
import {IService, IStation} from '../types/types';
const news1 = require('../assets/images/news1.png');
const news2 = require('../assets/images/news2.png');
const news3 = require('../assets/images/news3.png');
const news4 = require('../assets/images/news4.png');

const news: INews[] = [
  {
    id: '1',
    title: 'Путешесвие на своем автомобиле по России',
    date: format(new Date(), 'dd MMMM · yyyy'),
    image: news1,
  },
  {
    id: '2',
    title: 'Каршеринг.Полезные фишки новичкам',
    date: format(new Date(), 'dd MMMM · yyyy'),
    image: news2,
  },
  {
    id: '3',
    title: 'Сколько на самом деле стоит владение авто',
    date: format(new Date(), 'dd MMMM · yyyy'),
    image: news3,
  },
  {
    id: '4',
    title: 'Рынок авто в 2022 году. Что делать и покупать?',
    date: format(new Date(), 'dd MMMM · yyyy'),
    image: news4,
  },
];

const stats = {status: 'Серебро', points: 1405, score: 897884563};
const services: IService[] = [
  {title: 'История операций', type: 'history', id: '1', badge: 17},
  {title: 'Карта заправок', type: 'maps', id: '2', badge: 94},
  {title: 'Оставить отзыв', type: 'feedback', id: '3', badge: 0},
];

const stations: IStation[] = [
  {
    id: '1',
    number: 2442,
    address: 'Восстания, дом 56',
    latitude: 55.836759,
    longitude: 49.0785648,
    marks: [
      {name: 'АИ-92', octaneNumber: 92, price: 45.88},
      {name: 'АИ-95', octaneNumber: 95, price: 49.4},
      {name: 'АИ-98', octaneNumber: 98, price: 53.5},
      {name: 'АИ-102', octaneNumber: 102, price: 60.53},
      {name: 'АИ-100', octaneNumber: 100, price: 57.2},
      {name: 'АИ-105', octaneNumber: 105, price: 67.22},
    ],
  },
  {
    id: '2',
    number: 4421,
    address: 'Восстания, дом 72',
    latitude: 55.845762,
    longitude: 49.0795653,
    marks: [
      {name: 'АИ-98', octaneNumber: 98, price: 56.3},
      {name: 'АИ-100', octaneNumber: 100, price: 57.2},
      {name: 'АИ-102', octaneNumber: 102, price: 61.93},
      {name: 'АИ-105', octaneNumber: 105, price: 67.22},
    ],
  },
];

const tracks = [
  {
    id: '1',
    url: require('../assets/audio/test.mp3'),
    title: 'Вечерний Ургант',
  },
  {
    id: '2',
    url: require('../assets/audio/test2.mp3'),
    title: 'Метроном',
  },
];

export {news, stats, services, stations, tracks};
