<template>
     <div class="header">
        <div class="headerTitle">
        conduit
        </div>
        <div class="headerButtons">
            <router-link to="/"><button class="headerButton">Home</button></router-link>
            
            <router-link to="/loginPage"><button class="headerButton signIn">Sign in</button></router-link>
            <router-link to="/registrationPage"><button class="headerButton signUp">Sign up</button></router-link>
           
        </div>
    </div>
    <form class="loginForm">
        <h1>Sign in</h1>
        <router-link to="/registrationPage" class="refColorWidth">Need an account</router-link>
        <input class="validationForm" type="email" placeholder="Email">
        <input class="validationForm" type="password" placeholder="Password">
        <input  class="validationForm signInBtn" type="submit" value="Sign In">
    </form>
</template>

<script>
    export default {
        
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