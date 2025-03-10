<template>
	<view class="content">
		<view class="claimBox">
			<img src="/static/home/right.png" alt="" class="claim1" @click="goBack" />
			<view class="claim2">Claim</view>
		</view>
		<view class="addressOne">
			<img src="/static/home/TP.png" alt="" class="tp"   v-if="model.address" />
			<view class="wallet-avatar-gap" v-if="!model.address"></view>
			<view class="address">{{ model.address ? formatPublicKey(model.address) : "连接钱包" }}</view>
			<img src="/static/home/seven.png" alt="" class="down" />
			<view class="" style="margin-left: 60rpx;color: white;font-size: 15px;">
				<!--  是默认 1 是合约人 2 创世节点 -->
				<!--  0 是默认 1 是合约人 2 创世节点 -->
				{{model.role}}
<!-- 				<text v-if="model.role == 0">默认</text>
				<text v-if="model.role == 1">合约人 </text>
				<text v-if="model.role == 2">创世节点</text> -->
			</view>
		</view>
		<view class="picBox">
			<view class="picOne">
				<img src="/static/home/eight.png" alt="" class="pic1" />
				<view class="num1">总收益</view>
				<view class="num2">{{model.totalHolderReward ? Number(model.totalHolderReward).toFixed(2):'00:00' }}</view>
				<img src="/static/home/eye1.png" alt="" class="pic2" />
			</view>
			<view class="drawDownBox">
				<view class="drawOne">
					<view class="one">{{model.perSecondReward}}</view>
					<view class="one1"> 待解锁 </view>
				</view>
				<view class="drawTwo">
					<view class="two">{{model.pendingRewards}}</view>
					<view class="two2"> 待领取 </view>
				</view>
				<view class="drawThree">
					<view class="three">{{model.earnedRewards}}</view>
					<view class="three3"> 已领取 </view>
				</view>
			</view>
			<!--  -->
			<view class="" style="height: 60rpx;">
				
			</view>
			<view class="progress-container">
				<view class="progress-bar" :style="{ width: progress + '%' }"></view>
				<text class="percentage">{{ progress }}%</text>
			</view>
		</view>
		<!-- 合约 -->
		<view class="submitBox" @click="getBtn">
			<view class="submit">领取</view>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		getHoldersRewards
	} from '@/api/index.js'
	export default {
		data() {
			return {
				progress: 10, // 初始进度值
				model: {
					address: "", // 钱包地址
					role: "", // role 是那个徽标需要使用的
					"totalHolderReward": "0", // 总持有者奖励：表示用户因持有资产而获得的总奖励数。通常是一个累积数值。
					"perSecondReward": "0", // 每秒奖励：表示用户每秒钟能获得的奖励数量。例如，如果奖励是按时间累计的，这个字段会显示每秒的奖励数。
					"earnedRewards": "0", // 已赚取奖励：表示用户已经获得的奖励总额，这些奖励通常可以被提取或使用。
					"pendingRewards": "0", // 待领取奖励：表示用户已累积但尚未领取的奖励。即奖励已生成，但用户还未提取。
					"rank": "0" // 排名：表示用户在某个系统中的排名，可能是基于持有的资产量、贡献或其他指标。
				}
			};
		},
		methods: {
			// 方法用于格式化 publicKey 的显示
			formatPublicKey(key) {
				if (!key) return "";
				const start = key.slice(0, 4);
				const end = key.slice(-4);
				return `${start}**${end}`;
			},
			// 用户信息
			async getUserInfoApi() {
				let address = uni.getStorageSync('address')
				let res = await getUserInfo(address)
				console.log(res,"getUserInfoApi");
				this.model = {
					...this.model,
					...res.data
				}
			},
			// 收益
			async getHoldersRewardsApi() {
				let address = uni.getStorageSync('address')
				let res = await getHoldersRewards(address)
				console.log(res,"getHoldersRewardsApi");
				this.model = {...this.model,...res.data}
			},
			getBtn() {
				console.log('领取');
				uni.showToast({
					title: '请等待ing..',
					icon: 'none',
				})
			},
			goBack() {
				uni.navigateTo({
					url: "/pages/index/index"
				});
			},
			updateProgress(newProgress) {
				this.progress = newProgress;
			},
		},
		onLoad() {
			
		},
		async onShow() {
			await this.getUserInfoApi()
			await this.getHoldersRewardsApi()
		}
	};
