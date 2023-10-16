import { createStore } from "vuex";

const store = createStore( {
    state() {
        return {
            isLoggedIn:false,
            usernameInHeader:''
            
        }
    }
})
export default store;