import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductsActions from '../../redux/Products/actions';
import ProductCard from './ProductCard';
import photos from '../../../photos.json';

export default class Products extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        products: PropTypes.array,
    }

    componentWillMount() {
        this.props.dispatch(ProductsActions.fetchProducts());
    }

    _renderProducts = () => {
        if (this.props.products) {
            const products = this.props.products.map((product, index) => {
                return (
                    <ProductCard
                        product={ product }
                        url={ photos.data[index].url }
                        index={ index } />
                );
            });

            return (
                <Row>
                    { products }
                </Row>
            );
        }

        return (
            <div />
        );
    }

    render() {
        return (
            <Grid className="page-container">
                <Row>
                    <Col md={ 12 }>
                        { this._renderProducts() }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data.data,
    };
}

export default connect(mapStateToProps)(Products);
