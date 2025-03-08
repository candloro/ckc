
"use strict";
// 变量可自行添加修改
let token = uni.getStorageSync('token');

export default { //存放变量的容器
	//线上
	baseURL: 'http://47.84.41.231:3000',
	//本地	
	// baseURL: 'http://192.168.3.90:8099',
}
