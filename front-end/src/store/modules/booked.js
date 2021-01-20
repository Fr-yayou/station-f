import axios from "axios"

const state = {
    booking:[]
}


const getters={
    
}

const actions={
    async addBooking({commit},newBooking){
        console.log(newBooking,"before api")
        const response = await axios.post("/booking/post",newBooking)
        console.log(response,"response")
        commit("ADD_BOOKING",response.data)
    }
}

const mutations={
    ADD_BOOKING:(state,newBooking) => state.booking .push(newBooking),
}


export default{
    state,
    mutations,
    getters,
    actions
}