export default function SliderItem({icon, degree, hour}){
  return(
    <>
      <div className="box slider-item">
        <p className="slider-hour">{hour}</p>
        <div className="slider-icon">
          {icon}
        </div>
        <p className="slider-degree">
          {degree}°C
        </p>
      </div>
    </>
  );
}