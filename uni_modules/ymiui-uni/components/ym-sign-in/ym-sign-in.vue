<template>
	<view class="ym-sign-in">
		<view class="sign-top">
			<view>今日签到成功</view>
			<view class="tag-box">本周已签到3天</view>
		</view>
		<view class="date-box">
			<view class="date-box-item" v-for="(item,index) in dateList" :key="index">
				<view v-if="item.status ==1" class="image-bg">
					<uni-icons type="checkmarkempty" size="20" color="#fff"></uni-icons>
				</view>
				<view v-else class="image-bg inactive">
					<uni-icons type="checkmarkempty" size="20" color="#fff"></uni-icons>
				</view>
				<text class="text">{{item.name}}</text>
			</view>
		</view>
		<view class="tip-box">
			每次签到获得10积分
		</view>
	</view>
</template>

<script setup>
	import { reactive } from "vue";
	const dateList = reactive([
		{name:'第一天',status:1},
		{name:'第二天',status:1},
		{name:'第三天',status:0},
		{name:'第四天',status:0},
		{name:'第五天',status:0},
		{name:'第六天',status:0},
		{name:'第七天',status:0},
	])
</script>

<style scoped>
	.ym-sign-in{
		background-image: url("../../static/images/sign-bg.png");
		background-size: 100% 100%;
		overflow: hidden;
		border-radius: 4px;
		padding: 30rpx;
	}
	.sign-top{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		font-size: 22px;
		font-weight: 600;
		color: #fff;
		margin-top: 50rpx;
		margin-bottom: 150rpx;
	}
	.sign-top .tag-box{
		font-size: 28rpx;
		background-color: #fff;
		color: #ed5200;
		font-weight: normal;
		border-radius: 100rpx;
		padding: 6rpx 20rpx;
		margin-top: 20rpx;
	}
	.date-box{
		display: flex;
		justify-content: space-between;
		margin-bottom: 50rpx;
	}
	.date-box .image-bg{
		background-image: linear-gradient(0deg,#ff9002,#ff5100);
		height: 60rpx;
		width: 60rpx;
		border-radius: 50%;
		margin-bottom: 6rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.date-box .inactive{
		background-image:none;
		background-color: #feefeb;
	}
	.date-box-item{
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.date-box-item .text{
		font-size: 12px;
		color: #888;
		text-align: center;
	}
	.tip-box{
		font-size: 14px;
		text-align: center;
		color: #888;
	}
</style>
