import React, { useContext } from 'react'

export default  TodoContext = React.createContext({
    todos:[
        {
            id: 1,
            todos: "",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}



 