import React from 'react';
import PropTypes from 'prop-types';
import actions from '~s/actions';
import { connect } from 'react-redux';


import { Button, Form, Modal } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';

class Order extends React.Component {
    /*static propTypes = {
        formData: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onSend: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired

    }
    */

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
        router.moveTo('result');
    }

    render() {
        let fromFields = [];
        let everyValid = true;


        for (let name in this.props.formData) {
            let field = this.props.formData[name];
            fromFields.push(<Form.Group key={name} controlId={"order-form-" + name}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type="text" value={field.value} onChange={(e) => this.props.onChangeRedux(name, e.target.value)}
                />
                {field.valid === null || field.valid ? "" :
                    <Form.Text className="text-muted">{field.errorText}</Form.Text>
                }
            </Form.Group>);
            if(!field.valid){
                everyValid = false;
            }
        }

        return (
            <div>
                <h2>Order</h2>
                <hr />

                <Form>
                    {fromFields}
                </Form>

                <Link className="btn btn-warning" to={routesMap.home}>Back to cart</Link>
                <Button variant="primary" onClick={this.show} disabled={!everyValid}>Apply order</Button>

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
                        <strong>Total:{0}</strong>
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

let mapStateToProps = (state) => {

    return {
        formData: state.order.formData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeRedux: (name, value) => dispatch(actions.order.change(name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);