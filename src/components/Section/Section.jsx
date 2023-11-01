import { Component } from 'react';
import propTypes from 'prop-types';

class Section extends Component {
    static propTypes = {
        title: propTypes.string.isRequired,
        children: propTypes.node
    };

    render() {
        const { title, children } = this.props;
        return (
            <section>
                <h1>{title}</h1>
                {children}
            </section>
        );
    }
}

export default Section;