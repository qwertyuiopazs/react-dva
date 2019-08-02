import request from './../utils/request'
let index = {
    namespace: 'home',
    state: {num: 0},
    effects: {
        *changeNum({payload},{select,put,call }) {
            let res = yield call(request('/teacher/search'))
            console.log(res)
            yield put({type: "addNum",payload})
        }
    },
    reducers: {
        addNum(state, {payload}) {
            return {
                num: state.num + payload.num
            }
        }
    }
}





export default index