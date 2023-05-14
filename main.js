import App from './App'

import '@/uni_modules/ymiui-uni'

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}