import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Header extends Component {
    static propTypes = {
        page: PropTypes.string,
        cart: PropTypes.number,
    }

    _renderShoppingBag = () => {
        console.log(this.props.cart);
        if (this.props.cart !== 0) {
            return (
                <li>
                    <div id="notification">{ this.props.cart }</div>
                    <i className="fa fa-shopping-bag" />
                </li>
            );
        }

        return (
            <li>
                <i className="fa fa-shopping-bag" />
            </li>
        );
    }

    _renderHeader = () => {
        const page = this.props.page;

        return (
            <Row>
                <Col
                    md={ 6 }
                    mdOffset={ 3 }
                    xs={ 12 }
                    className="top-links">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className={ page === '/' ? 'active' : null }>
                                    Store
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Col>

                <Col
                    md={ 2 }
                    mdOffset={ 10 }
                    xs={ 1 }
                    xsOffset={ 9 }
                    className="top-icon">
                    <nav>
                        <ul>
                            { this._renderShoppingBag() }
                        </ul>
                    </nav>
                </Col>
            </Row>
        );
    }

    render() {
        return this._renderHeader();
    }
}

function mapStateToProps(state) {
    return {
        cart: state.products.cart,
        page: state.routing.locationBeforeTransitions.pathname,
    };
}

export default connect(mapStateToProps)(Header);
