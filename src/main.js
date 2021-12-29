import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee as fasCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faUserSecret, fasCoffee)
// .use(FontAwesomeIcon)

createApp(App).use(store).use(router).mount('#app')