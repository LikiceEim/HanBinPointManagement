/*
 * @Author: Willynn 
 * @Date: 2018-12-15 15:58:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-22 20:38:14
 */
import request from '@/utils/request'

/**
 * 新增单位
 */
export function addUnit(data){
  return request({
    url: 'HanBin/SystemService/AddOrganizationRecord',
    method: 'post',
    data:data
  })
}