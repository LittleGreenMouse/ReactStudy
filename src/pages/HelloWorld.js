import React from 'react';

class HelloWorld extends React.Component{

    render() {
        return (
            <div>Hello world, name = {this.props.name}, content = {this.props.children}!</div>
        );
    }

}

export default HelloWorld;