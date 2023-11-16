import { Grid } from "@mui/material";
import { CommonIcon } from "../common/CommonIcon";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { CommonHeaders } from "../common/CommonHeaders";

export const Services: React.FC = () => {
  return (
    <>
      <CommonHeaders
        title="SERVICIOS"
        description="Te ofrecemos una serie de servicios para brindar una experiencia completa y satisfactoria a nuestros clientes"
      />
      <Grid
        container
        mt={5}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12} md={3}>
          <CommonIcon
            icon={DesignServicesOutlinedIcon}
            title="Asesoramiento en diseño"
            description="Te ayudamos a elegir las baldosas y revestimientos adecuados a tus preferencias estéticas y a la funcionalidad de tus proyectos"
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <CommonIcon
            icon={HandymanOutlinedIcon}
            title="Servicios de instalación"
            description="Si necesitas colocar nuestros productos en una habitación pequeña o en un proyecto a gran escala, podemos encargarnos de todo el proceso de instalación"
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <CommonIcon
            icon={LocalShippingOutlinedIcon}
            title="Entrega a domicilio"
            description="Facilitamos el proceso de adquisición de baldosas y revestimientos al ofrecer servicios de entrega a domicilio"
          />
        </Grid>
      </Grid>
    </>
  );
};
