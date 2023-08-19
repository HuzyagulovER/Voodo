<template>
	<div class="posts grid" ref="mansory">
		<VuePost class="posts__post grid-item" v-for="(post, j) in posts" :key="j" :post="(post as Post)"
			:user="users[(post as Post).userId]" />
	</div>
</template>

<script setup lang="ts">
import VuePost from '@components/VuePost.vue';
import { usePostsStore } from '@stores/posts'
import Masonry from "masonry-layout";
import { storeToRefs } from 'pinia';
import { type Post } from "@tstypes/Post";
import { type Ref, ref, watch } from 'vue';

const postsStore = usePostsStore()
const { users, posts } = storeToRefs(postsStore)
const mansory: Ref<null> = ref(null)

postsStore.getUsers().then(() => {
	postsStore.getPosts()
})

watch(() => posts.value,
	() => {
		setTimeout(() => {
			new Masonry(<unknown>mansory.value as Element, {
				itemSelector: '.grid-item'
			});
		}, 0);
	},
	{ deep: true }
)
</script>

<style lang="scss" scoped>
.posts {
	&__post {
		margin-right: 1rem;
		margin-bottom: 1rem;

		&:nth-child(3n) {
			margin-right: 0;
		}
	}

	.grid-item {
		width: calc((100% - 4rem)/4);
	}
}

@media screen and (max-width: 1200px) {
	.posts {
		.grid-item {
			width: calc((100% - 3rem)/3);
		}
	}
}

@media screen and (max-width: 800px) {
	.posts {
		.grid-item {
			width: calc((100% - 2rem)/2);
		}
	}
}

@media screen and (max-width: 550px) {
	.posts {
		.grid-item {
			width: calc((100% - 1rem)/1);
		}
	}
}
</style>

