import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from 'uuid';
import axios from "axios";


const initialState = {
    todos: [],
    newtodo:{},
    value: 0
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTaskList: (state, actions) => {
            state.todos = actions.payload;
        },
        addTask: (state,actions)=>{
            const newTask = {
        
              lebel: actions.payload,
              done: false, 
           
            };
            state.todos.push(newTask); 
          },
          //no funciona    
          toggleTask: (state, action) => {
            const taskIndex = state.todos.findIndex(
              (task) => task.id === action.payload.id
            );
            if (taskIndex >= 0) {
              state[taskIndex].done = !state[taskIndex].done;
            }},
            deleteTask:(state, actions)=>{
          
              state.todos = state.todos.filter((todo) => todo.id !== actions.payload)
       
            },
     
            editTask: (state, action) => {
                const { id, description } = action.payload;
                const foundTask = state.find((task) => task.id === id);
                if (foundTask) {
                  foundTask.description = description;
                }
              },
       

        searchId:(state,actions) => {
            state.todos = actions.payload
        },
        },
    
});

export const {
    setTaskList, incremented, decremented, addTask, deleteTask, toggleTask, editTask
} = taskSlice.actions;

export default taskSlice.reducer;

export const fetchAllTask = () => (dispatch) =>{
    axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos")
    .then((response)=> {
        dispatch(setTaskList(response.data))

    })
    .catch(()=>{})
}

