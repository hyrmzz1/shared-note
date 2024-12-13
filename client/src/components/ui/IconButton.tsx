interface IconButtonProps {
  label: string;
  onClick: () => void;
  icon: React.ElementType;
}

const IconButton = ({ label, onClick, icon: Icon }: IconButtonProps) => {
  return (
    <button aria-label={label} onClick={onClick}>
      <Icon className="w-4 h-4" />
    </button>
  );
};

export default IconButton;
