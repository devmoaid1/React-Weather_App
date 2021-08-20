import React from 'react'

function WeatherComponent(props) { 


    const weatherDetails=props.state 


    console.log(weatherDetails)
    return (
        <div className="weatherDetails">
           
            {  
                weatherDetails.temprature &&  <p className="info">Temprature:<span className="info-value">{weatherDetails.temprature}</span></p>
            }

            { 
               weatherDetails.country &&  <p className="info">Country:<span className="info-value">{weatherDetails.country}</span></p>

            }

            {
                weatherDetails.city && <p className="info">City:<span className="info-value">{weatherDetails.city}</span></p>
            }

            {
                weatherDetails.humidity &&  <p className="info">humidity:<span className="info-value">{weatherDetails.humidity}</span></p>
            }

            {
                 weatherDetails.description && <p className="info">Description:<span className="info-value">{weatherDetails.description} </span></p>
            }
              
              
               
              
               
           
        </div>
    )
}

export default WeatherComponent
