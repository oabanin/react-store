import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

export default class extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired

    }


    render() {
        let fromFields = [];

        for (let name in this.props.formData) {
            let field = this.props.formData[name];
            fromFields.push(<Form.Group key={name} controlId={"order-form-" + name}>
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control type="text" value={field.value} onChange={(e) => this.props.onChange(name, e.target.value)}/>
                            </Form.Group>)
        }
        return (
            <div>
                <h2>Order</h2>
                <hr/>

            <Form>
                {fromFields}
            </Form>
            <Button variant="warning" onClick={this.props.onBack}>Back to cart</Button>&nbsb;
            <Button variant="primary" onClick={this.props.onSend}>Apply order 
            </Button>&nbsb;
            </div >
        );
    }
}
