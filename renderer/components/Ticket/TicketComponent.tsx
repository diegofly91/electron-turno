import { useContext, useState, useEffect } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { findData } from '@/utils/sample-api';
import { Grid } from '@mui/material';
import TicketExit from './TicketExit';
import TicketNotFount from './TicketNotFount';
import TicketNotTurn from './TicketNotTurn';
import TicketTurn from './TicketTurn';
import { User } from '@/interfaces/index';

const DocumentComponent = () => {

    const { typeDocument, document } = useContext(UserContext);
    const [user, setUser] = useState(null);
  
    useEffect(()=>{
        if(typeDocument && document){
          searchUser()
        }
    },[typeDocument, document]);
  
    const searchUser = async () =>{
        const data: User = await findData(document,typeDocument)
        setUser(data?data:null)
    }

    return <Grid 
              container 
              key="TicketComponent"
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
           >
               { user == null &&  <TicketNotFount />}
               { user != null && !user.turn &&  <TicketNotTurn user={user} /> }
               { user != null && user.turn && <TicketTurn user={user}/>}
                <TicketExit />
           </Grid>
}

export default DocumentComponent;