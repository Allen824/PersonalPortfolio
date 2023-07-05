import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faVuejs, faSquareJs, faCss3Alt, faNodeJs, faReact, faHtml5} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import store from './store'

library.add(faGithub, faLinkedin, faVuejs, faSquareJs, faCss3Alt, faArrowUp, faNodeJs, faReact, faHtml5)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
