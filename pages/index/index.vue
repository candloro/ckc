<template>
	<view class="content">
		<view class="headerBox">
			<view class="leftBox" @click="goUserInfo">
				<image src="../../static/home/one.png" class="oneImage" />
				<view class="hello">hi , cxc</view>
			</view>
			<view class="rightBox">
				<view class="lang">
					<!-- <view class="address" @click="connectAndRequestAccount">
            连接钱包
          </view> -->
					<p class="address" @click="connectAndRequestAccount">
						{{ publicKey ? formatPublicKey(publicKey) : "连接钱包" }}
					</p>
					<view class="addressBox">
						<view class="address1"> | EN </view>
						<image src="../../static/home/three.png" class="twoImage" @click="togglePopup" />
						<view v-if="popupVisible" class="popup" @click="whitePopup">
							<view class="popup-content">
								<view class="china">中文</view>
								<view class="en">English</view>
								<view class="langOne">印尼</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="swystemBox">
			<view class="swystem">
				<image src="../../static/home/two.png" class="threeImage" />
				<view class="swystem1">系统公告</view>
				<view class="" style="color: white;margin-left: 20rpx;">
					<!-- .................... -->
				</view>
			</view>
		</view>
		<view class="boxOne">
			<image src="../../static/home/banner.png" class="banner1" />
		</view>
		<view class="myBox">
			<view class="my">我的资产</view>
			<image src="../../static/home/eye1.png" @click="hideMony" class="eyes" />
		</view>
		<view class="boxTwo">
			<view class="zeroBox">
				<view class="zero" v-if="hideMonyShow">{{solLimit}}</view>
				<view class="zero" v-else style="width: 286rpx;">******</view>
			</view>
			<view class="zero1" v-if="false">
				<view class="c">CXC</view>
				<image src="../../static/home/down.png" class="down1" />
			</view>
		</view>
		<view class="boxThree">
			<view class="Rewards" @click="purseBox">持币奖励</view>
			<view class="Rewards1" @click="rewardRecord">奖励记录 ></view>
		</view>
		<view class="boxFour">
			<view class="fourLeft">
				<view class="fourOne">排名</view>
				<view class="fourTwo">总奖励</view>
				<view class="fourThree">已获得</view>
				<view class="fourPut">待释放</view>
				<view class="fourFive">距离上一名</view>
			</view>
			<view class="" style="height: 22rpx;">
				
			</view>
			<view class="fourRight">
				<image src="/static/home/four.png" class="fourOne" />
				<view class="fourTwo">
					{{isString(totalMiningReward)?totalMiningReward: Number(totalMiningReward).toFixed(5)}}
				</view>
				<view class="fourThree">{{isString(earnedRewards)?earnedRewards: Number(earnedRewards).toFixed(5)}}
				</view>
				<view class="fourPut">{{ isString(pendingRewards)?pendingRewards: Number(pendingRewards).toFixed(5)}}
				</view>
				<div class="progress-container">
					<div class="progress-bar" id="progressBar">
						<span class="progress-text" id="progressText">5%</span>
					</div>
				</div>
			</view>
		</view>
		<view class="boxFive">
			<view class="force">算力挖矿</view>
			<view class="force1" @click="releaseRecord">释放记录 ></view>
		</view>
		<view class="boxSix">
			<view class="earningsBox">
				<view class="flex" style="display: flex;align-items: end;">
					<view class="earnings">挖矿收益</view>
					<view class="" v-if="!remaining_days" style="font-size: 14px; line-height: 14px;border: 1px solid;border-radius: 25rpx;padding: 5px;margin-left: 10px;color: white;">
						未挖矿
					</view>
					<view class="" v-else='remaining_days' style="font-size: 14px; line-height: 14px;border: 1px solid;border-radius: 25rpx;padding: 5px;margin-left: 10px;color: white;">
						挖矿中
					</view>
				</view>

				<image src="/static/home/six.png" class="whitePic" />
			</view>
			<view class="dayBox">
				<view class="day">
					<view class="math1">{{isString(earnedRewards) ? 1231:Number(earnedRewards).toFixed(5)}}</view>
					<view class="math2">今日收益</view>
				</view>
				<view class="day2">
					<view class="math3">{{isString(pendingRewards) ? pendingRewards:Number(pendingRewards).toFixed(5)}}</view>
					<view class="math4">待释放</view>
				</view>
			</view>
			<view class="blueBox" v-if="remaining_days">
				<view class="oneDay">
					<view class="time1">{{remaining_days}}</view>
					<view class="time2">天 </view>
				</view>
				<view class="twoDay">
					<view class="time1">{{hours}}</view>
					<view class="time2">时</view>
				</view>
				<view class="threeDay">
					<view class="time1">{{minutes}}</view>
					<view class="time2">分</view>
				</view>
				<view class="fourDay">
					<view class="time1">{{seconds}}</view>
					<view class="time2">秒</view>
				</view>
			</view>
			<view class="" style="height: 60rpx;">
				
			</view>
			<view class="intoBox" v-if="remaining_days">
				<img class="chestBlue" v-if="current_stage_number == 1" src="/static/home/ChestBlue.png" alt="" />
				<img class="chestRed" @click="open"  v-if="current_stage_number == 2" src="/static/home/ChestRed.png" alt="" />
			</view>
			<view class="" style="height: 60rpx;">
				
			</view>
		</view>

		<view class="copyBox" v-if="true">
			<view class="copyBox1">
				<image src="/static/home/five.png" class="copy3" @click="open" />
				<view class="copy1" @click="open"> 邀请链接：{{invitedUrl}} </view>
				<view class="copy2" @click="copyUrlHandle">复制</view>
			</view>
		</view>

		<!-- 测试 -->
		<view class=""  v-if="false">
			<!-- 2 -->
			<!-- <button @click="fakeLogin">fake login</button> -->
			// <button @click="getSolBalance">fake login</button>
		</view>


		<view class="modelPopup">
			<uni-popup ref="popup" :mask-click="false" type="bottom" background-color="#fff">
				<view class="codeBox">
					<view class="code">邀请码绑定</view>
				</view>
				<view class="please">
					<input type="text" placeholder="请绑定邀请码" v-model="inviteCode" />
				</view>
				<view class="mustBox">
					<view class="must">*必须绑定邀请码才能进入第二阶段挖矿</view>
				</view>
				<view class="submitBox" @click="invitationCodeConfirm">
					<view class="submit">确认</view>
				</view>
				<view>
					<image src="/static/home/off.png" class="off" @click="off" />
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import {
		setToken
	} from '@/utils/auth.js'
	import {
		Keypair
	} from "@solana/web3.js";
	import bs58 from "bs58"
	import nacl from "tweetnacl";
	import {
		login,
		getStagesInfo,
		getMiningRewards,
		bindInviteCode
	} from '@/api/index.js'

	// 
	import { Connection, PublicKey } from "@solana/web3.js";
	// 使用 Solana 官方 RPC 节点
	// const connection = new Connection("https://api.mainnet-beta.solana.com");
	// https://dashboard.helius.dev/endpoints?projectId=a4010f16-27ec-4b93-80a8-dd78cde0d663
