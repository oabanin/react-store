import React from 'react';
import PropTypes from 'prop-types';
//import './lazy.css';

export default class extends React.Component {


    state = {
        inputValue: this.props.value
    }

    onChange = (newValue) => {
        this.setState({inputValue:newValue});
    }

    static defaultProps = {
        onChange: function (cnt) { },
        nativeProps: {}
    }

    static propTypes = {
        onChange: PropTypes.func,
        nativeProps: PropTypes.object,
        value: PropTypes.any.isRequired,
    }

    nativeInput = React.createRef();

    setValue(value) {
        this.nativeInput.current.value = value;
    }


    checkChange = (e) => {
        if (e.target.value.toString() !== this.props.value) {
            this.props.onChange(e);
        }
    }


    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.checkChange(e);
        }
    }

    render() {
        return (

            <input  {...this.props.nativeProps}
                defaultValue={this.props.value}
                onBlur={this.checkChange}
                onKeyUp={this.checkEnterKey}
                ref={this.nativeInput} />
        );
    }
}
