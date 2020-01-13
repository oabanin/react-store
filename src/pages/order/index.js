import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';

export default class extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired

    }

    state = {
        showModal: false
    }

    show = () => {
        this.setState({ showModal: true });
    }

    hide = () => {
        this.setState({ showModal: false });
    }

    confirm = () => {
        this.hide();
        this.props.onSend();
    }

    render() {
        let fromFields = [];

        for (let name in this.props.formData) {
            let field = this.props.formData[name];
            fromFields.push(<Form.Group key={name} controlId={"order-form-" + name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type="text" value={field.value} onChange={(e) => this.props.onChange(name, e.target.value)} />
            </Form.Group>)
        }

        console.log(fromFields);
        return (
            <div>
                <h2>Order</h2>
                <hr />

                <Form>
                    {fromFields}
                </Form>

                <Button variant="warning" onClick={this.props.onBack}>Back to cart</Button>
                <Button variant="primary" onClick={this.show}>Apply order</Button>

                <Modal
                    show={this.state.showModal}
                    backdrop='static'
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Check Info
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Content
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={this.hide}>Back to cart</Button>
                        <Button variant="primary" onClick={this.confirm}>Apply order</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}
