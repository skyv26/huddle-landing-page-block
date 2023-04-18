import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./store/store";
import { SWITCH_THEME } from "./store/ContextProvider";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { localStorageNameKey } from "./store/ContextProvider";


const App = () => {
  const { state, dispatch } = useContext(Store);

  const toggleDarkMode = () => {
    const { data, mode } = state;
    localStorage.setItem(localStorageNameKey, JSON.stringify(!mode));
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
      <div
        className="flex flex-row items-center justify-center w-[3.25rem] h-[3.25rem] p-2 absolute bottom-3 right-3 bg-black rounded-full"
      >
        <DarkModeSwitch
          checked={state.mode}
          className="inline-block rounded-full"
          onChange={toggleDarkMode}
          size={50}
          sunColor="yellow"
          moonColor="white"
        />
      </div>
    </React.Fragment>
  );
};

export default App;
