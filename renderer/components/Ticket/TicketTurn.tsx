import { ReactNode, useState, useContext } from 'react';
import PapperComponent from '../PapperComponent';
import { Grid, Typography, IconButton, Avatar } from '@mui/material';
import SupportIcon from '../SupportIcon';
import { User, Turn } from '@/interfaces/index';
import PrintIcon from '@mui/icons-material/Print';
import { blue } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { UserContext } from '@/contexts/UserContext'; 
type Props = {
    user: User 
  }

const TicketTurn = ({user}: Props) => {
   
    const { clear } = useContext(UserContext);
    const Router = useRouter();
    const [ printer, setPrinter] = useState(false)
    const { name, lastname } = user;
    const { payment, time, professional, consulting, id }: Turn = user.turn;

    const onClickPrinter = () => {
        setPrinter(true);
        setTimeout(()=>{
              clear();   
              Router.push({pathname:'/'});
        }, 2500)
    }
     
    return  <Grid 
                item 
                container 
                xs={12} 
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
              {!payment &&
                <PapperComponent>
                    <Typography variant="h6">Abono de Turno</Typography>
                    <br/>
                    <Typography>Hola <b> {name} {lastname}</b> </Typography>
                    <Typography>Necesitas pasar por Admisión para Pagar el Abono de tu turno</Typography>
                    <SupportIcon />
                    <Typography variant="h5">Dirijase a Admisión</Typography>
                </PapperComponent>     
              }
              {payment &&
                <PapperComponent>
                    <Typography variant="h6">Hola {name} {lastname}</Typography>
                    <br/>
                    <Typography> Tines un turno para <b>{time}</b></Typography>
                    <br />
                    <Typography variant='body1'><b>Turno:</b> # {id}</Typography>
                    <Typography variant='body1'><b>Consultorio:</b> {consulting}</Typography>
                    <Typography variant='body1'><b>Hora:</b> {time}</Typography>
                    <Typography variant='body1'><b>Profesional:</b> {professional}</Typography>
                    <br />
                    <br />
                    <Typography variant="h6">Dirijase al consultorio <b>{consulting}</b></Typography>
                    <IconButton
                      color="primary"
                      onClick={()=>onClickPrinter()}
                    >
                         <Avatar sx={{bgcolor: blue[500], width: 70, height: 70 }}>
                         {!printer?<PrintIcon  fontSize='large'/>:
                                <CircularProgress size={'large'} color="inherit" />
                         }
                         </Avatar>
                    </IconButton>
                </PapperComponent>     
              }
            </Grid>
}

export default TicketTurn;