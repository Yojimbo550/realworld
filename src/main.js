import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/database'
import store from './store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'





firebase.initializeApp({
  apiKey: "AIzaSyD-CypTADPfEnacjTHWGngrFdkVp8afUGU",
  authDomain: "vue-auth-4fb98.firebaseapp.com",
  projectId: "vue-auth-4fb98",
  storageBucket: "vue-auth-4fb98.appspot.com",
  messagingSenderId: "288341203160",
  appId: "1:288341203160:web:4e03726d82c85cd6cb5fad"
});

// firebase.auth().onAuthStateChanged((user) => {
//   if(user) {
//     app = new Vue({
//       router,
//       store,
//       render:h=> h(App)
//     }).$mount('#app')
//   }
// })

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  
  if (user) {
    
    store.state.isLoggedIn = true;
    // ...
  } else {
    store.state.isLoggedIn = false;
  }
 
});

  

 
 const app = createApp(App)

app.use(router)

app.use(store)

app.mount('#app')
