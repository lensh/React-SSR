//action type
const USER_INFO = 'USER/USER_INFO'

const defaultState = { userinfo: {} }  // 默认的状态
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_INFO:
            return {
                userinfo: action.userinfo
            }
        default:
            return state
    }
}
export const getUserInfo = () => {
    return (dispatch, getState, $axios) => {
        return $axios.get('/api/user/info').then(res => {
            const { data } = res.data
            dispatch({ type: USER_INFO, userinfo: data })
        }).catch(e => {
            // 在这里需要捕获错误，才不会出现所有页面都挂了的情况
            console.log(e)
        })
    }
}