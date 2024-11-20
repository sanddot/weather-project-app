import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-frame">
          <Header />
          <Main defaultCity="Paris" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
