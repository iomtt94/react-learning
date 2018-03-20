import React from 'react';
import Header from '../components/Header';
import Order from '../components/Order';
import Inventory from '../components/Inventory';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        console.log('adding fish ' + fish);
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes});
    }

    loadSampleFishes = () => {
        console.log('loading samples');
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="arm1 market"/>
                </div>
                <Order/>
                <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;