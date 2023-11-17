
interface ButtonR {
  backgroundImage: string
  borderColor: string
  onClick: () => void;
}

export const ButtonRed: React.FC<ButtonR> = ({ backgroundImage,borderColor, onClick }) => {
  const buttonStyle: React.CSSProperties = {
    width: '300px',
    height: '270px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `2px solid ${borderColor}` ,
    cursor: 'pointer',
    borderImageSlice: '2',
  }

  return <button style={buttonStyle} onClick={onClick}></button>;
};

