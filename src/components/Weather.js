import React,{useState,useEffect} from 'react'
import WeatherCard from './WeatherCard';


// e17038d0b60decfe17057b615c0c7745
// a3e9417102481d0f925c28bf0883b294
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=a3e9417102481d0f925c28bf0883b294



const Weather = () => {

const[inputData,setInputData]=useState("delhi");
const[allData,setallData] = useState({});


const getWeatherData = async() => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=a3e9417102481d0f925c28bf0883b294`;
    const response = await fetch(url);
    const data = await response.json();

    // destructuring the data

    // const temp = data.main.temp;
    // u can also write like this

    const {temp,pressure,humidity} = data.main;
    const {main:weatherMood} = data.weather[0];
    const {name} = data;
    const {speed} = data.wind;
    const {country,sunset} = data.sys;

    const allDataInfo={
      temp,
      pressure,
      humidity,
      weatherMood,
      name,
      speed,
      country,
      sunset
    }

    setallData(allDataInfo);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
getWeatherData();
},[]);

  return (
    <>
    <div className='wrap'>
        <div className='search'>
          <input type="search" placeholder='Search for Location 🔍' id='search' autoFocus className='searchTerm' onChange={(event)=>{setInputData(event.target.value)}}  value={inputData}/>
          <button className='searchButton' type = 'button' onClick={getWeatherData}>SUBMIT</button>
        </div>
      </div>
      <WeatherCard allData = {allData}/>
    </>
  )
}

export default Weather