import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Book from './Book';
import Home from './Home';
import Prices from './Prices';
import TrainDetails from './TrainDetails';
import Buy from './Buy';
import PriceDetails from './PriceDetails';
import CardPayment from './CardPayment';
import About from './About';




const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/book' component={Book}/>
            <Route exact path ='/buy' component={Buy}/>
            <Route exact path ='/prices' component={Prices}/>
            <Route exact path = '/CardPayment' component={CardPayment}/>
            <Route exact path = '/about' component={About}/>
            <Route exact path = '/prices/:id' component={TrainDetails}/>
            <Route exact path = '/buy/:id' component={PriceDetails}/>
        </Switch>
    </main>
)

export default Main;
