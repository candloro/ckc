/*  */
import axios from "axios";
import {
	UniAdapter
} from "uniapp-axios-adapter";

import {
	getToken,
	removeToken
} from "@/utils/auth";




import env from '@/utils/env.js'


const service = axios.create({
	baseURL: env.baseURL,
	// baseURL:'http://47.84.41.231:3000/api',
	timeout: 5000,
	adapter: UniAdapter, // 指定适配器
})
/*  */
service.interceptors.request.use(
	config => {
		// 拦截请求
		const token = getToken()
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		} else {
			console.error('Token is missing or invalid');
		}
		/*  */
		config.headers['Content-Type'] = "application/json"
		uni.hideLoading()
		return config
	},
	err => {
		uni.hideLoading()
		uni.showToast({
			title: '请先登录',
			icon: "none"
		})
		return Promise.reject(err)
	}
)
/*  */
service.interceptors.response.use(
	response => {
		// console.log('原始响应', response);
		const data = response.data
		uni.hideLoading()
		if (data.code != 200) {
			uni.showToast({
				title: data.message,
				icon: "error"
			})
			/*  */
			if (data.code == 502) {}
			if (data.code == 403) {}
			if (data.code == 401) {
				console.log('401');
			}

		}
		/* 成功响应 */
		if (data.code == 200) {
			console.log(data.data, "success 200");
			return data.data
		}
	},
	err => {
		uni.hideLoading()
		uni.showToast({
			title: '网络异常',
			icon: "none"
		})
		return Promise.reject(err)
	}
)





export default service