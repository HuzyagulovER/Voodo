<template>
	<div class="loading">
		<IconLoading class="loading__icon" />
	</div>
</template>

<script setup lang="ts">
import IconLoading from '@icons/IconLoading.vue';

</script>

<style scoped lang="scss">
@import "@scss/_vars";

.loading {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: rgba($color: $--c_grey, $alpha: 0.5);

	&__icon {
		width: 10rem;
		height: 10rem;
		stroke: $--c_main;
		animation: rotate 500ms linear 0s infinite;
	}
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>