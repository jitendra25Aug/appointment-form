import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data";

const initialState = { users: [...users], filtered_users: [...users],currentUser: null, activeId: null };
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            const id = action.payload;
            let currentUser = state.users.find((item) => item.id === id);
            console.log("sate", currentUser, id);
            state.currentUser = currentUser;
        },
        setActiveId(state, action) {
            const id = action.payload;
            const newActiveId = id === state.activeId ? state.activeId : id;
            state.activeId = newActiveId;
        },
        updateUserList(state, action){
            let searchStr = action.payload;
            let newUsers = state.users.filter((item)=> item.name.toLocaleLowerCase().includes(searchStr) || item.contact.toString().includes(searchStr.toString()));
            state.filtered_users = newUsers;
        }
    }
});

export const userSliceActions = userSlice.actions;
export default userSlice;