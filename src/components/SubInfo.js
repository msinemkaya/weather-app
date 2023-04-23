

export default function SubInfo({info, icon, value}) {
  return (
    <div className='sub-info'>
      <span className="sub-info-info">
        <span className="sub-info-icon">
          {icon}
        </span>
        <span className="sub-info-text">
          {info}
        </span>
      </span>
      <span className="sub-info-value">
        {value}
      </span>
    </div>
  );
}
