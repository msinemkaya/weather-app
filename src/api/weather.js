import { instance } from './base';

export const getCurrentWeather = async (...args) => {
  console.log('getCurrentWeather fonksiyondan geliyo', ...args)
  return await instance.get('/weather')
}
