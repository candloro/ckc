<template>
  <view class="content">
    <view class="claimBox">
      <img src="/static/home/right.png" alt="" class="claim1" @click="goBack" />
      <view class="claim2">Claim</view>
    </view>
    <view class="addressOne">
      <img src="/static/home/TP.png" alt="" class="tp" />
      <view class="address">Ox1**x92g</view>
      <img src="/static/home/seven.png" alt="" class="down" />
    </view>
    <view class="picBox">
      <view class="picOne">
        <img src="/static/home/eight.png" alt="" class="pic1" />
        <view class="num1">总收益</view>
        <view class="num2">875.25</view>
        <img src="/static/home/eye1.png" alt="" class="pic2" />
      </view>
      <view class="drawDownBox">
        <view class="drawOne">
          <view class="one"> 254.16 </view>
          <view class="one1"> 待解锁 </view>
        </view>
        <view class="drawTwo">
          <view class="two"> 254.16 </view>
          <view class="two2"> 待领取 </view>
        </view>
        <view class="drawThree">
          <view class="three"> 254.16 </view>
          <view class="three3"> 已领取 </view>
        </view>
      </view>
      <!--  -->
      <view class="progress-container">
        <view class="progress-bar" :style="{ width: progress + '%' }"></view>
        <text class="percentage">{{ progress }}%</text>
      </view>
    </view>
    <view class="submitBox">
      <view class="submit">领取</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: 70, // 初始进度值
    };
  },
  methods: {
    goBack() {
      uni.navigateTo({ url: "/pages/index/index" });
    },
    updateProgress(newProgress) {
      this.progress = newProgress;
    },
  },
};
</script>

<style scoped lang="scss">
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
  overflow: hidden;
  margin-left: 45rpx;
  margin-top: 60rpx;
}
.progress-bar {
  height: 20rpx;
  background-color: #ffcc00; /* 黄色 */
  transition: width 0.5s ease-in-out;
}
.percentage {
  position: absolute;
  top: 37%;
  left: 40%;
  right: 10px;
  font-size: 72rpx;
  color: #fcd434;
}
.submitBox {
  width: 690rpx;
  height: 88rpx;
  background: #fcd434;
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
