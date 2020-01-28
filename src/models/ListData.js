export default {
    namespace: 'list',
    state: {
        data: [1,2,3],
        maxNum: 3
    },
    reducers: {
        addNewData: function (state) {
            let newMax = state.maxNum + 1;
            let newArr = [...state.data, newMax];

            return {
                data: newArr,
                maxNum: newMax
            };
        }
    }
}