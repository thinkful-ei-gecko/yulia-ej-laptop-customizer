import React from 'react';
import slugify from 'slugify';
import Option from './Option';

export default function Input(props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === props.currentState.selected[feature].name}
          onChange={e => props.update(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({props.currency.format(item.cost)})
        </label>
        </div>
      );
    });
  
    return (
      <Option  featureHash={featureHash} feature={feature} options={options}/>
    );
  });
  return features;
}