const connection = new Connection("https://mainnet.helius-rpc.com/?api-key=2fadc3bb-fda2-4c57-af9d-8a164f73f022");
	export default {
		methods: {
			// rpc 查询我的资产
			 async getSolBalance() {
				if(this.solLimit) return
			  try {
				const walletAddress =  uni.getStorageSync('walletAddress')
			    const publicKey = new PublicKey(walletAddress);				
			    const balance = await connection.getBalance(publicKey);
				if(balance){
					this.solLimit = balance / 1e9
				}else{
					console.log('balance not exist');
				}
			    console.log("SOL 余额:", balance / 1e9, "SOL"); // Solana 以 lamports 计数，需除以 1e9
			  } catch (error) {
			    console.error("查询 SOL 余额失败:", error);
			  }
			},
			isString(value) {
				return typeof value === 'string';
			},
			hideMony() {
				if (!this.publicKey) return
				this.hideMonyShow = !this.hideMonyShow
				this.getSolBalance()
			},
			formatTime(unit){
			  return unit < 10 ? '0' + unit : unit;
			},
			startRewardTimer() {
				// 每隔 5 秒调用一次 getMiningRewardsApi
				this.intervalId = setInterval(() => {
					// 获取当前的时分秒
					const now = new Date();
					const hours = now.getHours();
					const minutes = now.getMinutes();
					const seconds = now.getSeconds();
					this.hours = this.formatTime(hours)
					this.minutes = this.formatTime(minutes)
					this.seconds = this.formatTime(seconds)
					const timeString = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
					// console.log(timeString,'timeString');
					// getMiningRewards
					// 查询算力挖矿奖励
					this.getMiningRewardsApi();
					// 查询阶段
				// 	this.getStagesInfoApi();
				}, 1000); // 5000 毫秒 = 5 秒
			},
			stopRewardTimer() {
				if (this.intervalId) {
					clearInterval(this.intervalId); // 清除定时器
					this.intervalId = null;
				}
			},
			// 计算挖矿算力奖励
			async getMiningRewardsApi() {
				let res = await getMiningRewards()
				this.earnedRewards = res.data.earnedRewards
				this.pendingRewards = res.data.pendingRewards
				this.perSecondReward = res.data.perSecondReward
				this.totalMiningReward = res.data.totalMiningReward
			},
			// 查询阶段信息 
			async getStagesInfoApi() {
				let res = await getStagesInfo()
				this.current_stage_number = res.data.current_stage_number
				this.remaining_days = res.data.remaining_days
				// console.log(res, 'getStagesInfo');
			},
			// 我的
			goUserInfo() {
				console.log('1231');
				uni.navigateTo({
					url: '/pages/claim/claim'
				})
			},
			// 获取当前的 Solana 钱包实例
			getSolana() {
				if (!window.solana?.isPhantom) {
					alert("请安装 Phantom Wallet!");
					return null;
				}
				return window.solana;
			},
			// 登录接口
			async loginApi({
				address,
				nonce,
				signature
			}) {
				const data = {
					address,
					nonce,
					signature
				};
				// 请求登录接口
				try {
					const response = await login(data); // 你的登录API方法
					console.log("登录成功: 的女路", response);

					if (response.data) {
						setToken(response.data.token)
						this.getStagesInfoApi()
						// 开启定时其
						this.startRewardTimer()
						// 显示余额
						this.hideMony()
					}
					// 进一步处理登录成功的响应，例如保存 token 或跳转等
				} catch (error) {
					console.error("登录失败:", error);
				}
			},

			// 确认邀请接口
			async bindInviteCodeApi() {
				const response = await bindInviteCode({
					inviteCode: this.inviteCode
				}); // 你的登录API方法
				console.log('12312', response);

			},
			// 确认邀请
			invitationCodeConfirm() {
				console.log('231');
				if (this.inviteCode) {
					this.bindInviteCodeApi()
				}
				this.off()
			},
			purseBox() {
				uni.navigateTo({
					url: "/pages/claim/claim"
				});
			},
			rewardRecord() {
				uni.navigateTo({
					url: "/pages/rewardRecord/index"
				});
			},
			releaseRecord() {
				uni.navigateTo({
					url: "/pages/releaseRecord/releaseRecord"
				});
			},
			off() {
				console.log('关闭弹框');
				this.$refs.popup.close();
			},
			open() {
				console.log('open');
				this.inviteCode = ''
				this.$refs.popup.open("center");
			},
			togglePopup() {
				this.popupVisible = !this.popupVisible;
			},
			whitePopup() {
				this.popupVisible = false;
			},
			copyUrlHandle() {
				let that = this
				let invitedUrl = that.invitedUrl
				uni.setClipboardData({
					data: invitedUrl,
					success: function() {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						})
					}
				});
			},
			// 方法用于格式化 publicKey 的显示
			formatPublicKey(key) {
				if (!key) return "";
				const start = key.slice(0, 4);
				const end = key.slice(-4);
				return `${start}...${end}`;
			},
			// 连接钱包 获取 签名 并且登录
			async connectAndRequestAccount() {
				console.log('connectAndRequestAccount');
				// console.log(window, "window");
				// console.log(window.solana, 'solana');
				const resp = await window.solana.connect();
				const walletAddress = resp.publicKey.toBase58()
				uni.setStorageSync('walletAddress', walletAddress)
				this.publicKey = resp.publicKey.toString();

				uni.setStorageSync('publicKey', this.publicKey)
				// localStorage.setItem("publicKey", this.publicKey);
				// 2. 使用时间戳作为 nonce
				const nonce = Date.now().toString();
				this.nonce = nonce
				// 3. 对 nonce 进行签名
				const encodedMessage = new TextEncoder().encode(nonce);
				const {
					signature
				} = await window.solana.signMessage(encodedMessage, "utf8");
				// 4. 转换为 Base58 便于传输
				const signatureBase58 = bs58.encode(signature);
				let data = {
					address: this.publicKey,
					nonce,
					signature: signatureBase58
				}
				await this.loginApi(data);
				uni.showToast({
					title: "钱包连接成功",
					icon: "success",
					duration: 2000,
				});

				console.log(window.solana);
				console.log(window.solana.isPhantom, "window.solana.isPhantom");
			},
			// 检查钱包是否已连接
			async checkWalletConnection() {
				console.log('checkWalletConnection');
				const solana = this.getSolana();
				console.log(solana, "solana");
				console.log(solana.isConnected, "v");
				if (!solana) return;
				if (solana.isConnected) {
					try {
						console.log(solana, "solana");
						console.log(solana.publicKey.toString(), "solana");
						this.publicKey = solana.publicKey.toString();
						console.log("已连接钱包，公钥:", this.publicKey);
					} catch (error) {
						console.error("获取公钥失败:", error);
						throw error
					}
				} else {
					uni.showToast({
						title: '请链接钱包',
						icon: "none"
					})
					console.log('没有链接钱包');
				}
			},
		},
		onShow() {
			window.solana?.on('connect', () => {
				{
					this.publicKey = window.solana.publicKey.toString();
				}
			});
			// 判断 Phantom Wallet 是否存在
			if (!window.solana || !window.solana.isPhantom) {
				alert("请安装 Phantom Wallet!");
				console.log('提示安装插件');
				window.open("https://phantom.app/", "_blank");
			} else {
				console.log('检查练级');
				this.checkWalletConnection();
			}
			if (this.publicKey) {
				this.startRewardTimer()
				this.getStagesInfoApi() 
			}

		},
		onHide() {
			this.stopRewardTimer();
		},
		onUnload() {
			// 页面卸载时清除定时器
			console.log('onUnload');
			this.stopRewardTimer();
		},
		data() {
			return {
				publicKey: uni.getStorageSync('publicKey'),
				publicKey: null,
				signature: null, // 签名
				nonce: null, // 随机数
				popupVisible: false,
				inviteCode: '', // 邀请码
				// 校验状态
				verificationResult: null,

				invitedUrl: "Http://sjdw.com",
				// sol余额
				solLimit:0,

				// 阶段数 当前处于第一个阶段，剩余的时间是 23 天。
				current_stage_number: 1,
				remaining_days: 0,
				// 时间
				hours:0,
				minutes:0,
				seconds:0,
				//  计算挖矿
				earnedRewards: "----",
				pendingRewards: "----",
				perSecondReward: "----",
				totalMiningReward: "----",
				// 
				hideMonyShow: false,
				intervalId: null, // 用来存储定时器 ID
			};
		}
	};
