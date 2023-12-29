import { Grid } from "@mui/material";
import styles from "./Startpage.module.css";
import portada from "./front.jpg";

export const StartPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={0.5} mt={1}>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
          className={styles.titles}
          direction="column"
          spacing={4}
        >
          <header className="container-tex">
            <h2 className={styles.font1}>CREANDO </h2>
            <h2 className={styles.font1}>ESPACIOS</h2>
            <h2 className={styles.font1}>DURADEROS</h2>
          </header>

          <main>
            <h5 className={styles.font2} style={{ marginBottom: "6px" }}>
              Te ofrecemos productos para ambientar tus espacios interiores y
              exteriores
            </h5>
          </main>
        </Grid>

        <Grid item xs={12} md={6}>
          <>
            <img src={portada} alt="back" className={styles.image} />
          </>
        </Grid>
      </Grid>
    </div>
  );
};
