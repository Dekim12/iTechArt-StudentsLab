import React from 'react';
import { defineClassName } from '../../appLogic';
import { TO_UP_VISIBLE } from '../../constants';
import './toUpButton.scss';

class ToUpButton extends React.Component {
  state = {
    btnIsVisible: false,
  };

  windowScrollHandler = () => {
    const windowSize = window.innerHeight;
    const pageY = window.pageYOffset + windowSize / 2;

    if (pageY > windowSize) {
      this.setState({ btnIsVisible: true });
    } else if (pageY < windowSize) {
      this.setState({ btnIsVisible: false });
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.windowScrollHandler);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.windowScrollHandler);
  };

  scrollToUp = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <button
        className={`to-up-btn ${defineClassName(
          this.state.btnIsVisible,
          TO_UP_VISIBLE
        )}`}
        onClick={this.scrollToUp}
        type='button'
      >
        <i className='fa fa-chevron-up fa-2x' aria-hidden='true' />
      </button>
    );
  }
}

export default ToUpButton;
