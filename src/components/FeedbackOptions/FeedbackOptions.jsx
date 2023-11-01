import { Component } from 'react';
import propTypes from 'prop-types';

class FeedbackOptions extends Component {
    static propTypes = {
        option: propTypes.oneOf(['Good', 'Bad', 'Neutral']).isRequired,
        onLeaveFeedback: propTypes.func.isRequired
    };

    render() {
        const {option, onLeaveFeedback} = this.props;
        return (
          <button type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        );
    }
}

export default FeedbackOptions;