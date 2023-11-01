import { Component } from 'react';
import propTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    message: propTypes.string.isRequired
  };

  render() {
    const { message } = this.props;
    return (
        <p>{message}</p>
    );
  }
}

export default Notification;
