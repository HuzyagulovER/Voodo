<template>
	<header class="header">
		<div class="header__search search">
			<div class="search__icon">
				<IconSearch />
			</div>
			<input class="search__input" type="text" placeholder="Filter by author..." @input="filter($event)">
		</div>
	</header>

	<main class="main">
		<RouterView />
	</main>

	<VueLoading v-if="postsStore.loading" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { usePostsStore } from '@stores/posts'
import IconSearch from '@icons/IconSearch.vue';
import VueLoading from '@components/VueLoading.vue';
import { type Users } from "@tstypes/User";
const postsStore = usePostsStore()

function filter(name: Event): void {
	const users: Users = postsStore.getUsersBySubstring((name.target as HTMLInputElement).value)
	postsStore.getPostsByUsers(users)
}
</script>


<style lang="scss">
@import "@scss/_main";
@import "@scss/_vars";

.header {
	display: flex;
	justify-content: center;
	padding: 1.5rem;
}

.search {
	display: flex;
	width: auto;
	height: 2.2rem;
	background-color: $--c_white;
	border: .1rem solid $--c_grey;
	border-radius: 0.2rem;
	min-width: 20rem;

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: .5rem;
		border-right: .1rem solid $--c_grey;

		svg {
			width: 100%;
			height: 100%;
			fill: $--c_grey;
		}
	}

	&__input {
		width: auto;
		height: 100%;
		background-color: transparent;
		border: 0;
		padding: 0.2rem 0.5rem;
	}
}

.main {
	flex-grow: 1;
	padding: 0 2rem 1rem 2rem;
}
</style>
