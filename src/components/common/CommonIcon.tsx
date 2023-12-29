import { Typography, Box, Paper } from "@mui/material";
import { Icon } from "../../types";
import styleCard from '../common/CommonIcon.module.css';

export const CommonIcon: React.FC<Icon> = ({
  icon: Icon,
  title,
  description,
}) => {
  const iconStyle: React.CSSProperties = {
    color: "#5846f9",
  };

  return (
    <Paper className={styleCard.card} elevation={2}>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Icon fontSize="large" style={iconStyle} />
      </Box>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <p style={{ textAlign: "center" }}>
        {description}
      </p>
      
    </Paper>
  );
};