</script>

<style scoped lang="scss">
	
	.wallet-avatar-gap {
	  border-radius: 40rpx;
	  background-color: #4a90e2;
	  width: 80rpx;
	  height: 80rpx;
		margin-right: 31rpx;
	}
	
	.content {
		width: 100%;
		min-height: 100vh;
		background-color: #1f2630;
	}

	.claimBox {
		display: flex;
		align-items: center;
		padding-top: 50rpx;

		.claim1 {
			width: 22rpx;
			height: 38rpx;
			margin-left: 28rpx;
		}

		.claim2 {
			font-weight: 500;
			font-size: 36rpx;
			color: #ffffff;
			margin-left: 275rpx;
		}
	}

	.addressOne {
		display: flex;
		align-items: center;
		margin-top: 59rpx;
		margin-left: 30rpx;

		.tp {
			width: 100rpx;
			height: 100rpx;
		}

		.address {
			font-weight: 300;
			font-size: 36rpx;
			color: #ffffff;
			margin-left: 21rpx;
		}

		.down {
			width: 25rpx;
			height: 14rpx;
			margin-left: 20rpx;
		}
	}

	.picBox {
		width: 690rpx;
		height: 420rpx;
		background-size: 100%;
		background-image: url("/static/home/nine.png");
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 30rpx;

		.picOne {
			display: flex;
			align-items: center;
			padding-top: 30rpx;

			.pic1 {
				width: 44rpx;
				height: 48rpx;
				margin-left: 22rpx;
			}

			.num1 {
				font-size: 30rpx;
				color: #ffffff;
				margin-left: 11rpx;
			}

			.num2 {
				font-size: 48rpx;
				color: #ffffff;
				margin-left: 45rpx;
			}

			.pic2 {
				width: 35rpx;
				height: 23rpx;
				margin-left: 20rpx;
			}
		}

		.drawDownBox {
			display: flex;
			align-items: center;
			margin-top: 63rpx;

			.drawOne {
				margin-left: 46rpx;
				text-align: center;

				.one {
					font-size: 36rpx;
					color: #ffffff;
				}

				.one1 {
					font-size: 24rpx;
					color: #8e8e8f;
				}
			}

			.drawTwo {
				margin-left: 125rpx;
				text-align: center;

				.two {
					font-size: 36rpx;
					color: #ffffff;
				}

				.two2 {
					font-size: 24rpx;
					color: #8e8e8f;
				}
			}

			.drawThree {
				margin-left: 134rpx;
				text-align: center;

				.three {
					font-size: 36rpx;
					color: #ffffff;
				}

				.three3 {
					font-size: 24rpx;
					color: #8e8e8f;
				}
			}
		}
	}

	.progress-container {
		width: 600rpx;
		display: flex;
		align-items: center;
		background-color: #333;
		border-radius: 10px;
		// overflow: hidden;
		margin-left: 45rpx;
		// margin-top: 60rpx;
		position: relative;
	}

	.progress-bar {
		height: 20rpx;
		background-color: #ffcc00;
		/* 黄色 */
		transition: width 0.5s ease-in-out;
	}

	.percentage {
		position: absolute;
		// top: 41%;
		left: 40%;
		right: 10px;
		font-size: 72rpx;
		color: #fcd434;
	}

	.submitBox {
		width: 690rpx;
		height: 88rpx;
	// 	background: #fcd434;
		background: #29313C;
		border-radius: 44rpx;
		margin-top: 60rpx;
		margin-left: 30rpx;

		.submit {
			font-weight: 500;
			font-size: 36rpx;
			color: #0d081a;
			line-height: 80rpx;
			text-align: center;
		}
	}
</style>