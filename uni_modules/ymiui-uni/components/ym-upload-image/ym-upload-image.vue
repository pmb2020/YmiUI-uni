<template>
	<view class="ym-upload-image">
		<image class="upload-image" src="@/static/logo.png" ></image>
		<image class="upload-image" src="@/static/logo.png" ></image>
		<view class="upload-box" @click="chooseImage">
			<text style="font-size: 38px;color: #888">+</text>
		</view>
	</view>
</template>

<script setup>
	const chooseImage = ()=>{
		uni.chooseImage({
			count: 2,
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album'], //从相册选择
			success: (res) => {
				console.log(JSON.stringify(res.tempFilePaths));
				uni.previewImage({
					urls: res.tempFilePaths,
					longPressActions:{
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: (data) => {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: (err) => {
							console.log(err.errMsg);
						}
					}
				})
			}
		})
	}
</script>

<style scoped>
	.ym-upload-image{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		--upload-image-size: 150rpx;
	}
	.upload-box{
		background-color: #eeeeee;
		width: var(--upload-image-size,180rpx);
		height: var(--upload-image-size,180rpx);
		border-radius: 2px;
		border: 1px solid #ffb703;
		border-style: dashed;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		margin-right: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.upload-image{
		width: var(--upload-image-size,180rpx);
		height: var(--upload-image-size,180rpx);
		border-radius: 4px;
		margin-bottom: 30rpx;
		margin-right: 8px;
	}
</style>
