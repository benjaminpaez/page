import { Grid } from "@mui/material";
import { Header } from "../../types";

export const CommonHeaders: React.FC<Header> = ({ title, description }) => {
  return (
    <Grid
      container
      mt={5}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Grid item sm={12} md={12}>
        <h1
          style={{
            textAlign: "center",
            font: "bold",
            letterSpacing: "3px",
            fontSize: "3rem",
            marginTop: '3rem'
          }}
        >
          {title}
        </h1>
      </Grid>

      <Grid item sm={12} md={12} mt={3}>
        <p style={{ textAlign: "center", margin: "5px", fontSize: "1.2rem" }}>
          {description}
        </p>
      </Grid>
    </Grid>
  );
};
