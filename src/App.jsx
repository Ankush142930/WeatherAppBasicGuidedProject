/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import Weather from './components/Weather';

const App = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');

  const API_KEY = 'a524cbfdb25cdb5aeadfbf6ff7e5c4eb';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const searchCity = (e) => {
    if (e.key == 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setCity('');
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Search for your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDownCapture={searchCity}
        />
      </div>

      <Weather weatherData={data} />
    </div>
  );
};
export default App;
