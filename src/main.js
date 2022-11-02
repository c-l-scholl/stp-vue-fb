import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// emitter information from https://stackoverflow.com/questions/63471824/vue-js-3-event-bus
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;


app.use(router).mount('#app')
