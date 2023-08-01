<script setup>
    
</script>
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
    <div class="banner">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
    </div>
    <RouterView /> 
</template>



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
</style>