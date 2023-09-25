import React from 'react';
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;