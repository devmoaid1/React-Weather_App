
import './App.css';
import WeatherComponent from './components/weather';
import FormContainer from './components/Form';

export const API_KEY="e36ed364400282e43250b6c4c0274d44"
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
function App() {

 
  return (
    <div className="App"> 
    <FormContainer  />
    
      
    </div>
  );
}

export default App;
