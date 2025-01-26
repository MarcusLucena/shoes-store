import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './infra/apollo-client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/globals.scss'

import App from './App.vue'
import router from './router'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
