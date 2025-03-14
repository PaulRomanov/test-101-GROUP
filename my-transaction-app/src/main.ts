import { createApp } from 'vue';
import './index.scss'
import App from './App.vue';
import pinia from './stores'; 

createApp(App)
  .use(pinia) 
  .mount('#app');