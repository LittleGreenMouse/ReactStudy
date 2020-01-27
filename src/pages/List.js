import React from 'react';

class List extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            dataList: [1,2,3],
            maxNum: 3
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.dataList.map((value, index) => {
                            return <li key={index}>{value}</li>;
                        })
                    }
                </ul>
                <button onClick={() => {
                    let newMax = this.state.maxNum + 1;
                    let newArr = [...this.state.dataList, newMax];

                    this.setState({
                        dataList: newArr,
                        maxNum: newMax
                    })
                }}>Click me!</button>
            </div>
        )
    }

}

export default List;