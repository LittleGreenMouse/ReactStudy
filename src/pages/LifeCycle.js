import React from 'react';

class LifeCycle extends React.Component{

    constructor(props) {
        super(props);
        console.log("构造方法constructor()");
    }

    componentDidMount() {
        console.log("组件挂载后调用componentDidMount()");
    }

    componentWillUnmount() {
        console.log("组件从DOM中移除之前调用componentWillUnmount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("组件完成更新后调用componentDidUpdate()，初始化时不会调用");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("this.props或this.state变化后render()执行前调用shouldComponentUpdate()，返回true继续调用，返回false终止调用");
        return true;
    }

    render() {
        return (
            <div>
                {console.log("render()")}
                <h1>React life cycle!</h1>
            </div>
        )
    }

}

export default LifeCycle;