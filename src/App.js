import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="weather-app-frame">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
