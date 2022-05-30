import { ReactNode } from 'react';
import PapperComponent from '../PapperComponent';
import { Grid, Typography } from '@mui/material';
import SupportIcon from '../SupportIcon';
import { User } from '@/interfaces/index';

type Props = {
    user: User
  }


const TicketNotTurn = ({user}: Props) => {

    const { name, lastname, document } = user;
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
                      No tienes Turnos Asignados
                   </Typography> 
                   <br />
                   <br />
                   <Typography>Hola <b>{name} {lastname},</b> no encontramos tunos en este momento con tu documento # <b>{document}</b></Typography>
                   <SupportIcon />
                   <Typography>si tienes dudas</Typography>
                   <Typography variant="h5">Dirijace a Admisión</Typography>
               </PapperComponent>     
            </Grid>
}

export default TicketNotTurn;