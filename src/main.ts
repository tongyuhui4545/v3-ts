import {createApp} from "vue";
import App from './views/App.vue';
import pinia from './store';
import './styles/index.css';
import router from './router'
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');