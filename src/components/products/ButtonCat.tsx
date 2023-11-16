import { ButtonC } from "../../types"
import { Button } from '@mui/material'

export const ButtonCat: React.FC<ButtonC>  = ({name, isActive, onClick}) => {
  return (
    <Button
      variant="outlined"
      size="small"
      onClick={onClick}
      style={{
        margin: "5px",
        borderColor: isActive ? "#5846f9" : "#1976d2",
        color: isActive ? "white" : "#1976d2",
        backgroundColor: isActive ? "#5846f9" : "white",
      }}
    >
      {name}
    </Button>
  );
}
