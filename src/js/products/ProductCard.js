import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import CardContents from './CardContents';

export default class ProductCard extends Component {
    static propTypes = {
        url: PropTypes.string,
        index: PropTypes.number,
        product: PropTypes.object,
    }

    _renderCard = () => {
        return (
            <Col
                key={ this.props.index }
                lg={ 3 }
                md={ 4 }
                sm={ 6 }
                smOffset={ 0 }
                style={ { padding: 20 } }
                xs={ 10 }
                xsOffset={ 1 }>
                <CardContents { ...this.props } />
            </Col>
        );
    }

    render() {
        return this._renderCard();
    }
}
