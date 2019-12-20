import React from 'react';

export default class extends React.Component {

    state = {
        cnt: this.props.min
    }

    increase = () => {
        this.set(this.state.cnt + 1);
    }

    decrease = () => {
        this.set(this.state.cnt - 1);
    }

    set(newCnt){
       let cnt = Math.max(this.props.min, Math.min(newCnt, this.props.max));
       this.setState({cnt});
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <strong>{this.state.cnt}</strong>
                <button onClick={this.increase}>+</button>

            </div>
        );
    }
}