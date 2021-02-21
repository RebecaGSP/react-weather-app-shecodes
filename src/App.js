import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mexico"/>
        <footer>
          <p><a href="https://github.com/RebecaGSP/react-weather-app-shecodes" target="_blank">Source code</a> by <a href="https://www.instagram.com/glez1994/" target="_blank">RebecaGSP</a></p>
        </footer>
      </div>
    </div>
  );
}
