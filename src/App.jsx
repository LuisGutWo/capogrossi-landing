// import { Route, Routes } from "react-router-dom";
// import { useUserContext } from "./context/UserContext";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import TopBar from "./components/topbar/TopBar";

function App() {
  // const { user } = useUserContext();

  return (
    <div id="app">
        {/* <TopBar /> */}
        <Header />
        {/* <HeroSection /> */}


      {/* <main>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;
