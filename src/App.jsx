import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  const SECRATE_KEY = "58b8b640dc524c2582f85218252103";
  const BASE_URL = "https://api.weatherapi.com/v1/current.json";
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await fetch(`${BASE_URL}?Key=${SECRATE_KEY}&q=${city}`);
      const resultJson = await result.json();
      setData(resultJson);
      setIsLoading(false);
    } catch (err) {
      window.alert(err.message);
    }
  };
  return (
    <main>
      <div className="search-bar">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        {isLoading && <p>Loading Data...</p>}
        {data && (
          <div className="weather-cards">
            <Card
              cardName={"Temperature"}
              cardDetails={data?.current?.temp_c}
              unit={"℃"}
            />
            <Card
              cardName={"Humidity"}
              cardDetails={data?.current?.humidity}
              unit={"%"}
            />
            <Card
              cardName={"Condition"}
              cardDetails={data?.current?.condition.text}
              unit={""}
            />
            <Card
              cardName={"Wind"}
              cardDetails={data?.current?.wind_kph}
              unit={"kph"}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
