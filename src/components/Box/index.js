import React from 'react';
import DonutTemplate from '../DonutTemplate';
import './styles.css';

const Box = ({ name, donuts, handleDonutClick, nameId, isAdding}) => {
  const title = `${name}${donuts.length >= 12 ? ' (Full)' : ''}`
  const handleClick = () => {
    if (isAdding) {
      handleDonutClick(nameId);
    }
  }
  return (
    <div className="orderContainer">
      <h1>{title}</h1>
      <div className="donutBox" onClick= {handleClick}>
        {donuts.map(({donutId, ...rest}) => {
          return (
            <DonutTemplate
              handleDonutClick={handleDonutClick}
              isAdding={isAdding}
              key={donutId} 
              {...rest}
            />
          )
        })}
      </div>
    </div>
  )
};

export default Box;