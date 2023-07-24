import './App.css';

import Search from './components/search/search';
import CurrentWeather from './components/forecast/current-weather';

function App() {
  return (
    <div className="container">
      <Search />
      <CurrentWeather />
    </div>
  );
}

export default App;
