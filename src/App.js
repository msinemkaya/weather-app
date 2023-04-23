import { useState } from 'react';
import LoadingSpinner from './components/LoadigSpinner';
import Navbar from './components/Navbar';
import SubInfo from './components/SubInfo';
import WeatherCard from './components/WeatherCard';
import WeatherSlider from './components/WeatherSlider';
import { TiWeatherWindy } from "react-icons/ti";
import { WiThermometerExterior} from "react-icons/wi"

function App() {

  const [isLoading, setIsLoading] = useState(false)

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
    <div className='container'>
      <Navbar />
      <WeatherCard name={'Aydın, TR'} degree={'15'} date={'April 22, 1999'} />
      <div className='sub-info-container'>
        <SubInfo info={"humidity"} icon={<WiThermometerExterior/>} value={'50%'}/>
        <SubInfo info={"wind"} icon={<TiWeatherWindy />} value={'19km/h'}/>
      </div>
      <WeatherSlider />
      {/* <LoadingSpinner /> */}
    </div>

    // <>
    //   <div className='container'>
    //     <Navbar />
    //     <LoadingSpinner /> 
    //   </div>  
    // </> 
  );
}

export default App;
