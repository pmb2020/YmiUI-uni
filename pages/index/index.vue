<template>
	<view class="index">
		<image class="logo" src="/static/logo.png"></image>
		<view style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
			<navigator style="margin: 15rpx;" url="/pages/form/form">
				<ym-button>表单</ym-button>
			</navigator>
			
			<navigator style="margin: 15rpx;" url="/pages/upload/upload">
				<ym-button>上传</ym-button>
			</navigator>
			
			<navigator style="margin: 15rpx;" url="/pages/signIn/signIn">
				<ym-button>签到</ym-button>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>

	.logo {
		display: block;
		height: 200rpx;
		width: 200rpx;
		margin: 30rpx auto;
		border-radius: 8%;
	}

</style>
