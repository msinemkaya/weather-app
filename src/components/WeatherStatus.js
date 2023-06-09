export default function WeatherStatus({ icon, stats }) {
  return (
    <>
      <div className='weather-stats'>
        <div className='weather-icon-div'>{icon}</div>

        <div className='stats'>
          {stats.map((stat, index) => (
            <span key={index} className='stat'>{stat}</span>
          ))}
        </div>
      </div>
    </>
  );
}
