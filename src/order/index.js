import React from 'react';

export default class extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired
        
    }


    render() {
        let fromFields[];

        for (let name in this.props.formData) {

        }
        return (
            <div>
                <h2>Order</h2>
                </hr>
            </div>
        );
    }
}
