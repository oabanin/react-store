import React from 'react';

export default class extends React.Component {

    state = {
        cnt: this.props.min
    }

    increase = () => {
        this.setState({
            cnt: this.state.cnt + 1
        },()=>{
            this.setState({
                cnt: this.state.cnt + 1
            })
        })

    }

    decrease = () => {
        console.log(1);
        this.setState({
            cnt: this.state.cnt - 1
        })
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