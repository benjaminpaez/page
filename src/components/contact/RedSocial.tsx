import { Grid } from "@mui/material";
import { CommonHeaders } from "../common/CommonHeaders";
import { handleInstagram, handleFacebook } from "./common/handleLinks";
import insta from './img/Instagram.svg'
import face from './img/Facebook.svg';
import './redsocial.css'


export const RedSocial = () => {
  
  return (
    <Grid container style={{marginBottom: "3rem"}} >
      <Grid item md={12} >
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
          <a onClick={handleFacebook} >
            <img src={face} alt="face" className="button" />
          </a>
      
        </Grid>
        <Grid item>
          <a onClick={handleInstagram}>
            <img src={insta} alt="insta" className="button" />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};
