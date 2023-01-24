import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ContentHeader from './components/ContentHeader.vue'
import ContentItem from './components/ContentItem.vue'

const app = createApp(App)

app
  .component('content-header', ContentHeader)
  .component('content', ContentItem)
  .use(store)
  .use(router)
  .mount('#app')
