/*
 * @Author: Willynn 
 * @Date: 2018-12-15 15:58:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-16 20:47:35
 */
import request from '@/utils/request'

/**
 * 查询用户列表接口
 */
export function queryUsersList(query) {
  debugger;
  return request({
    url: 'HanBin/SystemService/Login',
    method: 'post',
    data: query
  })
}

/**
 * 添加用户接口
 * 
 */
export function addUserList(data) {
  return request({
    url: 'HanBin/SystemService/AddUser',
    method: 'post',
    data: data
  })
}