import React from 'react';


class CounterClass extends React.Component {

    state = {
        current: this.props.min
    }

    increase = () => {
        if (this.state.current < this.props.max) this.setState({ current: this.state.current + 1 });
    }

    decrease = () => {
        if (this.state.current > this.props.min) this.setState({ current: this.state.current - 1 });

    }

    handleChange = (event) => {
        let value = +event.target.value;
        if (value > 0 && value < 11) {
            this.setState({current: value});
        }


    }

    render() {
        return (
            <div>
                <p>Works from {this.props.min} to {this.props.max}</p>
                <button onClick={this.decrease}>Remove One</button>
                <input type="text" value={this.state.current} onChange={this.handleChange} />
                <button onClick={this.increase}>Add One</button>
            </div>
        );
    }
}

export default CounterClass;