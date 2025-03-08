<template>
  <view class="content">
    <view class="boxOne">
      <img
        src="/static/home/right.png"
        alt=""
        class="leftOne"
        @click="goBack"
      />
      <view class="rightOne">奖励纪录</view>
    </view>
    <view class="bpxTwoMath">
      <view class="boxTwo" v-for="(item, index) in 7">
        <view class="rankOne">
          <view class="Rank">排名</view>
          <img src="/static/home/four.png" alt="" class="number" />
        </view>
        <view class="rankTwo">
          <view class="Rank1">数量</view>
          <view class="math">1680cxc</view>
        </view>
        <view class="rankThree">
          <view class="Rank2">状态</view>
          <view class="math1">已获得</view>
        </view>
        <view class="rankFour">
          <view class="Rank3">时间</view>
          <view class="math2">2025 03-03 10:20</view>
        </view>
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
		type:1
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
    goBack() {
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
.boxOne {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  padding-top: 30rpx;
  background-color: #1f2630;
  .leftOne {
    width: 22rpx;
    height: 38rpx;
    margin-left: 28rpx;
  }
  .rightOne {
    font-weight: 500;
    font-size: 36rpx;
    color: #ffffff;
    margin-left: 253rpx;
  }
}
.bpxTwoMath {
  width: 100%;
  height: calc(100vh - 100rpx);
  background: #29313c;
}
.boxTwo {
  display: flex;
  padding-top: 31rpx;
  .rankOne {
    .Rank {
      font-weight: 300;
      font-size: 24rpx;
      color: #999999;
      margin-left: 35rpx;
    }
    .number {
      width: 68rpx;
      height: 43rpx;
      margin-left: 24rpx;
      margin-top: 15rpx;
    }
  }
  .rankTwo {
    .Rank1 {
      font-weight: 300;
      font-size: 24rpx;
      color: #999999;
      margin-left: 101rpx;
    }
    .math {
      font-size: 30rpx;
      color: #ffffff;
      margin-left: 65rpx;
      margin-top: 15rpx;
    }
  }
  .rankThree {
    .Rank2 {
      font-weight: 300;
      font-size: 24rpx;
      color: #999999;
      margin-left: 101rpx;
    }
    .math1 {
      font-size: 30rpx;
      color: #fcd434;
      margin-left: 82rpx;
      margin-top: 15rpx;
    }
  }
  .rankFour {
    .Rank3 {
      font-weight: 300;
      font-size: 24rpx;
      color: #999999;
      margin-left: 160rpx;
    }
    .math2 {
      font-size: 30rpx;
      color: #ffffff;
      margin-left: 57rpx;
      margin-top: 15rpx;
    }
  }
}
</style>
