// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap/dist/js/bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes/routes'
import store from './store/store'





const app = createApp(App);
app.use(store);
app.use(router);
app.use(bootstrap);
app.mount("#app")
// createApp(App).use(router).use(store).use(bootstrap).mount('#app')
