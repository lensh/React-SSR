//action type
const GET_LIST = 'INDEX/GET_LIST'

const defaultState = { list: [] }  // 默认的状态
export const indexReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                list: action.list
            }
        default:
            return state
    }
}
export const getIndexList = () => {
    return (dispatch, getState, $axios) => {
        return $axios.get('/api/course/list').then(res => {
            const { list } = res.data
            dispatch({ type: GET_LIST, list })
        }).catch(e => {
            // 在这里需要捕获错误，才不会出现所有页面都挂了的情况
            console.log(e)
        })
    }
}