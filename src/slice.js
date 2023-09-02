import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    abc:[],
}

export const todoSlice = createSlice({
    name:"todo1",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            if(action.payload==""){
                console.log("blank");
            }else {
                const todo = {
                    id: nanoid(),
                    text: action.payload
                };
                state.abc.push(todo);
            }

        },
        removetodo:(state,action)=>{
            state.abc = state.abc.filter((todo)=>
                todo.id!==action.payload)
        },
    }
})

export const {addtodo,removetodo} = todoSlice.actions
export default todoSlice.reducer