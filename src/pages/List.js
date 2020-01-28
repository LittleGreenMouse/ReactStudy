import React from 'react';
import {connect} from 'dva';

const NAMESPACE = 'list';

const mapStateToProps = (state) => {
    return {
        dataList: state[NAMESPACE].data,
        maxNum: state[NAMESPACE].maxNum
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch({
                type: NAMESPACE + '/initData'
            });
        },
        add: () => {
            dispatch({
                type: NAMESPACE + "/addNewData"
            });
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends React.Component{

    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.dataList.map((value, index) => {
                            return <li key={index}>{value}</li>;
                        })
                    }
                </ul>
                <button onClick={() => {
                    this.props.add();
                }}>Click me!</button>
            </div>
        )
    }

}

export default List;