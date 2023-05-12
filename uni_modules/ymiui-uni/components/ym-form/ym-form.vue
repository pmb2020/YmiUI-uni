<template>
	<form class="ym-form" action="" @submit="">
		<slot></slot>
	</form>
</template>

<script setup>
	import { provide } from "vue";
	const props = defineProps({
		labelWidth:{
			type: String,
			default:'75px'
		}
	})
	provide('ymForm',props.labelWidth)
</script>

<style scoped>
	.ym-form{
		/* display: flex; */
		/* flex-direction: column; */
	}
	
	.ym-form .ym-form-item .ym-lable{
		/* width: 300px !important; */
	}

</style>
