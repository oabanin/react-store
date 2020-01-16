import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '../lazy';
import styles from './minmax.module.css';

import {observer} from 'mobx-react';

export default @observer class extends React.PureComponent {

    

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

    lazyInput = React.createRef();

    increase = () => {
        this.set(this.props.cnt + 1);
        this.lazyInput.current.setValue(this.set(isNaN(this.props.cnt + 1) ? this.props.min : this.props.cnt + 1));
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
        this.lazyInput.current.setValue(this.set(isNaN(this.props.cnt - 1) ? this.props.min : this.props.cnt - 1));
    }

    set(newCnt) {
        let cnt = Math.max(this.props.min, Math.min(newCnt, this.props.max));
        this.props.onChange(cnt);
        return cnt;
        
    }


    onChange = (e) => {
        let cnt = parseInt(e.target.value);
        let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);
        if(realCnt.toString() !== e.target.value){
            console.log('HARD SET VALUE');
            this.lazyInput.current.setValue(realCnt);
        }
        this.forceUpdate();
    }


    render() {
        console.log("minmax render");
        return (
            
            <div style={{color: 'red'}}>
             
                <button onClick={this.decrease}>-</button>
                <AppLazyInput
                    value={this.props.cnt}
                    onChange={this.onChange}
                    nativeProps={{ className: styles.input  }}
                    ref={this.lazyInput} />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}
