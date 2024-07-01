
import request from '@/utils/request.js'

export const login = (data) => {
    new request({
        method: 'POST', 
        url: '/v1_0/authorizations', 
        data
    })
}