/*
 * @Author: Willynn 
 * @Date: 2018-12-15 15:06:03 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-22 20:51:04
 */
import axios from 'axios'
import store from '@/store/store'

debugger
// console.log(process.env.API_HOST)
// create an axios instance
const service = axios.create({
	// baseURL: process.env.API_HOST, // api的base_url
	baseURL: "http://192.168.0.103:2892/", // api的base_url
	// timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
	// Do something before request is sent
	// config.headers['key'] = process.env.key;// key 用于安全性验证
	// config.headers['value'] = process.env.value;// value 用于安全性验证
	if(config.method === 'post') {
    config.data = JSON.stringify(config.data);
    // config.data = config.data;
  }
  return config;  //添加这一行
}, error => {
	// Do something with request error
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
	response => {
		/**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
		let res;
		res = response.data;
		return response.data;
	}, error => {
		return Promise.reject(error)
	}
)

export default service
  