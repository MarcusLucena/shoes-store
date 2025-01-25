import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './infra/apollo-client'
import './assets/styles/globals.scss'

import App from './App.vue'
import router from './router'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  App,
})

app.use(createPinia())
app.use(router)

app.mount('#app')
