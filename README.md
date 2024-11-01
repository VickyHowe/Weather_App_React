# Weather Web Application
==========================
### Overview

This weather web application provides real-time weather metrics using the OpenWeatherMap API. The use of a React framework for this projet configured with Vite, and Tailwind CSS allowed for a fast development environment. 

The intuitive, visually engaging weather data idsplayed dynamically through metrics such as temperature, humidity, precipitation and wind speed serve as a functional, reliable application.


### Features
Key Features of this application include

- Real-Time updates using OpenWeatherMap API
- Search Bar for dynamic location input
- Unit Selection Between Farenheight and Celcius
- Toggle Selection between DarkMode and Lightmode
- Current Forecast
- Five-Day Forecast
- Location Map with Weather Metrics 
    - Temperature
    - Humidity
    - Precipitation
    - Wind Speed


### User Interface


### Structure

### Setup
---------------
To run the application, follow these steps:
1. Clone the repository using
 ``` 
 git clone https://github.com/VickyHowe/Weather_App_React.git 
 ```
 2.  Install the required packages by running npm install in the project directory
```
npm install
```
3. Create `.env` file in the main project folder.
    - Create an OpenWeatherMapAPI at https://openweathermap.org/api instructions can be found [here](https://www.educative.io/answers/how-to-get-the-openweather-api-key). **Note**Settingup a new key takes time and OpenWeather will inform you when it is ready.

4. Add your OpenWeatherMap API key to the `.env` file and replace `YOURKEYHERE` with your OpenWeather API Key.

`.env`
```
VITE_WEATHER_API_KEY=YOURKEYHERE
```
### Running the Program
To run the application, execute the following command in terminal for the project directory:
```
npm run dev
```
This will start the development server and make the application accessible at http://localhost:5173/

### References

- Throughout this project I referenced Blackbox ai to aid in troubleshoot issues when I got stuck.

1) Chat blackbox: Ai code generation, code chat, code search. Chat Blackbox: AI Code Generation, Code Chat, Code Search. (n.d.). https://www.blackbox.ai/ 

- API
2) How to get the OpenWeather Api Key. Educative. (n.d.). https://www.educative.io/answers/how-to-get-the-openweather-api-key 

3) Andy. (n.d.). Weather API Project Tutorial using HTML, CSS, and JavaScript | For Beginners. YouTube. https://youtu.be/JubKY5p3qRc 


- Styling

4) Coderflix. (n.d.). Responsive Tailwind CSS Navbar || React || Vite. YouTube. https://www.youtube.com/watch?v=siIZfsZxSIs 

- Images

5) Free stock photos, royalty free stock images & Copyright Free Pictures · Pexels. (n.d.-a). https://www.pexels.com/ 

- Map
6) React leaflet. React Leaflet. (n.d.). https://react-leaflet.js.org/ 
https://openweathermap.org/api/weathermaps
7) Weather maps 1.0 - OpenWeatherMap. (n.d.-c). https://openweathermap.org/api/weathermaps 


### Summary
This project was a challenge to create a weather application that fetches data from the OpenWeatherMap API.

#### Things I learned
- Creating API keys and integrating them with React
- Using Tailwind CSS in-line
- Using React Leaflet to display a map


#### Things I found difficult

- API key in .env specifically requiring VITE in name
- The useeffect update for toggling units from F to C and city
- passing data correctly to calculate daily averages
- styling the map and legend components

#### Nice To Have Future Features

-Interactive graph with slider to display 5day temperature, wind and precipitation
- Pins on map displaying current conditions in major cities displayed


- To Do:

- fix navbar flex


