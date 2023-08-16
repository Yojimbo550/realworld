
<template>
    <div  class="header">
        <div class="headerTitle">
        conduit
        </div>
        <div class="headerButtons">
            <router-link to="/"><button class="headerButton signUp">Home</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/newArticle"><button  class="headerButton signUp">&#9745 New Article</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/settings"><button  class="headerButton signUp"> &#10052 Settings</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/hz"><button  class="headerButton signUp"> {{auth.currentUser.email }}</button></router-link>
           <router-link to="/"><button v-if="this.$store.state.isLoggedIn"  @click="signOutMethod" class="headerButton signUp">Sign out</button></router-link>
           <input @click="check" class="validationForm signInBtn" type="submit" value="check">
           <div>{{$store.state.isLoggedIn}}</div>
        </div>
    </div>
    <div  v-if="!this.$store.state.isLoggedIn" class="banner">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
    </div>
   <div class="settingsForm">
    <h1>Your settings</h1>
    <input class="validationForm" type="text" v-model="articleTitle" placeholder="Article Title">
        <textarea class="validationForm" type="text" v-model="article" placeholder="Write your article"></textarea>
        <input class="validationForm" type="text" v-model="tags" placeholder="Enter tags">
   </div>>
    
    <RouterView /> 
</template>

<script>
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useRouter } from "vue-router";
import store from "../../store";
import {  } from "vue";

export default {
    
    data() {
         return {
            
           users: [],
           displayName : "",
           email : "",
           password : "",
           auth : getAuth(),
           router: useRouter(),
           isLoggedIn1:store.state.isLoggedIn,
        }
        
        
    },
    setup() {
       
            //  beforeMount(() => {
            //     console.log(store.state.isLoggedIn)
            //     if(store.state.isLoggedIn) {
            //         store.state.isLoggedIn= true
            //     }
            //     console.log(store.state.isLoggedIn)
            //  })       


        
    },
    methods: {
        
         isLoggedInmethod() {
            if(this.auth.currentUser!=null) {
               
               store.state.isLoggedIn = true;
               return true;
              
            }
            else if(this.auth.currentUser==null) {
                store.state.isLoggedIn = false;
               return false;
         }
      },
      
      
           check() {
            this.isLoggedInmethod();
            const email = this.auth.currentUser.email;
            console.log(this.auth.currentUser)
            console.log(store.state.isLoggedIn)
            console.log(this.auth.currentUser.email)
            // console.log(this.auth.currentUser.displayName)
            // console.log(this.auth.currentUser.name)
            
           },
           signOutMethod() {
            signOut(this.auth).then((user) => {
               console.log('sign out ok')
               store.state.isLoggedIn = false;
               this.isLoggedInmethod();
               
            })
            .catch((error) => {
               console.log('error')
            })
           }
    }
}
     
</script>


<style>
.settingsForm {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    flex-direction: column;
    gap: 15px;
}
.banner {
    font-family: "Source Sans Pro", sans-serif;
    background-color: #5CB85C;
    font-size: 20px;
    letter-spacing: 1px;
    color: white;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: inset 0 8px 8px -8px  #606060,
    inset 0 -3px 8px -8px  #606060;
    
}
.banner h1 {
    font-size: 50px;
    margin: 0px;
    text-shadow: 0px 1px 1px #707070;
    
}
.header {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
}
.headerButtons {
    display: flex;
    gap: 20px;
    
}
.headerTitle {
    display: flex;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #5CB85C;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
}
.headerButton {
    cursor:pointer;
    border: none;
    font-size: 14px;
    background-color: white;
}
.signIn {
    opacity:0.3;
    transition: 0.3s;
}
.signUp {
    opacity:0.3;
    transition: 0.3s;
}
.signUp:hover {
    opacity: 1;
}
.signIn:hover {
    opacity: 1;
}
.togglePanel {
    display:flex;
    gap: 20px;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
    cursor: pointer;
    
    
}
.togglePanelRef {

}
.togglePanelRef:hover {
    opacity: 1;
    opacity:0.3;
    transition: 0.3s;
}
hr{
    width: 1100px;  
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
}

</style>