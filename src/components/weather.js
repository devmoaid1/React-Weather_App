import React from 'react'

function WeatherComponent(props) { 


    const weatherDetails=props.state 


    console.log(weatherDetails)
    return (
        <div className="weatherDetails">
           <ui>
               <div><li>location:</li></div>
               <li>location:{weatherDetails.temprature}</li>
               <li>location:</li>
               <li>location:</li>
           </ui>
        </div>
    )
}

export default WeatherComponent
