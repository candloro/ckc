<template>
  <view class="content">
    <view class="recordBox">
      <img src="/static/home/right.png" alt="" class="left" @click="goBackTwo"/>
      <view class="record">释放纪录</view>
    </view>
    <view class="recordOne">
      <view class="numberOne">
        <view class="number1"> 数量 </view>
        <view class="address1"> 地址 </view>
        <view class="time1"> 时间 </view>
      </view>
      <view class="addressOne" v-for="(item, index) in 7">
        <view class="number2"> 1000CXC </view>
        <view class="address2"> Oxc7f***fD2l </view>
        <view class="time2"> 2025 03-03 10:20 </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getTransactionsList } from '@/api/index.js'
export default {
  data() {
    return {
		list:[],
		type:0
	};
  },
  methods: {
	  async getTransactionsListApi(){
	  	let address  = uni.getStorageSync('address')
		let type = this.type
		console.log(type,"type");
		let data = {
			address,
			type
		}
	  	let res =  await getTransactionsList(data)
		console.log(res,'getTransactionsList');
		this.list = res.transactions
	  },
    goBackTwo() {
      uni.navigateTo({ url: "/pages/index/index" });
    },
  },
  onLoad(options) {
	  if(options.type){
		this.type = options.type
	  }

  },
  onShow() {
  	this.getTransactionsListApi()
  }
};
</script>

<style scoped lang="scss">
.recordBox {
  width: 100%;
  height: 130rpx;
  background: #1f2630;
  display: flex;
  align-items: center;
  .left {
    width: 22rpx;
    height: 38rpx;
    margin-left: 28rpx;
  }
  .record {
    font-weight: 500;
    font-size: 36rpx;
    color: #ffffff;
    margin-left: 250rpx;
  }
}
.recordOne {
  width: 100%;
  height: calc(100vh - 100rpx);
  background: #29313c;
  padding-top: 31rpx;
  .numberOne {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 24rpx;
    color: #999999;
    .number1 {
      margin-left: 48rpx;
    }
    .address1 {
      margin-left: 229rpx;
    }
    .time1 {
      margin-left: 229rpx;
    }
  }
  .addressOne {
    display: flex;
    align-items: center;
    margin-top: 38rpx;
    .number2 {
      font-weight: 300;
      font-size: 36rpx;
      color: #ffffff;
      margin-left: 48rpx;
    }
    .address2 {
      font-weight: 300;
      font-size: 36rpx;
      color: #ffffff;
      margin-left: 65rpx;
    }
    .time2 {
      font-weight: 300;
      font-size: 24rpx;
      color: #ffffff;
      margin-left: 85rpx;
    }
  }
}
</style>
