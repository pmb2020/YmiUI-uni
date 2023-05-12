<template>
	<view class="ym-section">
		{{title}}
	</view>
</template>

<script setup>
	const props = defineProps({
		title:{
			type:String,
			default:''
		}
	})
</script>

<style scoped>
	.ym-section{
		color: var(--ym-text-color-primary,#303133);
		font-weight: 600;
		padding-left: 8px;
		position: relative;
		box-sizing: border-box;
		line-height: 1;
		font-size: 16px;
		margin-bottom: 15px;
	}
	.ym-section::after{
		content: " ";
		position: absolute;
		width: 2px;
		height: 100%;
		background-color: var(--ym-color-primary,#465CFF);
		border-radius: 2px;
		left: 0;
		top: 0;
	}
</style>
