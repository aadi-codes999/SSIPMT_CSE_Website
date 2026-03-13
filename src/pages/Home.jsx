import React from 'react';
import CinematicHero from '../components/CinematicHero';
import WhatWeOffer from '../components/WhatWeOffer';
import NoticeBoard from '../components/NoticeBoard';

const Home = () => {
  return (
    <div className="home-page">
      <CinematicHero />
      <WhatWeOffer />
      <NoticeBoard />
    </div>
  );
};

export default Home;
