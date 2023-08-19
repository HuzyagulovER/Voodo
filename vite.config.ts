import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@scss': path.resolve(__dirname, './src/assets/scss'),
			'@icons': path.resolve(__dirname, './src/components/icons'),
			'@views': path.resolve(__dirname, './src/views'),
			'@stores': path.resolve(__dirname, './src/stores'),
			'@tstypes': path.resolve(__dirname, './src/tstypes'),
			'@components': path.resolve(__dirname, './src/components'),
		}
	}
})
