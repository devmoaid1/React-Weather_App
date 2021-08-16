
import './App.css';
import WeatherComponent from './components/weather';
import FormContainer from './components/Form';
function App() {

  const getWeather=(e)=>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div className="App"> 
    <FormContainer submit={getWeather} />
    <WeatherComponent/>
      
    </div>
  );
}

export default App;
