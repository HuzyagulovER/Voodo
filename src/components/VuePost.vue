<template>
	<div class="post">
		<p class="post__title">{{ post.title.slice(0, 1).toUpperCase() + post.title.slice(1) }}</p>
		<p class="post__text">{{ post.body.slice(0, 1).toUpperCase() + post.body.slice(1) }}</p>
		<p class="post__author">{{ user.name }}</p>
	</div>
</template>

<script setup lang="ts">
import { type Post } from "@tstypes/Post";
import { type User } from "@tstypes/User";
import { toRefs } from "vue";
const props = defineProps<{
	post: Post
	user: User
}>()

const { post, user } = toRefs(props)
</script>

<style scoped lang="scss">
@import "@scss/_vars";

.post {
	background-color: $--c_white;
	padding: 1rem;
	border: .1rem solid rgba($color: $--c_grey, $alpha: 0.5);
	border-radius: .2rem;

	&>*+* {
		margin-top: 1rem;
	}

	&__title {
		color: $--c_blue;
		font-weight: bold;
		cursor: pointer;
	}

	&__text {}

	&__author {
		font-size: 0.8rem;
		color: $--c_grey;
	}
}
</style>