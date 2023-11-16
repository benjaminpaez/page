import { Grid } from "@mui/material";
import { CommonHeaders } from "../common/CommonHeaders";
import { ButtonRed } from "./common/ButtonRed";
import { handleInstagram, handleFacebook } from "./common/handleLinks";
import ig from "./img/Instagram.jpg";
import fc from "./img/Facebook.jpg";

export const RedSocial = () => {
  return (
    <Grid container >
      <Grid item md={12}>
        <CommonHeaders title="REDES SOCIALES" description="" />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        wrap="wrap"
      >
        <Grid item >
          <ButtonRed  backgroundImage={ig} onClick={handleInstagram} />
        </Grid>
        <Grid item>
          <ButtonRed backgroundImage={fc} onClick={handleFacebook} />
        </Grid>
      </Grid>
    </Grid>
  );
};
