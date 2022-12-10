import React from 'react';
import Button from './Button';

// const TodoItem: React.FC<TodoItemsProps> = () => {
interface TodoProps {
  todo: any;
  del: Function;
}
const TodoItem: React.FC<TodoProps> = ({ todo, del }) => {
  const delById = (id: number): void => {
    del(id);
  };
  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div>
        <Button text="edit" variant="success" action={delById} />{' '}
        {/* membutuhkan action */}
        <Button
          text="delete"
          variant="warning"
          action={() => delById(todo.id)}
        />
      </div>
    </div>
  );
};
export default TodoItem;

const todoItem = {
  background: '#2da4f8',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  height: '3rem',
  padding: '0 1rem',
  justifyContent: 'space-between',
  margin: '0.5rem 0'
};
