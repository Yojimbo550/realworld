<template>
    <div class="header">
       <div class="headerTitle">
       conduit
       </div>
       <div class="headerButtons">
           <router-link to="/"><button class="headerButton">Home</button></router-link>
           <router-link to="/loginPage"><button  class="headerButton signIn">Sign in</button></router-link>
           <router-link to="/registrationPage"><button class="headerButton signUp">Sign up</button></router-link>
           
       </div>
   </div>
   <form @submit.prevent="" class="loginForm">
       <h1>Sign up</h1>
       <router-link to="/loginPage" class="refColorWidth">Have an account?</router-link>
       <input class="validationForm" type="username" v-model="displayName"  placeholder="Username">
       <input class="validationForm" type="email" v-model="email" placeholder="Email">
       <input class="validationForm" type="password"  v-model="password" placeholder="Password">
       <input @click="signUp(); users.push(this.auth.currentUser.email)"  class="validationForm signInBtn" type="submit" value="Sign Up">
       <input @click="check" class="validationForm signInBtn" type="submit" value="check">
       
   </form>
</template>

<script>
   import {getAuth,createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { useRouter } from "vue-router";
import store from "../../store";
   export default {
    data() {
         return {
            
           users: [
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
           isLoggedIn1:store.state.isLoggedIn,
        }
        
    },
    
       methods: {
         isLoggedInmethod() {
            if(this.auth.currentUser!=null) {
               store.state.isLoggedIn = true;
               return true;
            }
            else  {
               store.state.isLoggedIn = false;
               return false;
         }
      },
         signUp() {
            createUserWithEmailAndPassword(this.auth,this.email, this.password,this.displayName)
            .then((user) => {
               console.log('Successfully registered!');
               this.users.push(this.auth.currentUser.email)
               store.state.isLoggedIn = true;
               this.router.push('/');
              
            })
            .catch((error) => {
               console.log('error')
            })
            
           },
           addElement() {
            this.users.push(this.auth.currentUser.email)
           },
           check() {
            this.isLoggedInmethod();
            console.log(this.auth.currentUser)
            console.log(store.state.isLoggedIn)
            console.log(this.auth.currentUser.email)
            console.log(users)
            
           },
           signOutMethod() {
            signOut(this.auth).then((user) => {
               console.log('sign out ok')
            })
            .catch((error) => {
               console.log('error')
            })
           }
           
      //   handleSubmit() {
         
      //    if(localStorage.getItem('users')) {
      //          this.users = JSON.parse(localStorage.getItem('users'));
      //       }
      //       this.users.push(this.user);
      //       localStorage.setItem('users',JSON.stringify(this.users));
      //       console.log(localStorage.getItem('users'));
           
      //   }
       }
   }
</script>

<style  scoped>
.loginForm {
   display: flex;
   flex-direction: column;
   width: 500px;
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
</style>