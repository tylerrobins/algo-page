interface ButtonProps {
  onClick: () => void;
  className: string;
  children: React.ReactNode;
  selected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  selected,
}) => {
  const selectClass = selected ? `${className} text-green-800` : className;
  return (
    <button className={selectClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
