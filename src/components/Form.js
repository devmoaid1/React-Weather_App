import React,{useState} from 'react'
import { API_KEY } from '../App'


function FormContainer(props) {

    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    
    const[temprature,setTemprature]=useState("")
    const[humidity,setHumidity]=useState("")
    const[description,setDescription]=useState("")
    
    const getWeather=async(e)=>{
        e.preventDefault()
        console.log("submitted")
        const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
        const data=await api.json()
        setTemprature(data.main.temp)
        setHumidity(data.main.humidity)
        setDescription(data.weather[0].description)
        console.log(data,temprature)
    }
    const state={
        city:city,
        country:country,
        temprature:temprature,
        humidity:humidity,
        description:description,
        error:""
    } 
   
    
    return (
       <form  className="formcontainer"onSubmit={getWeather}>
           <input type="text" name="city" onChange={(e)=>setCity(e.target.value)} placeholder="city......."></input>
           <input type="text" name="country" onChange={(e)=>setCountry(e.target.value)}  placeholder="country....."></input>
           <button type="submit"> Get Weather</button>
           
       </form>
    )
}

export default FormContainer
