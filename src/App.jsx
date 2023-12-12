import { Route, Routes } from "react-router-dom";
// import { useUserContext } from "./context/UserContext";
import Home from "./components/Home";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TopBar from "./components/TopBar";

function App() {
  // const { user } = useUserContext();

  return (
    <div id="app">
        <TopBar />
        <Header />
        <HeroSection />


      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
