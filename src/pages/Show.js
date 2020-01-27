import React from 'react';
import HelloWorld from "./HelloWorld";

class Show extends React.Component{

    render() {
        return (
            <HelloWorld name='Little Mouse'>test text</HelloWorld>
        );
    }

}

export default Show;