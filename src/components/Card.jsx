import React from 'react'

const Card = ({cardName,cardDetails,unit}) => {
  return (
    <div className="weather-card">
      <p>{cardName}</p>
      <span>
        {cardDetails}
        {unit}
      </span>
    </div>
  );
}

export default Card