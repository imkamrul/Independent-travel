import React from 'react';

import Heroic from '../Heroic/Heroic';
import Hotels from '../Hotels/Hotels';
import Packages from '../Packages/Packages';
import PopularCities from '../PopularCityies/PopularCities';

import './Home.css'

const Home = () => {




    return (
        <div id="home">
            <Heroic></Heroic>
            <Packages></Packages>
            <PopularCities></PopularCities>
            <Hotels></Hotels>
        </div>
    );
};

export default Home;