<template>
	<view class="ym-form-item">
		<text v-if="lable" class="ym-lable" :style="{width:ymFormItem.lableWidth,textAlign:ymFormItem.lableAlign}">{{lable}}</text>
		<slot></slot>
		<view class="ym-line"></view>
	</view>
</template>

<script setup>
	import { inject, onMounted, reactive, ref } from "vue";
	const props = defineProps({
		lable:{
			type:String,
			default:''
		},
		lableWidth:{
			type:String,
			default:'70px'
		}
	})
	
	const ymFormItem = reactive({
		lableWidth: '65px',
		lableAlign: 'left'
	})
	
	const lableWidth3 = ref('60px')
	
	const ymForm121= inject('ymForm')
	// console.log(ymForm121)
	
	onMounted(()=>{
		initData()
	})
	const initData = ()=>{
		ymFormItem.lableWidth = ymForm121
		// props.lableWidth = ymForm121
		
	}
	
</script>

<style scoped>
	.ym-form-item{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 14px 16px;
		box-sizing: border-box;
		position: relative;
	}
	
	.ym-lable{
		margin-right: 15px;
	}
	
	.ym-line{
		background-color: #eee;
		position: absolute;
		left: 16px;
		right: 16px;
		bottom: 0;
		height: 1px;
		transform: scaleY(.5) translateZ(0);
	}
</style>
