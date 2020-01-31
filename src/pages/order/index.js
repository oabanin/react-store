import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import cartModel from '~s/cart.js';
//import formDataModel from '~s/order.js';
import { Button, Form, Modal } from 'react-bootstrap';

import {Link} from 'react-router-dom';
import {routesMap} from '~/routes';

export default @inject('stores') @observer class extends React.Component {

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
        this.props.stores.order.send();
        this.hide();
        this.props.history.push(routesMap.result);

    }

    render() {
  
        // let productStore = this.props.stores.products;
        // let cart = this.props.stores.cart;
        let formDataModel = this.props.stores.order;

        let fromFields = [];

        for (let name in formDataModel.formData) {
            let field = formDataModel.formData[name];
            fromFields.push(<Form.Group key={name} controlId={"order-form-" + name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type="text" value={field.value} onChange={(e) => formDataModel.changeData(name, e.target.value)}
                />
                {field.valid === null || field.valid ? "" :
                    <Form.Text className="text-muted">{field.errorText}</Form.Text>
                }
            </Form.Group>)
        }

        return (
            <div>
                <h2>Order</h2>
                <hr />

                <Form>
                    {fromFields}
                </Form>

                <Link className="btn btn-warning" to={routesMap.home}>Back to cart</Link>
                <Button variant="primary" onClick={this.show} disabled={!formDataModel.formValid}>Apply order</Button>

                <Modal
                    show={this.state.showModal}
                    backdrop='static'
                    onHide={this.hide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Check Info
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>Total:{cartModel.total}</strong>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={this.hide} >Back to cart</Button>
                        <Button variant="primary" onClick={this.confirm}>Apply order</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}

