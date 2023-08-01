<script setup>
    
</script>
<template>
    <div class="header">
        <div class="headerTitle">
        conduit
        </div>
        <div class="headerButtons">
            <router-link to="/loginPage"><button class="headerButton">Home</button></router-link>
            
            <button class="headerButton signIn">Sign in</button>
        <button class="headerButton signUp">Sign up</button>
           
        </div>
    </div>
    <RouterView /> 
</template>



<style>
.header {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
    padding-top: 15px;
    padding-bottom: 15px;
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