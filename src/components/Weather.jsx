/* eslint-disable react/prop-types */
const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p className="text-sm capitalize">
                    {weatherData.weather[0].description}
                  </p>
                </div>

                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()}°C
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                  className="w-[120px]"
                />
              </div>

              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex justify-between gap-x-8">
                    <p className="">Feels Like</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()}°C
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-8">
                    <p className="">Humidity</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity}%
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-8">
                    <p className="">Wind Speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} Km/h
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-8">
                    <p className="">Pressure</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure} hPa
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Weather;
