import { useContext } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import PapperComponent from '../PapperComponent';
import { dataTypeDocuments } from '@/utils/type-document';
import { UserContext } from '@/contexts/UserContext';

const DocumentType = () => {
    const { typeDocument, setTypeDocument } = useContext(UserContext);
    return   <Grid 
                item 
                xs={12}
                md={5}
                key="DocumentType"
                container 
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                >
                <Grid item xs={12} key="DocuemntTitle">
                        <PapperComponent>
                                <Typography component="div" variant="h6">Tipo de Documento</Typography>
                        </PapperComponent> 
                </Grid>
                {dataTypeDocuments.map((item)=>{
                    return<Grid item xs={12} key={"DocumentypeButtom"+item.id}>
                                <Button 
                                   onClick={()=>setTypeDocument(item.id) }
                                    key={'buttom'+item.id}
                                    variant="contained" 
                                    fullWidth={true}
                                    disabled={(item.id==typeDocument)?true:false}
                                >
                                    {item.name}
                                </Button>
                            </Grid>
                })}
            </Grid>

}

export default DocumentType;