import React from 'react'
import Checkout from '../Checkout/Checkout.js'
import './Cart.css'

export default function Cart(props) {
  const summary = Object.keys(props.currentState.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.currentState.selected[feature];
  
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.currency.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
  
  const total = Object.keys(props.currentState.selected).reduce(
    (acc, curr) => acc + props.currentState.selected[curr].cost,
    0
  );
  
  return (
    <Checkout 
    total={total} 
    summary={summary} 
    currency={props.currency} 
    update={props.update}
    currentState={props.currentState}
    features={props.features}
    />
  );
}