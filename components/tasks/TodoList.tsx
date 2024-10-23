// TodoList.tsx
import React from 'react';
import { TodoListProps } from '@/types';

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="todo-list-container bg-purple-600 p-6 rounded-lg shadow-md flex flex-col items-start justify-start">
    <h3 className="text-white text-2xl font-semibold mb-6 text-center">To do :</h3>
    <ul className="text-white text-lg space-y-4 text-left">
      {todos.map((todo, index) => (
        <li key={index} className="flex items-start justify-start">
          <span className="mr-2">○</span> {todo}
        </li>
      ))}
    </ul>
  </div>
  );
};