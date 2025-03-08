<template>
	<view class="content">
		<view class="headerBox">
			<view class="leftBox">
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
			</view>
		</view>
		<view class="boxOne">
			<image src="../../static/home/banner.png" class="banner1" />
		</view>
		<view class="myBox">
			<view class="my">我的资产</view>
			<image src="../../static/home/eye1.png" class="eyes" />
		</view>
		<view class="boxTwo">
			<view class="zeroBox">
				<view class="zero">1165.59</view>
			</view>
			<view class="zero1">
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
			<view class="fourRight">
				<image src="/static/home/four.png" class="fourOne" />
				<view class="fourTwo">2000cxc</view>
				<view class="fourThree">1680cxc</view>
				<view class="fourPut">335cxc</view>
				<div class="progress-container">
					<div class="progress-bar" id="progressBar">
						<span class="progress-text" id="progressText">0%</span>
					</div>
				</div>
			</view>
		</view>
		<view class="boxFive">
			<view class="force" @click="open">算力挖矿</view>
			<view class="force1" @click="releaseRecord">释放记录 ></view>
		</view>
		<view class="boxSix">
			<view class="earningsBox">
				<view class="earnings">挖矿收益</view>
				<image src="/static/home/six.png" class="whitePic" />
			</view>
			<view class="dayBox">
				<view class="day">
					<view class="math1">157</view>
					<view class="math2">今日收益</view>
				</view>
				<view class="day2">
					<view class="math3">315</view>
					<view class="math4">待释放</view>
				</view>
			</view>
			<view class="blueBox">
				<view class="oneDay">
					<view class="time1">29</view>
					<view class="time2">天 </view>
				</view>
				<view class="twoDay">
					<view class="time1">03</view>
					<view class="time2">时</view>
				</view>
				<view class="threeDay">
					<view class="time1">40</view>
					<view class="time2">分</view>
				</view>
				<view class="fourDay">
					<view class="time1">31</view>
					<view class="time2">秒</view>
				</view>
			</view>
			<view class="intoBox">
				<img class="chestBlue" src="/static/home/ChestBlue.png" alt="" />
				<img class="chestRed" src="/static/home/ChestRed.png" alt="" />
			</view>
		</view>
		<view class="copyBox">
			<view class="copyBox1">
				<image src="/static/home/five.png" class="copy3" />
				<view class="copy1"> 邀请链接：Http://sjdw.com </view>
				<view class="copy2">复制</view>
			</view>
		</view>
		
		<!-- 测试 -->
		<view class="" v-if="true">
			<button @click="testApi">testApi</button>
		</view>
		
		
		<view class="modelPopup">
			<uni-popup ref="popup" :mask-click="false" type="bottom" background-color="#fff">
				<view class="codeBox">
					<view class="code">邀请码绑定</view>
				</view>
				<view class="please">
					<input type="text" placeholder="请绑定邀请码" v-model="invitationCode" />
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
	import { Keypair } from "@solana/web3.js";
	import bs58 from "bs58"
	import nacl from "tweetnacl";
	import {
		login
	} from '@/api/index.js'
	export default {
		data() {
			return {
				popupVisible: false,
				publicKey: null,
				invitationCode: '' // 邀请码
			};
		},
		methods: {
			testApi(){
					async function main() {
					    // 1. 生成一个 Solana Keypair（相当于 Phantom 钱包）
					    const keypair = Keypair.generate();
					    console.log("Public Key:", keypair.publicKey.toBase58());
					    console.log("Private Key:", bs58.encode(keypair.secretKey)); // 不要暴露这个！
					
					    // 2. 生成随机 nonce（字符串）
					    // const nonce = Math.floor(Math.random() * 1e6).toString();
						const nonce = Math.floor(Math.random() * 1e8).toString(); // 生成0到99999999之间的随机数

						
					
					    // 3. 使用 Solana 私钥进行 Ed25519 签名
					    const message = new TextEncoder().encode(nonce);
					    const signature = nacl.sign.detached(message, keypair.secretKey);
					
					    console.log("Signature:", bs58.encode(signature));
					
					    // 4. 发送请求到后端
						// http://47.84.41.231:300/auth/login
					    const response = await fetch("http://47.84.41.231:3000/auth/login", {
					        method: "POST",
					        headers: { "Content-Type": "application/json" },
					        body: JSON.stringify({
					            address: keypair.publicKey.toBase58(), // 钱包地址
					            signature: bs58.encode(signature), // 转换为 Base58
					            nonce: bs58.encode(message), // 确保后端能够正确解析
					        }),
					    });
					
					    const data = await response.json();
					    console.log("JWT Token:", data);
					
					    // 5. 解析 Token
					    const payload = JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString());
					    const exp = payload.exp * 1000; // exp 是 Unix 时间戳（秒），转换成毫秒
					    console.log("exp:", exp);
					}
					
					main()
			},
			
			
			
			// 确认邀请
			invitationCodeConfirm() {
				console.log('231');
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
				this.$refs.popup.open("center");
			},
			togglePopup() {
				this.popupVisible = !this.popupVisible;
			},
			whitePopup() {
				this.popupVisible = false;
			},
			// 方法用于格式化 publicKey 的显示
			formatPublicKey(key) {
				if (!key) return "";
				const start = key.slice(0, 4);
				const end = key.slice(-4);
				return `${start}...${end}`;
			},
			// 登录Api
			async loginApi() {
				
				return
				let data = {
					"address": "",
					"signature": "",
					"nonce": ""
				}
				let re = await login(data)
				console.log(re, "re");
			},
			async connectAndRequestAccount() {
				this.loginApi()
				return
				if ("solana" in window && window.solana.isPhantom) {
					try {
						const resp = await window.solana.connect();
						this.publicKey = resp.publicKey.toString();
						localStorage.setItem("publicKey", this.publicKey);
						console.log("111", this.publicKey);
						uni.showToast({
							title: "钱包连接成功",
							icon: "success",
							duration: 2000,
						});
					} catch (err) {
						console.error("连接失败:", err);
						uni.showToast({
							title: "连接失败，请重试",
							icon: "none",
							duration: 2000,
						});
					}
				} else {
					uni.showModal({
						title: "提示",
						content: "请安装Phantom钱包",
						showCancel: false,
					});
				}
			},
		},
		onLoad() {
			// 页面加载时从本地存储加载 public key
			const savedPublicKey = uni.getStorageSync("publicKey");
			if (savedPublicKey) {
				this.publicKey = savedPublicKey;
			}
		},
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
		height: 577rpx;
		background-image: url("/static//home/blue.png");
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
			background: #59cf6f;
			border-radius: 4rpx;
			margin-top: 60rpx;
			margin-left: 55rpx;
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
		background-color: #df750b;
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
				margin-left: 58rpx;
			}

			.fourThree {
				margin-left: 74rpx;
			}

			.fourPut {
				margin-left: 70rpx;
			}

			.fourFive {
				margin-left: 50rpx;
			}
		}

		.fourRight {
			display: flex;
			font-weight: 300;
			font-size: 36rpx;
			color: #ffffff;
			margin-top: 22rpx;
			margin-left: 20rpx;

			.fourOne {
				width: 68rpx;
				height: 43rpx;
			}

			.fourTwo {
				margin-left: 30rpx;
			}

			.fourThree {
				margin-left: 25rpx;
			}

			.fourPut {
				margin-left: 25rpx;
			}

			.fourFive {
				margin-left: 50rpx;
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
		margin-left: 60rpx;
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