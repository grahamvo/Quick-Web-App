import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './header/Header';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.object,
        location: PropTypes.object,
    }

    componentDidMount() {
        document.body.className = '';
    }

    render() {
        return (
            <div>
                <Header />

                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="page-animate"
                    transitionEnterTimeout={ 500 }
                    transitionLeaveTimeout={ 500 }>
                    { React.cloneElement(this.props.children, {
                        key: this.props.location.pathname,
                    }) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
