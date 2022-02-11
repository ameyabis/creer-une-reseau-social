import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'
import App from './App.vue'

library.add(fas)
library.add(far)

createApp(App)
.use(store)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')