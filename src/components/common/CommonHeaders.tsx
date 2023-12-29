import { Grid } from "@mui/material";
import { Header } from "../../types";

export const CommonHeaders: React.FC<Header> = ({ title, description }) => {
  return (
    <Grid
      container
      mt={5}
      md={12}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      display="flex"
      maxWidth="90%"
    >
      <Grid item sm={12} md={12}>
        <h1
          style={{
            textAlign: "center",
            font: "bold",
            letterSpacing: "3px",
            fontSize: "3rem",
            marginTop: '2rem',
            marginLeft: '2rem',
            marginRight: '2rem'
          }}
        >
          {title}
        </h1>
      </Grid>

      <Grid item sm={12} md={12} mt={3} justifyContent="center" alignItems="center" >
        <p style={{ textAlign: "center", margin: "15px", fontSize: "1.2rem"}}>
          {description}
        </p>
      </Grid>
    </Grid>
  );
};
