import React, { Component } from 'react';
import {mockData, flavorOptions, buttonOptions } from '../Constants';
import Box from '../Box';
import ButtonOptions from '../ButtonOptions';

import './styles.css';

class DonutShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donutData: {},
      actionSelected: '',
      flavorSelected: 'cherry'
    };
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = () => {
    let response = mockData;
    //add API call to collect Data

    this.setState({ donutData: response });
  }

  handleDonutClick = (donutData) => {
    switch (this.state.actionSelected) {
      case 'sprinkles':
        // toggle 'sprinkles' boolean in DB based on donutId
        console.log('sprinkle power!')
        break;
      case 'changeFlavor':
        // use this.state.flavorSelected to chagne the flavor in DB based on donutId
        console.log('flava flave!')
        break;
      case 'filled':
        // toggle 'filled' boolean in DB based on donutId
        console.log('mmm... jelly donut!')
        break;
      case 'addDonut':
        // use nameId to add donut to box with default flavor 
        console.log('nom nom!')
        break;
      case 'deleteDonut':
        // donut with donutId should be deleted
        console.log(":'(")
        break;
      default:
        return;
    }
  }

  toggleAction = (action) => {
    this.setState({ actionSelected: action });
  }

  toggleFlavor = (flavor) => {
    this.setState({ flavorSelected: flavor })
  }

  renderBoxes = (donutData) => {
    const { actionSelected } = this.state;

    return (
      donutData.boxes.map(({ nameId, ...rest }) => {
        return (
          <Box 
            key={nameId} {...rest}
            nameId={nameId}
            isAdding={actionSelected === 'addDonut'}
            handleDonutClick={this.handleDonutClick}
          />
        );
      })
    );
  }

  render() {
    const { donutData, actionSelected, flavorSelected } = this.state;

    return (
      <>
        <ButtonOptions 
          actionSelected={actionSelected}
          buttonOptions={buttonOptions}
          toggleAction={this.toggleAction}
        />
        {actionSelected === 'changeFlavor' &&
          <ButtonOptions
            actionSelected={flavorSelected}
            buttonOptions={flavorOptions}
            toggleAction={this.toggleFlavor}
          />
        }
        <div className="shelfContainer">
          {donutData.boxes ? this.renderBoxes(donutData) : <div>NoDonuts </div>}
        </div>
      </>
    );
  }
}

export default DonutShelf;
