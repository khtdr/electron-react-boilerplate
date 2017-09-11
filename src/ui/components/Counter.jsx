"use strict";

const React = require('react');

module.exports = class Counter extends React.Component {
    render() {

        return <div>
          {process.env.NODE_ENV}
            <h1>Counter value: {this.props.counter}</h1>

            <button onClick={this.props.increment}>Increment</button>
        </div>
    }
};
