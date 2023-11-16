import {Grid, Typography} from '@mui/material'
import logo from '../../assets/logo.png'


export const Logo = () => {
  return (
    <div>
      <Grid item container alignItems="center" m={1}>
        <Grid item>
            <img src={logo} alt="Logo" style={{ width: '60px', marginTop: '10px', margin: '5px'}} />
        </Grid>
        <Grid item style={{marginRight: 'auto'}}>
            <Typography variant='h4'>PIRELA</Typography>
            <Typography variant='body1'>diseño & construccion</Typography>
        </Grid>
      </Grid>
    </div>
  )
}
