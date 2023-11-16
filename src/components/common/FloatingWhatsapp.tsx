import { Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../../main.css";

export const FloatingWhatsAppIcon = () => {
  return (
    <Fab
      className="floating-whatsapp pulse"
      href="https://api.whatsapp.com/send?phone=+543644660035&text=Hola, deseo obtener mas informacion!"
      target="_blank"
      aria-label="add"
    >
      <WhatsAppIcon color="success" fontSize="large"/>
    </Fab>
  );
};
