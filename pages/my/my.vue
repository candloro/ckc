
<template>
  <view class="container">
    <!-- 顶部导航 -->
    <view class="nav">
      <view class="nav-content">
        <uni-icons @click="goBack" type="left" size="24" color="#ffffff"></uni-icons>
        <text class="nav-title">Claim</text>
        <view class="placeholder"></view>
      </view>
    </view>

    <!-- 主要内容区 -->
    <view class="main-content">
		<!--  -->
		<view class="wallet-info">
		  <view class="wallet-avatar-gap" v-if="!model.address"></view>
		  <view class="wallet-avatar" v-if="model.address">
			  <image src="/static/my/TP.png"  style="width: 100rpx;height: 100rpx;"></image>
		  </view>
		  <view class="wallet-text">
		    <text style="margin-right: 10rpx;">{{ model.address ? formatPublicKey(model.address) : "连接钱包" }}</text>
		    <uni-icons type="bottom" size="14" color="#ffffff"></uni-icons>
		  </view>
		</view>
		
      <!-- 卡片区域 -->
      <view class="card">
        <view class="total-profit">
          <view class="profit-item">
            <uni-icons type="wallet" size="20" color="#FFD700"></uni-icons>
            <text class="profit-label">总收益</text>
            <text style="margin-right: 10rpx;" class="profit-value">{{model.totalHolderReward ? Number(model.totalHolderReward).toFixed(2):'00:00' }}</text>
			<uni-icons type="eye" size="18" color="#ffffff"></uni-icons>
          </view>
        </view>

        <view class="status-grid">
          <view class="status-item">
			  <!-- perSecondReward-->
            <text class="status-value">{{model.perSecondReward}}</text>
            <text class="status-label">待解锁</text>
          </view>
          <view class="status-item">
            <text class="status-value">{{model.pendingRewards}}</text>
            <text class="status-label">待领取</text>
          </view>
          <view class="status-item">
            <text class="status-value">{{model.earnedRewards}}</text>
            <text class="status-label">已领取</text>
          </view>
        </view>

        <view class="progress-section">
          <view class="progress-bar">
            <view class="progress-inner"></view>
          </view>
          <view class="progress-value">
            <text class="value">00</text>
            <text class="unit">%</text>
          </view>
        </view>
      </view>

      <!-- 领取按钮 -->
      <button class="claim-button" hover-class="button-hover">领取</button>
    </view>
  </view>
</template>

<script >
	import {getUserInfo,getHoldersRewards} from '@/api/index.js'
	export default {
		data(){
			return{
				model:{
					address: "", // 钱包地址
					role: "" ,// role 是那个徽标需要使用的
					"totalHolderReward": "0", // 总持有者奖励：表示用户因持有资产而获得的总奖励数。通常是一个累积数值。
					"perSecondReward": "0", // 每秒奖励：表示用户每秒钟能获得的奖励数量。例如，如果奖励是按时间累计的，这个字段会显示每秒的奖励数。
					"earnedRewards": "0", // 已赚取奖励：表示用户已经获得的奖励总额，这些奖励通常可以被提取或使用。
					"pendingRewards": "0", // 待领取奖励：表示用户已累积但尚未领取的奖励。即奖励已生成，但用户还未提取。
					"rank": "0" // 排名：表示用户在某个系统中的排名，可能是基于持有的资产量、贡献或其他指标。
				}
			}
		},
		methods:{
			// 方法用于格式化 publicKey 的显示
			formatPublicKey(key) {
				if (!key) return "";
				const start = key.slice(0, 4);
				const end = key.slice(-4);
				return `${start}**${end}`;
			},
			// 用户信息
			async getUserInfoApi(){
				let address  = uni.getStorageSync('address')
				let res =  await getUserInfo(address)
				this.model = {...this.model,...res}
			},
			// 收益
			async getHoldersRewardsApi(){
				let address  = uni.getStorageSync('address')
				let res =  await getHoldersRewards(address)
				// this.model = {...this.model,...res}
			},
			goBack(){
				uni.navigateBack()
			}
		},
		onLoad() {
			
		},
		async onShow() {
			await this.getUserInfoApi()
			await this.getHoldersRewardsApi()
		}
		
	}
</script>

<style>
page {
  height: 100%;
  background-color: #1F2631;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav {
  /* background-color: #1a1a1a; */
  padding: 0 30rpx;
  height: 88rpx;
  /* box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1); */
}

.nav-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-title {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
}

.placeholder {
  width: 48rpx;
}

.main-content {
  flex: 1;
  padding: 30rpx;
  padding-top: 20rpx;
}

.card {
  /* background-color: #2a2a2a; */
  background-color: #29313C;
  border-radius: 22rpx;
  padding: 30rpx;
  /* margin-bottom: 30rpx; */
  margin-bottom: 61rpx;
}

.wallet-info {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
}

.wallet-avatar-gap {
  border-radius: 40rpx;
  background-color: #4a90e2;
  width: 80rpx;
  height: 80rpx;
	margin-right: 31rpx;
}

.wallet-avatar {
  width: 100rpx;
  height: 100rpx;
	margin-right: 31rpx;
  image{
	  width: 100%;
	  height: 100%;
  }
}

.wallet-text {
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
}

.total-profit {
  margin-bottom: 40rpx;
}

.profit-item {
  display: flex;
  align-items: center;
}

.profit-label {
  color: #999999;
  font-size: 14px;
  margin: 0 16rpx;
}

.profit-value {
  color: #ffffff;
  font-size: 18px;
  /* font-weight: 500; */
  font-weight: bold;
}

.status-grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40rpx;
}

.status-item {
  flex: 1;
  text-align: center;
}

.status-value {
  display: block;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8rpx;
}

.status-label {
  color: #999999;
  font-size: 12px;
}

.progress-section {
  text-align: center;
  padding: 60rpx 0;
}

.progress-bar {
  width: 100%;
  /* height: 4rpx; */
  height: 20rpx;
  border-radius: 10rpx;
  background-color: #1F2630;
  margin-bottom: 30rpx;
}

.progress-inner {
  width: 0;
  height: 100%;
  background-color: #FFD700;
  border-radius: 2rpx;
}

.progress-value {
  color: #FFD700;
}

.value {
  font-size: 36px;
  font-weight: bold;
}

.unit {
  font-size: 24px;
}

.claim-button {
  width: 100%;
  height: 96rpx;
  line-height: 96rpx;
  /* background-color: #2a2a2a; */
  background-color: #29313C;
  /* color: #ffffff; */
  color: #1F2630;
  font-weight: bold;
  font-size: 16px;
  border-radius: 48rpx;
  text-align: center;
}

.button-hover {
  opacity: 0.8;
}
</style>

