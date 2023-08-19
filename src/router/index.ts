import { createRouter, createWebHistory } from 'vue-router'
import ThePosts from '@views/ThePosts.vue'

const router = createRouter({
	history: createWebHistory('/examples/_voodo/'),
	routes: [
		{
			path: '/',
			name: 'posts',
			component: ThePosts
		}
	]
})

export default router
