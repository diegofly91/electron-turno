import { useContext } from 'react';
import { Avatar, Grid, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import { UserContext } from '@/contexts/UserContext';
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from "next/router";

const TicketExit = () => {
    const Router = useRouter();
    const { clear } = useContext(UserContext);

    return  <Grid 
                item 
                container 
                xs={12} 
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
            >
                <Grid 
                    item 
                    xs={2} 
                >
                    <IconButton 
                       onClick={()=>{
                        clear();   
                        Router.push({pathname:'/'})
                       }}
                    >
                            <Avatar sx={{bgcolor: red[500], width: 54, height: 54 }}>
                                    <ClearIcon />
                            </Avatar>
                    </IconButton>
                </Grid>
            </Grid>
}

export default TicketExit;