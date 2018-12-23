/*
 * @Author: Willynn 
 * @Date: 2018-12-15 15:58:28 
 * @Last Modified by: Willynn
 * @Last Modified time: 2018-12-15 15:58:50
 */
import request from '@/utils/request'

export function loginFun(query) {
  debugger;
  return request({
    url: 'HanBin/SystemService/Login',
    method: 'post',
    data: query
  })
}
