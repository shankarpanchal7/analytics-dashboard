import api from './axios'

export async function loginApi({email, password}) {
    let response = await api.post('/user/login', {
        username: email, password
    })
    console.log("api loginApi ", response);
    if(response.token) {
        localStorage.setItem('token', response.token)
        return true
    }
    return false
    
}
export async function getChartData() {
    let response = await api.get('/data')
    return response
}