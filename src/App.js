import "./App.css";

import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-frame">
          <Main defaultCity="Vancouver" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
