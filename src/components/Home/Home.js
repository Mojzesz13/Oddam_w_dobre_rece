import React from 'react';
import './Home.scss';
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeInstruction from "./HomeInstruction/HomeInstruction";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeTarget from "./HomeTarget/HomeTarget";
import HomeContact from "./HomeContact/HomeContact";
import HomeFooter from "./HomeContact/HomeFooter/HomeFooter";

    const Home = () => {
        return (
            <div className="container">
              <HomeHeader/>
              <HomeThreeColumns/>
              <HomeInstruction/>
              <HomeAboutUs/>
              <HomeTarget/>
              <HomeContact/>
            </div>
        );
    };

export default Home;



