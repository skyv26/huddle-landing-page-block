import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./store/store";
import { SWITCH_THEME } from "./store/ContextProvider";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const App = () => {
  const { state, dispatch } = useContext(Store);

  const toggleDarkMode = () => {
    const { data, mode } = state;
    const newObj = {
      data,
      mode: !mode,
    };
    dispatch({ type: SWITCH_THEME, payload: newObj });
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
      <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={state.mode}
      onChange={toggleDarkMode}
      size={120}
    />
    </React.Fragment>
  );
};

export default App;
