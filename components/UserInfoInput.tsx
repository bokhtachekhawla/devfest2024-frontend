import { useState } from 'react';
import { UserInfoInputProps } from '@/types/index';

const UserInfoInput: React.FC<UserInfoInputProps> = ({ label, value }) => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleEditClick = () => {
    setEditable(!editable);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <label className="font-bold text-gray-700">{label}:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        readOnly={!editable}
        title={label}
        placeholder={`Enter ${label}`}
        className={`border p-2 rounded ${editable ? 'bg-white' : 'bg-gray-100'} flex-grow`}
      />
      <button
        onClick={handleEditClick}
        className="ml-4 text-purple-500 hover:underline focus:outline-none"
      >
        {editable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default UserInfoInput;
