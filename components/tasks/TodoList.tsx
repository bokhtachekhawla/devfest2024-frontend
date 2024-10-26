import React from 'react';

interface TodoListProps {
  todos: string[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="bg-purple-600 p-6 rounded-lg shadow-md flex flex-col items-start justify-start w-full">
      <h3 className="text-white text-xl font-semibold mb-4 uppercase tracking-wide">To do:</h3>
      {todos.length > 0 ? (
        <ul className="text-white text-lg space-y-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 text-xl text-white">●</span>
              <span>{todo}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white text-lg">No tasks assigned.</p>
      )}
    </div>
  );
};