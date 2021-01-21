import axios from "axios"

const state = {
    booking:[]
}


const getters={
    getAllBookings:(state) => state
}

const actions={
    async addBooking({commit},newBooking){
        const response = await axios.post("/booking/post",newBooking)
        console.log(response,"response")
        commit("ADD_BOOKING",response.data)
    },

    async allBookings({commit}){
        const response = await axios.get("/booking")
        commit("SET_BOOKING",response.data)
    }
}

const mutations={
    ADD_BOOKING:(state,newBooking) => state.booking .push(newBooking),
    SET_BOOKING:(state,booking) => (state.booking = booking)
}


export default{
    state,
    mutations,
    getters,
    actions
}