
import { useContext } from 'react';
import { Avatar, Grid, Typography, Button, IconButton } from '@mui/material';
import { blue, red, grey } from '@mui/material/colors';
import FullWidthTextField from './DocumentValue';
import PapperComponent from '../PapperComponent';
import { dataButtons } from '@/utils/buttons';
import ClearIcon from '@mui/icons-material/Clear';
import { UserContext } from '@/contexts/UserContext';


const DocumentNumber = () => {

    const { typeDocument, updateDocument, clearDocument } = useContext(UserContext);

   return  <Grid 
            item 
            container 
            xs={12}
            md={7}
            key="DocumentNumber"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            >
            <Grid item xs={12}>
                    <PapperComponent>
                            <Typography component="div" variant="h6">Numero de Documento</Typography>
                    </PapperComponent> 
            </Grid>
            <Grid item xs={12}>
                <PapperComponent>
                    <FullWidthTextField />
                </PapperComponent>
            </Grid>
            {dataButtons.map((item)=>{
                return<Grid 
                            item 
                            xs={4} 
                            container
                            key={"DocumentNumber"+item.id}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <IconButton
                                key={"buttom"+item.id} 
                                disabled={ typeDocument?false:true }
                                onClick={()=>updateDocument(item.value)}
                            >
                                <Avatar sx={{ bgcolor: typeDocument?blue[600]:grey[400], width: 54, height: 54 }}>
                                    {item.value}
                                </Avatar>
                            </IconButton>
                    </Grid>
            })}
            <Grid 
                item 
                xs={4} 
                container
                key={"DocumentNumberClear"}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                    <IconButton
                      onClick={()=>clearDocument()}
                    >
                        <Avatar sx={{ bgcolor: red[500], width: 54, height: 54 }}>
                                <ClearIcon />
                        </Avatar>
                    </IconButton>
            </Grid>
        </Grid>      
}

export default DocumentNumber;