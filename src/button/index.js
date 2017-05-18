import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  primary: {
    background: '#0074D9',
    fontSize: '16px',
  },
};


class Button extends React.Component {
  render() {
    const {classes, children} = this.props;
    return (
      <button
        onClick={this.props.onClick}
        className={classes.primary}
      >
        {children}
      </button>
    );
  }
}


Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default injectSheet(styles)(Button);
