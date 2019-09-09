import React from 'react'

export default function Cart(props) {
    console.log('props from cart: ' + props)
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    const summary = Object.keys(props.currentState.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.currentState.selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });
  
      const total = Object.keys(props.currentState.selected).reduce(
        (acc, curr) => acc + props.currentState.selected[curr].cost,
        0
      );
  
      return (
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {total}
            </form>
            <section className="main__summary">
              <h2>Your cart</h2>
              {summary}
              <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                  {USCurrencyFormat.format(total)}
                </div>
              </div>
            </section>
          </main>
        </div>
      );
}