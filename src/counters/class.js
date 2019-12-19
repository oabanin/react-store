import React from 'react';

export default class extends React.Component {

    state = {
        current: this.props.min
    }

    increase = () => {
        if (this.state.current < this.props.max) this.setState({ current: this.state.current + 1 });
    }

    decrease = () => {
        if (this.state.current > this.props.min) this.setState({ current: this.state.current - 1 });

    }

    handleChange(event) {
        let value = +event.target.value;
        console.dir(value);
        if ( value> 0 && value < 11) {
            console.log(this.state); //this.state do not work
        }


    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>Remove One</button>
                <input type="text" value={this.state.current} onChange={this.handleChange} />
                <button onClick={this.increase}>Add One</button>
            </div>
        );
    }
}