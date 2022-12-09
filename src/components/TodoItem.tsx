import React from "react";
import Button from "./Button";



// const TodoItem: React.FC<TodoItemsProps> = () => {
type TodoProps = {
    todo:any,
}
const TodoItem = ({todo}:TodoProps) => {
    
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button  text="edit" variant="success"/>
                <Button text="delete" variant="warning"/>
            </div>
        </div>
        
    )
}
export default TodoItem

const todoItem = {
    background: "#2da4f8",
    color:"#fff",
    display:"flex",
    alignItems :"center",
    height:"3rem",
    padding: "0 1rem",
    justifyContent:"space-between",
    margin:"0.5rem 0"

}
