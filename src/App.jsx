import React from 'react';
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;