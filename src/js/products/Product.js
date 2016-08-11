import React, { Component, PropTypes } from 'react';
import { Row, Col, Grid, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductAction from '../../redux/Product/actions';
import ProductsAction from '../../redux/Products/actions';
import photos from '../../../photos.json';

export default class Product extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        products: PropTypes.array,
        product: PropTypes.object,
        params: PropTypes.object,
        editName: PropTypes.bool,
        editDes: PropTypes.bool,
        cart: PropTypes.number,
    }

    componentWillMount() {
        const id = this.props.products[this.props.params.id].id;
        this.props.dispatch(ProductAction.fetchProduct(id));
    }

    style = {
        input: {
            borderRadius: 0,
            marginTop: 20,
        },
    }

    _isEditable = (param) => {
        if (param === 'name') {
            this.props.dispatch(ProductAction.editName(!this.props.editName));

            if (this.props.editName) {
                this.props.dispatch(ProductAction.saveProduct(this.props.product));
            }
        } else {
            this.props.dispatch(ProductAction.editDes(!this.props.editDes));

            if (this.props.editDes) {
                this.props.dispatch(ProductAction.saveProduct(this.props.product));
            }
        }
    }

    _handleNameChange = (e) => {
        this.props.dispatch(ProductAction.updateName(e.target.value));
    }

    _handleDesChange = (e) => {
        this.props.dispatch(ProductAction.updateDes(e.target.value));
    }

    _handleClick = () => {
        let cart = this.props.cart;
        cart = cart + 1;
        this.props.dispatch(ProductsAction.updateCart(cart));
    }

    _nameOrInput = () => {
        const name = this.props.product.name;
        const style = this.style;

        if (this.props.editName) {
            return (
                <div>
                    <Col md={ 6 }>
                        <form>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    ref="name"
                                    value={ name }
                                    placeholder="Enter text"
                                    style={ style.input }
                                    onChange={ this._handleNameChange } />
                            </FormGroup>
                        </form>
                    </Col>

                    <Col md={ 1 }>
                        <i
                            id="save"
                            className="fa fa-check"
                            onClick={ this._isEditable.bind(this, 'name') } />
                    </Col>
                </div>
            );
        }

        return (
            <Col md={ 12 }>
                <h3 id="name">
                    { name }
                    <i
                        className="fa fa-pencil"
                        onClick={ this._isEditable.bind(this, 'name') } />
                </h3>
            </Col>
        );
    }

    _desOrInput = () => {
        const details = this.props.product.description;
        const style = this.style;

        if (this.props.editDes) {
            return (
                <div>
                    <Col md={ 6 }>
                        <form>
                            <FormGroup>
                                <FormControl
                                    componentClass="textarea"
                                    ref="des"
                                    value={ details }
                                    placeholder="Enter text"
                                    style={ style.input }
                                    onChange={ this._handleDesChange } />
                            </FormGroup>
                        </form>
                    </Col>

                    <Col md={ 1 }>
                        <i
                            id="save"
                            className="fa fa-check"
                            onClick={ this._isEditable.bind(this, 'des') } />
                    </Col>
                </div>
            );
        }

        return (
            <Col md={ 12 }>
                <h5 id="description">
                    { details }
                    <i
                        className="fa fa-pencil"
                        onClick={ this._isEditable.bind(this, 'des') } />
                </h5>
            </Col>
        );
    }

    _renderProduct = () => {
        const index = this.props.params.id;
        const name = this.props.products[index].name;
        const price = this.props.products[index].amount;

        return (
            <Grid className="page-container">
                <Row className>
                    <Col md={ 6 } className="img-half">
                        <Row>
                            <Col md={ 12 } id="img-contain">
                                <img src={ photos.data[index].url } alt={ name } />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={ 6 } className="text-half">
                        <Row>
                            { this._nameOrInput() }
                        </Row>

                        <Row>
                            <Col md={ 12 }>
                                <h3 id="price">{ price } USD</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Button id="btn" onClick={ this._handleClick }>
                                Add to Bag
                            </Button>
                        </Row>

                        <Row>
                            { this._desOrInput() }
                        </Row>

                        <Row>
                            <Col md={ 12 } id="social">
                                <ul>
                                    <li>tweet</li>

                                    <li>like</li>

                                    <li>pin</li>

                                    <li>share</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }

    render() {
        if (this.props.product) {
            return this._renderProduct();
        }

        return (
            <div />
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data.data,
        product: state.product.data,
        editName: state.product.editName,
        editDes: state.product.editDes,
        cart: state.products.cart,
    };
}

export default connect(mapStateToProps)(Product);
