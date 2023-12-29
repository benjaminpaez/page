import { Typography, Box, Paper } from "@mui/material";
import styleCard from '../../common/CommonIcon.module.css';
import { ButtonL } from "../../../types";


export const ButtonLink: React.FC<ButtonL> = ({
  icon: Icon,
  title,
  description,
  onClick
}) => {
  const iconStyle: React.CSSProperties = {
    color: "#5846f9"
  }
  return (
    <button onClick={onClick} style={{marginBottom: '2rem', borderRadius: "60%"}}>
      <Paper className={styleCard.button} elevation={2} style={{cursor: 'pointer', borderRadius: "60%"}}>
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Icon fontSize="large" style={iconStyle} />
        </Box>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {description}
        </Typography>
      </Paper>
    </button>
  );
};
