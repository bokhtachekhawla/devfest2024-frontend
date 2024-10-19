import {ActionButtonProps} from '@/types/index';
  
  const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, color = 'purple' }) => {
    const buttonStyles = `bg-${color}-500 hover:bg-${color}-700 text-white py-2 px-4 rounded transition duration-200 ease-in-out`;
  
    return (
      <button onClick={onClick} className={buttonStyles}>
        {label}
      </button>
    );
  };
  
  export default ActionButton;
  