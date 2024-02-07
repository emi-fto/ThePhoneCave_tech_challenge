import "./App.css";
import "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import DetailsPage from "./Pages/DetailsPage";
import { Routes, Route } from "react-router-dom";
import { AppShell, Center } from "@mantine/core";
import ErrorPage from "./assets/404.png";

function App() {
  return (
    <div className="App">
      <AppShell>
        <AppShell.Main>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />

            <Route path="/phones/:phoneId" element={<DetailsPage />} />
            <Route
              path="*"
              element={
                <Center>
                  <img className="logo" src={ErrorPage} alt="404" />
                </Center>
              }
            />
          </Routes>
          <hr />
          <Footer />
        </AppShell.Main>
      </AppShell>
    </div>
  );
}
export default App;
