
<template>
    <div  class="header">
        <div class="headerTitle">
        conduit
        </div>
        <div class="headerButtons">
            <router-link to="/"><button class="headerButton signUp">Home</button></router-link>
            
            <router-link v-if="this.$store.state.isLoggedIn" to="/newArticle"><button  class="headerButton signUp">&#9745 New Article</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/settings"><button  class="headerButton signUp"> &#10052 Settings</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/hz"><button  class="headerButton signUp"> {{$store.state.usernameInHeader}} </button></router-link>
            <router-link v-if="!this.$store.state.isLoggedIn" to="/loginPage"><button  class="headerButton signIn">Sign in</button></router-link>
            <router-link v-if="!this.$store.state.isLoggedIn" to="/registrationPage"><button   class="headerButton signUp">Sign up</button></router-link>
           <router-link to="/"><button v-if="this.$store.state.isLoggedIn"  @click="signOutMethod" class="headerButton signUp">Sign out</button></router-link>
           <input @click="check"  class="validationForm signInBtn" type="submit" value="check">
           <div>{{$store.state.isLoggedIn}}</div>
        </div>
    </div>
    <div  v-if="!this.$store.state.isLoggedIn" class="banner">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
    </div>
    <div class="togglePanel">
        <div class="togglePanelRef"> 
            Your Feed
        </div>
        <div class="togglePanelRef">
            Global Feed
        </div>
    </div>
    <hr>
    <RouterView /> 
</template>

<script>
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useRouter } from "vue-router";
import store from "../../store";
import {  } from "vue";
import { db } from "../../main";


import {getFirestore,collection,getDocs,getDoc, query, where,addDoc, CollectionReference,doc, FieldValue} from 'firebase/firestore'
export default {
    
    data() {
         return {
            users:[],
           usersa: [
            {
               email:[
                  {
                     articleTitle: this.articleTitle,
                     article: this.article,
                     tags: this.tags
                  }
               ]
            }
           ],
           displayName : "",
           email : "",
           password : "",
           auth : getAuth(),
           router: useRouter(),
           db:getFirestore() ,
           userNameInHeader:store.state.usernameInHeader,
           isLoggedIn1:store.state.isLoggedIn,
        }
        
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
      
      
           async check() {
            
            this.isLoggedInmethod();
            
            console.log(store.state.isLoggedIn)
            console.log(this.auth.currentUser.email)
            const q = query(collection(db, "users"), where("email", "==", this.auth.currentUser.email));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log('from db',doc.data().username);
  console.log(doc.data().username)
  const userNameInHeader = doc.data().username
  console.log(userNameInHeader)
});
            
            
           },
           signOutMethod() {
            signOut(this.auth).then((user) => {
               console.log('sign out ok')
               store.state.isLoggedIn = false;
               this.isLoggedInmethod();
               GpbSOlvBCDNkP3kpEqBIOEWvP153
            })
            .catch((error) => {
               console.log('error')
            })
           }
    }
}
     
</script>


<style>
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