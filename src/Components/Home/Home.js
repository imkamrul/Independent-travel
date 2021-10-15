import React from 'react';
import Budget from '../Budget/Budget';
import Events from '../Events/Events';

import Heroic from '../Heroic/Heroic';
import Hotels from '../Hotels/Hotels';
import MobileApp from '../MobileApp/MobileApp';
import Packages from '../Packages/Packages';
import PopularCities from '../PopularCityies/PopularCities';
import Sites from '../Sites/Sites';
import Tips from '../Tips/Tips';

import './Home.css'

const Home = () => {




    return (
        <div id="home">
            <Heroic></Heroic>
            <Packages></Packages>
            <PopularCities></PopularCities>
            <Hotels></Hotels>
            <Budget></Budget>
            <Events></Events>
            <Sites></Sites>
            <MobileApp></MobileApp>
            <Tips></Tips>
        </div>
    );
};

export default Home;