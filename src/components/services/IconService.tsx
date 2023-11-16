import { Typography, Box, Paper } from "@mui/material";
import { Icon } from "../../types";

export const IconService: React.FC<Icon> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Paper className="card" elevation={2}>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Icon fontSize="large" />
      </Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Paper>
  );
};
