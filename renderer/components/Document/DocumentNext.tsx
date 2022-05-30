import { useContext } from 'react';
import { Avatar, Grid, IconButton } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { UserContext } from '@/contexts/UserContext';
import Link from 'next/link'

const DocumentNext = () => {

    const { typeDocument, document } = useContext(UserContext);

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
                        disabled={!(typeDocument&&(document.length>=8))}
                    >
                        <Link  href="/ticket">
                            <Avatar sx={{ bgcolor: (typeDocument&&(document.length>=8))?blue[600]:grey[400], width: 54, height: 54 }}>
                                    <ArrowRightAltIcon />
                            </Avatar>
                        </Link>
                    </IconButton>
                </Grid>
            </Grid>
}

export default DocumentNext;