import React from 'react';
import './styles.css';

const ButtonOptions = ({ 
  buttonOptions, 
  actionSelected, 
  toggleAction
}) => {

  const handleClick = (action) => {
    toggleAction(action);
  };

  const isSelected = (action) => {
    return actionSelected === action ? 'selected' : '';
  };

  return (
    <div className="buttonContainer">
      {buttonOptions.map(({name, action}) => {
        return (
          <button 
            className={isSelected(action)}
            onClick={() => handleClick(action)}
            key={name}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default ButtonOptions;