import React from 'react';
import Radium from 'radium';

const styles = {
  primary: {
    background: '#0074D9',
    fontSize: '16px'
  },
};

@Radium
class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={[styles.primary]}
      >
        {this.props.children}
      </button>
    )
  }
}


Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
