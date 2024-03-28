import React, { useState ,useEffect} from 'react'

const WeatherCard = ({allData}) => {
const [weatherCondition,setweatherCondition] = useState();

    const {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset
      }=allData;

      let sec = sunset;
      let date = new Date(sec*1000);
    const timeStr = `${date.getHours()}:${date.getMinutes()}`

    useEffect(() => {
      if(weatherMood){
        switch (weatherMood) {
            case 'Clouds': setweatherCondition('wi-day-cloudy'); 
                break;
            case 'Haze': setweatherCondition('wi-day-haze');
                break;
            case 'Clear': setweatherCondition('wi-day-sunny'); 
                break;
            case 'Mist': setweatherCondition('wi-dust'); 
                break;
            case 'Dust': setweatherCondition('wi-dust'); 
                break;
            case 'Fog': setweatherCondition('wi-fog'); 
                break;
            case 'Drizzle': setweatherCondition('wi-dust'); 
                break;
            case 'Rain': setweatherCondition('wi-rain'); 
                break;
            case 'Thunderstorm': setweatherCondition('wi-thunderstorm'); 
                break;
            case 'Snow': setweatherCondition('wi-snowflake-cold'); 
                break;
        
            default:setweatherCondition('wi-day-sunny');
                break;
        }
      }
    }, [weatherMood])
    
  return (
    <>
        <article className='widget'>
        <div className='weatherIcon'>
        <i className={`wi ${weatherCondition}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
              <span>{temp}&deg;C </span>
            </div>
          <div className='description'>
            <div className='weatherCondition'>{weatherMood}</div>
            <div className='place'>{name},{country}</div>
          </div>
        </div>
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p><i className={'wi wi-sunset'}></i></p>
              <p className='extra-info-leftside'>{timeStr} PM<br/>Sunset</p>
            </div>
            <div className='two-sided-section'>
              <p><i className={'wi wi-humidity'}></i></p>
              <p className='extra-info-leftside'>{humidity}<br/>Humidity</p>
            </div>
          </div>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p><i className={'wi wi-rain'}></i></p>
              <p className='extra-info-leftside'>{pressure}mbar<br/>Pressure</p>
            </div>
            <div className='two-sided-section'>
              <p><i className={'wi wi-strong-wind'}></i></p>
              <p className='extra-info-leftside'>{speed}<br/>Speed</p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard