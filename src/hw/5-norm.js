import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

    static defaultProps = {
        onChange: function(cnt){
        }
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    state = {
        inputValue : this.props.cnt
    }

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt) {
        let cnt = Math.max(this.props.min, Math.min(newCnt, this.props.max));
        this.setState({ inputValue: cnt });
        this.props.onChange(cnt);
    }

    setValue(newStr){
        this.setState({ inputValue : newStr })

    }


    appyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.state.min : cnt);
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13){
            this.appyValue();
        }
    }

    render() {
        return (
            <div>
                {this.props.min} - props.min <br/>
            {this.state.cnt} - state.cnt <br/>
            {this.state.inputValue} - state.inputValue<br/>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                       onChange={(e) => this.setValue(e.target.value)}
                       onBlur={this.appyValue}
                       onKeyUp={this.checkEnterKey} />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}
/*
Some.defaultProps = {
    min: 1,
    max: 5
}
*/
