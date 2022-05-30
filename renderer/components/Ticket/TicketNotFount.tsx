import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import PapperComponent from '../PapperComponent';
import { Grid, Typography } from '@mui/material';
import SupportIcon from '../SupportIcon';

const TicketNotFount = () => {

    const { document } = useContext(UserContext);

    return  <Grid 
                item 
                container 
                xs={12} 
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
               <PapperComponent>
                   <Typography variant="h5">
                       Documento no encontrado
                   </Typography> 
                   <br />
                   <br />
                   <Typography>El numero de documento <b> # {document}</b> <br /> no se encontro en los datos del sitemas </Typography>
                   <SupportIcon />
                   <Typography variant="h5">Dirijase a Admisión</Typography>
               </PapperComponent>     
            </Grid>
}

export default TicketNotFount;