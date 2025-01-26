import React, { useState, useEffect } from 'react';


function CardsComponent() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setdata(data.recipes || []); 
      })
      .catch((error) => console.error('Error in data fetching', error));
  }, []);

  return (
    <div className="cards-main">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="cards-container" key={index}>
            <img
              className="image-box"
              src={item.image}
              alt={item.name}
            />
            <div>
              <h4><b>{item.name }</b></h4>
              <p>{item.cuisine }</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data or no recipes available...</p>
      )}
    </div>
  );
}

export default CardsComponent;
