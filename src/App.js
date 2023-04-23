import { useEffect, useState } from 'react';
import LoadingSpinner from './components/LoadigSpinner';
import Navbar from './components/Navbar';
import SubInfo from './components/SubInfo';
import WeatherCard from './components/WeatherCard';
import WeatherSlider from './components/WeatherSlider';
import { TiWeatherWindy } from "react-icons/ti";
import { WiThermometerExterior} from "react-icons/wi"
import useApi from './hooks/useApi';
import * as Weather from './api/weather';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const weatherApi = useApi(Weather.getCurrentWeather)
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    weatherApi.request({params: {q: search}}).then(() => setIsLoading(false))
  }, [search])

  // let content = (
  //     <WeatherCard name={'Aydın, TR'} degree={'15'} date={'April 22, 1999'} />
  //     <div className='sub-info-container'>
  //       <SubInfo info={"humidity"} icon={<WiThermometerExterior/>} value={'50%'}/>
  //       <SubInfo info={"wind"} icon={<TiWeatherWindy />} value={'19km/h'}/>
  //     </div>
  //     <WeatherSlider />
  // )

  // if(isLoading) {
  //   content = <LoadingSpinner />
  // }

  return (
    <>
      <div className='container'>
        <Navbar setSearch={setSearch} value={search}/>
        {!isLoading && <>
          <WeatherCard name={weatherApi.data.location.name} degree={weatherApi.data.current.temp_c} date={'April 22, 1999'} />
          <div className='sub-info-container'>
            <SubInfo info={"humidity"} icon={<WiThermometerExterior/>} value={`${weatherApi.data.current.humidity}%`}/>
            <SubInfo info={"wind"} icon={<TiWeatherWindy />} value={`${weatherApi.data.current.wind_kph}km/H`}/>
          </div>
          <WeatherSlider />
        </>}
      </div>
      {isLoading && <LoadingSpinner /> }
    </>
  );
}

export default App;
