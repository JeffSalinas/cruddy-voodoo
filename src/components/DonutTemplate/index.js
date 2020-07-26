import React from 'react';
import './styles.css'

const DonutTemplate = (props) => {
  const { flavor, sprinkles, filled, handleDonutClick, isAdding } = props;
  const donutDescription = `donut ${flavor}${filled ? 'filled' : ''} ${sprinkles && 'sprinkles'}`;
  const handleClick = () => {
    if (isAdding) {
      return;
    } else {
      handleDonutClick(props)
    }
  };

  return (
    <div className="donutContainer" onClick={handleClick}>
      <div className={donutDescription}>
      </div>
      {sprinkles && <img src="./images/sprinkles.png" className="sprinklesTopping"/>}
    </div>
  );
};

export default DonutTemplate;