</script>

<style scoped lang="scss">
	.off {
		width: 60rpx;
		height: 60rpx;
		margin-left: 315rpx;
		margin-top: 100rpx;
	}

	.submitBox {
		width: 600rpx;
		height: 88rpx;
		background: #fcd434;
		border-radius: 44rpx;
		text-align: center;
		line-height: 88rpx;
		margin-left: 45rpx;
		margin-top: 99rpx;

		.submit {
			font-weight: 500;
			font-size: 36rpx;
			color: #0d081a;
		}
	}

	.mustBox {
		margin-left: 31rpx;
		margin-top: 22rpx;

		.must {
			font-size: 24rpx;
			color: #999999;
		}
	}

	.please {
		width: 630rpx;
		height: 109rpx;
		background: #1f2630;
		border-radius: 30rpx;
		border: 1px solid #6c7680;
		margin-left: 30rpx;
		margin-top: 80rpx;

		input {
			font-size: 24rpx;
			color: #999999;
			margin-left: 32rpx;
			margin-top: 40rpx;
		}
	}

	.codeBox {
		margin-top: 39rpx;

		.code {
			font-weight: 500;
			font-size: 36rpx;
			color: #ffffff;
			text-align: center;
		}
	}

	::v-deep .uni-popup .uni-popup__wrapper {
		border-radius: 10px !important;
		background-color: #29313c !important;
		width: 695rpx;
		height: 600rpx;
	}

	.boxSix {
		width: 690rpx;
		// height: 577rpx;
		// background-image: url("/static//home/blue.png");
		background-color: #2A58FF;
		border-radius: 30rpx;
		background-size: 100%;
		margin: 30rpx;
		position: relative;

		.earnings {
			font-weight: 400;
			font-size: 36rpx;
			color: #ffffff;
			margin-left: 30rpx;
			padding-top: 30rpx;
		}

		.whitePic {
			width: 268rpx;
			height: 255rpx;
			position: absolute;
			top: 5%;
			left: 60%;
		}

		.dayBox {
			display: flex;
			align-items: center;
			margin-top: 60rpx;

			.day {
				margin-left: 57rpx;
				text-align: center;

				.math1 {
					font-weight: bold;
					font-size: 60rpx;
					color: #ffffff;
				}

				.math2 {
					font-weight: 400;
					font-size: 30rpx;
					color: #ffffff;
				}
			}

			.day2 {
				margin-left: 100rpx;
				text-align: center;

				.math3 {
					font-weight: bold;
					font-size: 60rpx;
					color: #ffffff;
				}

				.math4 {
					font-weight: 400;
					font-size: 30rpx;
					color: #ffffff;
				}
			}
		}

		.blueBox {
			display: flex;
			align-items: center;

			.oneDay {
				width: 120rpx;
				height: 130rpx;
				border-radius: 30rpx;
				border: 1px solid #738eff;
				text-align: center;
				margin-left: 45rpx;
				margin-top: 63rpx;

				.time1 {
					font-weight: bold;
					font-size: 72rpx;
					color: #ffffff;
				}

				.time2 {
					font-weight: 300;
					font-size: 24rpx;
					color: #ffffff;
				}
			}

			.twoDay {
				width: 120rpx;
				height: 130rpx;
				border-radius: 30rpx;
				border: 1px solid #738eff;
				text-align: center;
				margin-left: 42rpx;
				margin-top: 63rpx;

				.time1 {
					font-weight: bold;
					font-size: 72rpx;
					color: #ffffff;
				}

				.time2 {
					font-weight: 300;
					font-size: 24rpx;
					color: #ffffff;
				}
			}

			.threeDay {
				width: 120rpx;
				height: 130rpx;
				border-radius: 30rpx;
				border: 1px solid #738eff;
				text-align: center;
				margin-left: 42rpx;
				margin-top: 63rpx;

				.time1 {
					font-weight: bold;
					font-size: 72rpx;
					color: #ffffff;
				}

				.time2 {
					font-weight: 300;
					font-size: 24rpx;
					color: #ffffff;
				}
			}

			.fourDay {
				width: 120rpx;
				height: 130rpx;
				border-radius: 30rpx;
				border: 1px solid #738eff;
				text-align: center;
				margin-left: 40rpx;
				margin-top: 63rpx;

				.time1 {
					font-weight: bold;
					font-size: 72rpx;
					color: #ffffff;
				}

				.time2 {
					font-weight: 300;
					font-size: 24rpx;
					color: #ffffff;
				}
			}
		}

		.intoBox {
			width: 580rpx;
			height: 8rpx;
			// background: #59cf6f;
			// background: red;
			background: linear-gradient(to right, #7EDB6A 50%, #001EAE 50%);
			border-radius: 4rpx;
			margin:  0 auto;
			position: relative;
			.chestBlue {
				position: absolute;
				top: -300%;
				left: 40%;
				width: 68rpx;
				height: 58rpx;
			}

			.chestRed {
				position: absolute;
				top: -350%;
				left: 90%;
				width: 75rpx;
				height: 61rpx;
			}
		}
	}

	.copyBox {
		padding-bottom: 20rpx;
	}

	.copyBox1 {
		width: 690rpx;
		height: 88rpx;
		background: #1f2630;
		border-radius: 44rpx;
		border: 1px solid #ffffff;
		display: flex;
		align-items: center;
		margin: 30rpx;

		.copy1 {
			font-weight: 300;
			font-size: 30rpx;
			color: #ffffff;
			margin-left: 20rpx;
		}

		.copy2 {
			font-weight: 300;
			font-size: 30rpx;
			color: #ffffff;
			margin-left: 140rpx;
		}

		.copy3 {
			width: 29rpx;
			height: 36rpx;
			margin-left: 30rpx;
		}
	}

	.boxFive {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30rpx;

		.force {
			font-weight: 400;
			font-size: 36rpx;
			color: #ffffff;
			margin-left: 30rpx;
		}

		.force1 {
			font-weight: 300;
			font-size: 24rpx;
			color: #ffffff;
			margin-right: 30rpx;
		}
	}

	.progress-container {
		width: 120rpx;
		height: 8rpx;
		// background-color: #df750b;
		background: linear-gradient(to right, #E2770D 50%, #2B323D 50%);
		/* 渐变背景，左半部分是绿色，右半部分是橙色 */
		border-radius: 25px;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.boxFour {
		width: 690rpx;
		height: 141rpx;
		background: #1f2630;
		border-radius: 30rpx;
		border: 1px solid #ffffff;
		margin-left: 30rpx;
		margin-top: 22rpx;

		.fourLeft {
			display: flex;
			font-weight: 300;
			font-size: 24rpx;
			color: #999999;
			margin-top: 22rpx;
			margin-left: 30rpx;

			.fourTwo {
				// width: ;
				margin-left: 58rpx;
			}

			.fourThree {
				// width: ;
				margin-left: 74rpx;
			}

			.fourPut {
				// width: ;
				margin-left: 70rpx;
			}

			.fourFive {
				margin-left: 50rpx;
			}
		}

		.fourRight {
			display: flex;
			font-weight: 300;
			// font-size: 36rpx;
			font-size: 30rpx;
			color: #ffffff;
			// margin-left: 20rpx;
			// justify-content: space-around;
			width: 640rpx;
			margin: 0 auto;

			.fourOne {
				width: 68rpx;
				height: 43rpx;
			}

			.fourTwo {
				text-align: center;
				width: 30%;
				// width: 92rpx;
				// margin-left: 30rpx;
			}

			.fourThree {
				width: 30%;
				text-align: center;
				// width: 92rpx;
				// margin-left: 25rpx;
			}

			.fourPut {
				width: 30%;
				text-align: center;
				// width: 92rpx;
				// margin-left: 25rpx;
			}

			.fourFive {
				width: 20%;
				// margin-left: 50rpx;
			}
		}
	}

	.boxThree {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10rpx;

		.Rewards {
			font-weight: 400;
			font-size: 36rpx;
			color: #ffffff;
			margin-left: 30rpx;
		}

		.Rewards1 {
			font-weight: 300;
			font-size: 24rpx;
			color: #ffffff;
			margin-right: 30rpx;
		}
	}

	.boxTwo {
		display: flex;
		align-items: center;

		.zeroBox {
			margin-left: 30rpx;

			.zero {
				font-weight: bold;
				font-size: 72rpx;
				color: #ffffff;
			}
		}

		.zero1 {
			display: flex;
			align-items: center;
			margin-left: 114rpx;

			.c {
				font-weight: 300;
				font-size: 24rpx;
				color: #ffffff;
			}

			.down1 {
				width: 10rpx;
				height: 10rpx;
				margin-left: 10rpx;
			}
		}
	}

	.content {
		width: 100vw;
		min-height: 100vh;
		background: #1f2630;
	}

	.headerBox {
		display: flex;
		align-items: center;
		padding-top: 40rpx;
	}

	.leftBox {
		display: flex;
		align-items: center;
		margin-left: 16rpx;
	}

	.oneImage {
		width: 129rpx;
		height: 129rpx;
	}

	.hello {
		font-weight: 800;
		font-size: 36rpx;
		color: #ffffff;
		line-height: 64rpx;
	}

	.rightBox {
		width: 270rpx;
		height: 80rpx;
		background: rgba(108, 118, 128, 0);
		border-radius: 40rpx;
		border: 1px solid #ffffff;
		margin-left: 144rpx;
	}

	.address {
		font-weight: 300;
		font-size: 24rpx;
		color: #ffffff;
		line-height: 80rpx;
		text-align: center;
		// margin-left: 60rpx;
		margin-left: 20rpx;
	}

	.lang {
		display: flex;
		align-items: center;
	}

	.addressBox {
		display: flex;
		align-items: center;
	}

	.swystem {
		display: flex;
		align-items: center;
	}

	.address1 {
		font-weight: 400;
		font-size: 24rpx;
		color: #ffffff;
		line-height: 64rpx;
		margin-left: 13rpx;
	}

	.twoImage {
		width: 17rpx;
		height: 9rpx;
		margin-left: 10rpx;
	}

	.swystemBox {
		width: 690rpx;
		height: 80rpx;
		background: #1f2630;
		border-radius: 40rpx;
		border: 1px solid #ffffff;
		margin-top: 25rpx;
		margin-left: 30rpx;
	}

	.threeImage {
		width: 36rpx;
		height: 32rpx;
		margin-left: 30rpx;
	}

	.swystem1 {
		font-weight: 500;
		font-size: 30rpx;
		color: #fcd434;
		line-height: 70rpx;
		margin-left: 15rpx;
	}

	.popup {
		position: fixed;
		top: -62%;
		left: 0;
		right: -45%;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9;
	}

	.popup-content {
		width: 270rpx;
		height: 267rpx;
		background: #1f2630;
		border-radius: 10rpx;
		border: 1px solid #ffffff;
		border-radius: 5px;
		text-align: center;
	}

	.language-option {
		margin: 10px 0;
		cursor: pointer;
	}

	.language-option:hover {
		color: #6495ed;
	}

	.china {
		font-weight: 300;
		font-size: 30rpx;
		color: #ffffff;
		line-height: 64rpx;
		margin-top: 30rpx;
	}

	.en {
		font-weight: 300;
		font-size: 30rpx;
		color: #ffffff;
		line-height: 64rpx;
	}

	.langOne {
		font-weight: 300;
		font-size: 30rpx;
		color: #ffffff;
		line-height: 64rpx;
	}

	.banner1 {
		width: 690rpx;
		height: 375rpx;
		margin: 30rpx;
	}

	.myBox {
		display: flex;
		align-items: center;
		margin-left: 30rpx;

		.my {
			font-weight: 300;
			font-size: 36rpx;
			color: #ffffff;
		}

		.eyes {
			width: 35rpx;
			height: 26rpx;
			margin-left: 30rpx;
		}
	}
</style>