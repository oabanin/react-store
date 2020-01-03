import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {



    static defaultProps = {
        onChange: function (cnt) {},
        nativeProps: []
    }

    static propTypes = {
        min: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    componentDidUpdate(prevProps, prevState) {

    }

    checkChange = (e) =>{
        if(e.target.value !== this.props.value){
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
                    onKeyUp={this.checkEnterKey}/>
        );
    }
}
