import request from "../util/request";

export default {
    namespace: 'list',
    state: {
        data: [1,2,3],
        maxNum: 3
    },
    reducers: {
        addNewData: function (state, result) {
            if(result.data) {
                console.log(result);
                return result.data;
            }

            let newMax = state.maxNum + 1;
            let newArr = [...state.data, newMax];

            return {
                data: newArr,
                maxNum: newMax
            };
        }
    },
    effects: {
        *initData(params, sagaEffects) {
            const {call, put} = sagaEffects;
            const url = '/ds/list';
            let data = yield call(request, url);
            yield put({
                type: 'addNewData',
                data: data
            });
        }
    }
}