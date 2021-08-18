import React,{useState} from 'react'
import { API_KEY } from '../App'
import axios from 'axios'
import WeatherComponent from './weather'
function FormContainer() {

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
    if(city===""&country===""){setError("Please choose city and country")}
    else{

        console.log("submitted")
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`).then(res=>{

            setTemprature(res.data.main.temp)
            setHumidity(res.data.main.humidity)
            setDescription(res.data.weather[0].description)


        }).catch(err=>console.log(err))
        
      
       
    }
    
}

console.log(temprature,state)
   
    
    return (
        <div>

        
       <form  className="formcontainer"onSubmit={getWeather}>
           <input type="text" name="city" onChange={(e)=>setCity(e.target.value)} placeholder="city......."></input>
           <input type="text" name="country" onChange={(e)=>setCountry(e.target.value)}  placeholder="country....."></input>
           {error}
           <button type="submit"> Get Weather</button>
       <WeatherComponent state={state}/>
       </form>
       
       </div>
    )
}



export default FormContainer
