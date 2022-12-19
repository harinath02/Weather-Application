
import React, { useState,useEffect } from 'react';
import coldBg from './assets/cold.jpg';
import hotBg from './assets/hot.jpg'

import Descriptions from './components/descriptions';
import Footer from './components/footer';

import { AppStyle, OverLay,Container, Icon, Section, SectionInput,Input, SectionButton, IconStyle ,IconHeading, TemperatureHeading} from './style';
import { getFormattedWeatherData } from './weatherService';

function App() {

  const [city,setCity] = useState("lucknow");
  const [weather,setWeather]=useState(null);
  const [units,setUnits]=useState("metric");
  const [bg,setBg]=useState(hotBg);


  useEffect(()=>{
   const fetchWeatherData = async () => {
   const data = await getFormattedWeatherData(city,units);
   setWeather(data);

   const threshold = units === 'metric' ? 20 :60;
 if (data.temp <= threshold) setBg(coldBg);
 else setBg(hotBg);
   };
   fetchWeatherData();
 },[units,city] );

 const handleUnitsClick = (e) => {
   const button = e.currentTarget;
   const currentUnit = button.innerText.slice(1);

   const isCelsius = currentUnit === "C";
   button.innerText = isCelsius? "°F" : "°C";
   setUnits(isCelsius ? "metric" : "imperial");
   
 };

 const enterKeyPressed = (e) => {
  if (e.keyCode === 13){
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }
 };

  return (
   <>
   <AppStyle style={{ backgroundImage: `url(${bg})` }}>
      <OverLay>
        {weather && (

          <Container>
            <Section>
              <SectionInput>
                <Input onKeyDown={enterKeyPressed} type='text' name='city' placeholder='Enter City...'></Input>
                <SectionButton onClick={(e) => handleUnitsClick(e)}>°F</SectionButton>
              </SectionInput>
            </Section>
            <Section>
              <SectionInput>
                <IconStyle>
                  <IconHeading>{`${weather.name},${weather.country}`}</IconHeading>
                  <Icon src={weather.iconURL} alt='weather icon'></Icon>
                  <IconHeading>{weather.description}</IconHeading>
                </IconStyle>
                <div className="temperaure">
                  <TemperatureHeading>{`${weather.temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</TemperatureHeading>
                </div>
              </SectionInput>
              {/* bottom description */}
              <Descriptions weather={weather} units={units}></Descriptions>
            </Section>
          </Container>
        )}
      </OverLay>
    </AppStyle>
    <Footer></Footer>
    </>
  );
}

export default App;
