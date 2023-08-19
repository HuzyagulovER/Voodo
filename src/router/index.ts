import { createRouter, createWebHistory } from 'vue-router'
import ThePosts from '@views/ThePosts.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'posts',
			component: ThePosts
		}
	]
})

export default router
