import { CommonHeaders } from "../common/CommonHeaders";
import { Grid } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { ButtonLink } from "./common/ButtonLink";
import { RedSocial } from "./RedSocial";
import { handleCall, handleMapClick, handleEmail } from "./common/handleLinks";

export const Contact = () => {
  return (
    <div style={{ backgroundColor: "white"}}>
      <CommonHeaders
        title="CONTACTO"
        description="Puedes contactarnos de varias formas para obtener más información sobre nuestros productos y servicios, realizar consultas o realizar una compra"
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={3}
        wrap="wrap"
      >
        <Grid item sm={12} md={3}>
          <ButtonLink
            icon={LocationOnOutlinedIcon}
            title="Direccion"
            description=""
            onClick={handleMapClick}
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <ButtonLink
            icon={EmailOutlinedIcon}
            title="Correo electronico"
            description=""
            onClick={handleEmail}
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <ButtonLink
            icon={LocalPhoneOutlinedIcon}
            title="Llamada telefonica"
            description=""
            onClick={handleCall}
          />
        </Grid>
      </Grid>
      <RedSocial />
    </div>
  );
};
