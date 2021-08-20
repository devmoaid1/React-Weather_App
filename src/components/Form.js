import React,{useState} from 'react'
import { API_KEY } from '../App'
import axios from 'axios'
import WeatherComponent from './weather'
function FormContainer() {

    
    
    const [cityInput,setCityInput]=useState("")
    const [countryInput,setCountryInput]=useState("")
    
    
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")


    const[error,setError]=useState("")
    const[temprature,setTemprature]=useState("")
    const[humidity,setHumidity]=useState("")
    const[description,setDescription]=useState("") 
   
    const state={  
        city:city,
        country:country,
        temprature:temprature,
        humidity:humidity,
        description:description,
        error:""
       
        
    } 
    
    const getWeather=async(e)=>{
        e.preventDefault()
    if(cityInput===""&&countryInput===""){setError("Please choose city and country")}
    else{

        console.log("submitted")
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}%2C${countryInput}&appid=${API_KEY}`).then(res=>{

            setTemprature(res.data.main.temp)
            setHumidity(res.data.main.humidity)
            setDescription(res.data.weather[0].description)
            setCity(res.data.name)
            setCountry(res.data.sys.country) 
            
            console.log(res.data)

        }).catch(err=>console.log(err))
        
      
       
    }
    
}

   
    
    return (
        <div className="formcontainer">
       <form onSubmit={getWeather}>
           <input type="text" name="city" onChange={(e)=>setCityInput(e.target.value)} placeholder="city......."></input>
           <input type="text" name="country" onChange={(e)=>setCountryInput(e.target.value)}  placeholder="country....."></input>
           <p>{error}</p>
           <button type="submit"> Get Weather</button>
       </form>
       <WeatherComponent state={state}/>
       </div>
    )
}



export default FormContainer
