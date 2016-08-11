import React, { PropTypes, Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default class CardContents extends Component {
    static propTypes = {
        url: PropTypes.string,
        index: PropTypes.number,
        product: PropTypes.object,
    }

    style = {
        card: {
            animationDelay: `${this.props.index * 0.05}s`,
        },
    }

    _renderContents = () => {
        const product = this.props.product;

        return (
            <Link to={ `products/${this.props.index}` } className="img-card">
                <div className="shadow" style={ this.style.card }>
                    <Row>
                        <Col xs={ 12 }>
                            <div className="img-holder">
                                <img src={ this.props.url } alt={ product.name } />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <h5>{ product.name }</h5>
                    </Row>

                    <Row>
                        <div id="divider" />
                    </Row>

                    <Row>
                        <h5 className="price">{ product.amount } USD</h5>
                    </Row>
                </div>
            </Link>
        );
    }

    render() {
        return this._renderContents();
    }
}
