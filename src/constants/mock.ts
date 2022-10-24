import {format} from 'date-fns';
import {INews} from '../types/news';
import {IService} from '../types/types';
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

export {news, stats, services};
