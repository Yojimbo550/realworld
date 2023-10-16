<script>
// import { RouterLink, RouterView } from 'vue-router'
// import Header from './components/Header.vue'
import store from './store';
import { onMounted, useSSRContext } from 'vue';
import { db } from './main';
import { collection, getDocs } from "firebase/firestore";


// onMounted(async() => {
//   const querySnapshot =  getDocs(collection(db, "users"))
//   let fbUsers = []
// querySnapshot.forEach((doc) => {
  
//   console.log(doc.id, " => ", doc.data());
//   const usera = {
//     id:doc.id,
//     email: doc.email.value,
//     username:doc.displayName.value
    
//   }
//   fbUsers.push(usera)
// })
// users.value = fbUsers
// })

  
//     onMounted(() => {
  
// })
// })
  



</script>

<template>
  <RouterView></RouterView>
  
   

  
</template>

<style scoped>
body {
  min-height: 0px;
  margin: 0;
}
</style>
