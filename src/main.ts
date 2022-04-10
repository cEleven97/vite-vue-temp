import AppVue from './App.vue'

import './styles/main.less'
import { router } from './routers/index'
const App = createApp(AppVue)

App.use(router)
App.mount('#app')
