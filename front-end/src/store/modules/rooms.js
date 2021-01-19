import axios from "axios"

const state = {
    rooms:[]
}


const getters={
    getAllRooms:(state) => state
}

const actions={
    async allRooms({commit}){
        const response = await axios.get("/rooms")
        commit("SET_ROOMS",response.data)
    },
}

const mutations={
    SET_ROOMS:(state,rooms) => (state.rooms = rooms),
}


export default{
    state,
    mutations,
    getters,
    actions
}


