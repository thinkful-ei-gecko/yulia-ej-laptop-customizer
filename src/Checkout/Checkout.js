import React from 'react';
import './Checkout.css'
import OptionList from '../OptionList'

export default function Checkout(props){
    
  return (
    <div>
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <OptionList
            features={props.features}
            currentState={props.currentState}
            currency={props.currency}
            update={props.update}
          />
        </form>
        <section className="main__summary">
          <h2>Your cart</h2>
          {props.summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {props.currency.format(props.total)}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}