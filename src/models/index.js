
let index = {
    namespace: 'home',
    state: {num: 0},
    effects: {
        *changNum(action, { put, call}) {
            yield put({
                type: "addNum",
                payload: action.payload
            })
        }
    },
    reducer: {
        addNum(state, {payload}) {

            return {
                num: state.num + payload.num
            }
        }
    }
}





export default index