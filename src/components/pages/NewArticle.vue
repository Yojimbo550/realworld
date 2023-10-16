<template>
    <div  class="header">
        <div class="headerTitle">
        conduit
        </div>
        <div class="headerButtons">
            <router-link to="/"><button class="headerButton signUp">Home</button></router-link>
            
            <router-link v-if="this.$store.state.isLoggedIn" to="/newArticle"><button  class="headerButton signUp">&#9745 New Article</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/settings"><button  class="headerButton signUp"> &#10052 Settings</button></router-link>
            <router-link v-if="this.$store.state.isLoggedIn" to="/settings "><button  class="headerButton signUp"> {{$store.state.usernameInHeader}}</button></router-link>
            <router-link v-if="!this.$store.state.isLoggedIn" to="/loginPage"><button  class="headerButton signIn">Sign in</button></router-link>
            <router-link v-if="!this.$store.state.isLoggedIn" to="/registrationPage"><button   class="headerButton signUp">Sign up</button></router-link>
           <router-link to="/"><button v-if="this.$store.state.isLoggedIn"  @click="signOutMethod" class="headerButton signUp">Sign out</button></router-link>
           <input @click="check" class="validationForm signInBtn" type="submit" value="check">
           <div>{{$store.state.isLoggedIn}}</div>
        </div>
    </div>
    <div class="loginForm">
        <input class="validationForm" type="text" v-model="articleTitle"  placeholder="Article Title">
        <textarea class="validationForm" type="text" v-model="article" placeholder="Write your article"></textarea>
        <input class="validationForm" type="text" v-model="tags" placeholder="Enter tags">
        <input   @click="saveArticle" class="validationForm signInBtn" type="submit" value="Publicate">
    </div>
</template>

<script>
    import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useRouter } from "vue-router";
import store from "../../store";
import {  } from "vue";

export default {
    data() {
         return {
            
        //    users: [
            
        //     articles = [
        //         articleTitle = 'art',
        //         article = 'art2',
        //         tags = 'art3'
        //     ]
        //    ],
        articleTitle:'',
           article:'',
           tags: '',
           
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
         saveArticle() {
            const docRef =  addDoc(collection(db, "postArrays"), {
  articleTitle: this.articleTitle,
  article: this.article,
  tags:this.tags
});
         },
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
            console.log(this.auth.currentUser)
            console.log(store.state.isLoggedIn)
            
            console.log(this.users)
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
.loginForm {
    display: flex;
    flex-direction: column;
    width: 800px;
    max-width: 800px;
    gap: 15px;
    margin-left: auto;margin-right: auto;
}
h1 {
    text-align: center;
    font-size: 40px;
}
.refColorWidth {
    color: #5CB85C;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;

}
.refColorWidth:hover {
    text-decoration: underline;
}
.validationForm {
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 5px;
    border:solid 1px rgb(132, 127, 127);
}
.validationForm:focus {
   border-color: #5CB85C;
}
.signInBtn {
    background-color: #5CB85C;
    align-self: end;
    color: white;
    border: none;
    cursor: pointer;
    
}
.signInBtn:hover {
    background-color: #1ea41e;
}
textarea {
    resize: vertical;
}

</style>