import WeatherStatus from './WeatherStatus';
import sunRain from '../imgs/sun_rain.png';
import thunder from '../imgs/Thunder.png';
import { TiWeatherSunny } from 'react-icons/ti';

export default function WeatherCard({ name, degree, date }) {
  return (
    <>
      <div className='box box-shadow'>
        <img src={sunRain} alt='' className='icon' />
        <img src={thunder} alt='' className='icon' />
        <div className='city-name-container'>
          <h1 className='city-name'>{name}</h1>
        </div>
        <div className='weather-container'>
          <div className='weather-info'>
            <span className='degree'>
              {degree}
              <span className='centigrade-symbol'>°C</span>
            </span>
            <span className='todays-date'>{date}</span>
          </div>
          <div className=''>
            <WeatherStatus
              icon={<TiWeatherSunny />}
              stats={['sunny', 'a little windy']}
            />
          </div>
        </div>
      </div>
    </>
  );
}
