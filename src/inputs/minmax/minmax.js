import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from './../lazy/lazy';

export default class extends React.Component {


    static defaultProps = {
        onChange: function (cnt) {
        }
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

   

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt) {
        let cnt = Math.max(this.props.min, Math.min(newCnt, this.props.max));
        this.props.onChange(cnt);
    }


    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.state.min : cnt);
    }


    render() {

        return (
            <div>
                
                <button onClick={this.decrease}>-</button>
                <AppLazyInput value={this.props.cnt} onChange={this.onChange} nativeProps={{className:"classname"}} />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}
