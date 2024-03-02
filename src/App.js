import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Practise from "./components/Practices/Practices";
import ScheduleWrapper from "./components/Schedules/Schedules";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Practise />
      <ScheduleWrapper />
    </>
  );
}

export default App;
