import { Grid, Typography } from "@mui/material"

export const Footer = () => {

  return (
    <footer >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: 'rgb(70, 111, 245)', padding: '1rem' }}
        
      >
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Empresa Pirela. Todos los derechos reservados.
        </Typography>
      </Grid>
    </footer>
  )
}
