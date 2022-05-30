import { Grid } from '@mui/material';
import DocumentType from './DocumentType';
import DocumentNumber from './DocumentNumber';
import DocumentNext from './DocumentNext';

const DocumentComponent = () => {

    return <Grid 
              container 
              key="Document"
              spacing={2}
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
           >
                <DocumentType />
                <DocumentNumber />
                <DocumentNext />
           </Grid>
}

export default DocumentComponent;