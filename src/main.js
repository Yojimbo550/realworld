import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {initializeApp} from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyD-CypTADPfEnacjTHWGngrFdkVp8afUGU",
  authDomain: "vue-auth-4fb98.firebaseapp.com",
  projectId: "vue-auth-4fb98",
  storageBucket: "vue-auth-4fb98.appspot.com",
  messagingSenderId: "288341203160",
  appId: "1:288341203160:web:4e03726d82c85cd6cb5fad"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
