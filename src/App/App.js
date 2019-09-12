import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import './App.css';

class App extends Component {
  
  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      console.log(this.props.features),
      console.log('this.state from app: ' + this.state.selected),
      <div className="App">
        <Cart 
        currentState={this.state}
        features={this.props.features}
        currency={this.USCurrencyFormat}
        update={this.updateFeature}
        />
      </div>
    )
  }
}

export default App;
