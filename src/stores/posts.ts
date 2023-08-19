import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type Post, type Posts } from "@tstypes/Post";
import { type User, type Users } from "@tstypes/User";
import axios, { type AxiosRequestConfig } from 'axios';
import { cloneDeep, concat } from "lodash";

export const usePostsStore = defineStore('Store', () => {
	const loading: Ref<boolean> = ref(true)
	const posts: Ref<Posts> = ref([])
	const users: Ref<Users> = ref({})

	async function get(url: string, options: AxiosRequestConfig<any> = {}, isFalseAfter: boolean = true): Promise<any> {
		loading.value = true
		return await axios.get(url, options).then(
			r => {
				if (isFalseAfter) {
					loading.value = false
				}
				return r.data;
			},
			e => {
				console.log(e);
				throw e
			});
	}

	async function getPosts(): Promise<void> {
		get('https://jsonplaceholder.typicode.com/posts/').then((r: Posts) => {
			posts.value = r
		})
	}

	async function getPostsByUsers(us: Users): Promise<void> {
		let ps: Posts = []
		for (const key in us) {
			if (Object.prototype.hasOwnProperty.call(us, key)) {
				const user = us[key];
				await get('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts', {}, false).then((r: Posts) => {
					ps = concat(ps, r) as Posts
				})
			}
		}
		loading.value = false
		posts.value = cloneDeep(ps)

	}

	async function getPost(postCreds: string | number, credType?: string): Promise<Post> {
		return get('https://jsonplaceholder.typicode.com/posts?' + (credType ? credType : 'id') + '=' + postCreds)
	}

	async function getUsers(): Promise<void> {
		get('https://jsonplaceholder.typicode.com/users/').then((r: User[]) => {
			const filteredUsers: Users = {}

			r.forEach((user: User): void => {
				filteredUsers[user.id] = user
			});
			users.value = cloneDeep(filteredUsers)
		})
	}

	async function getUser(userCreds: string | number, credType?: string): Promise<User> {
		return get('https://jsonplaceholder.typicode.com/users?' + (credType ? credType : 'id') + '=' + userCreds)
	}

	function getUsersBySubstring(substring: string): Users {
		const returnedUsers: Users = {}

		for (const key in users.value) {
			if (Object.prototype.hasOwnProperty.call(users.value, key)) {
				const user = users.value[key];
				if (user.name.includes(substring)) {
					returnedUsers[key] = cloneDeep(user)
				}
			}
		}
		return returnedUsers
	}

	return { loading, posts, users, getPosts, getPost, getUsers, getUser, getUsersBySubstring, getPostsByUsers }
})
