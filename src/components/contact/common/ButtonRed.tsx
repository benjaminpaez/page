
interface ButtonR {
  backgroundImage: string;
  onClick: () => void;
}

export const ButtonRed: React.FC<ButtonR> = ({ backgroundImage, onClick }) => {
  const buttonStyle: React.CSSProperties = {
    width: '300px',
    height: '270px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={buttonStyle} onClick={onClick}></button>;
};

