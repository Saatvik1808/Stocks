import logo from "./logo.svg";
import "./App.css";
import Chart from "./Components/Chart";
import Chart2 from "./Components/Chart2";
import Chart3 from "./Components/Chart3";
import Chart4 from "./Components/Chart4";
import Blue from "./Blue.mp4";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <h1>
        <div className="saatvik">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("STOCK MARKET ANALYZER").start();
            }}
          />
        </div>
      </h1>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Blue} type="video/mp4" />
      </video>
      <Chart />
      <Chart2 />
      <Chart3 />
      <Chart4 />
    </div>
  );
}

export default App;
