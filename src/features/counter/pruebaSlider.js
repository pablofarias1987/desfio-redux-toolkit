import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from 'uuid';
import axios from "axios";


const initialState = {
    todos: [],
    value: 0
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTaskList: (state, actions) => {
            state.todos = actions.payload;
        },
        addTask: (state, actions) => {
            const newTask = {
                id: uuidv4(),
                text: actions.payload.text,
                done: false,
            };
            state.todos.push(newTask);
        },
        toggleTask: (state, action) => {
            const taskIndex = state.todos.findIndex(
                (task) => task.id === action.payload.id
            );
            // si la tarea existe, cambiamos el estado a su propiedad done.
            if (taskIndex >= 0) {
                state[taskIndex].done = !state[taskIndex].done
            }},
            deleteTask:(state, action) => {
                const taskIndex = state.todos.findIndex(
                    (task) => task.id === action.payload.id
                );
                return state.todos.splice(taskIndex, 1)
            },

        searchId:(state,actions) => {
            state.todos = actions.payload
        },
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        },
    
});

export const {
    setTaskList, incremented, decremented, addTask, deleteTask, toggleTask
} = taskSlice.actions;

export default taskSlice.reducer;

export const fetchAllTask = () => (dispatch) =>{
    axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos")
    .then((response)=> {
        dispatch(setTaskList(response.data))

    })
    .catch(()=>{})
}

export const deletedTa = (id) => {
    return async (dispatch) => {
        dispatch(deleteTask(id));
    };
}