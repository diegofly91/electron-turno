import { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserContext } from '@/contexts/UserContext';

const FullWidthTextField = () => {
  const { typeDocument, document, setDocument } = useContext(UserContext);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth  id="fullWidth"  value={`# ${document}`}/>
    </Box>
  );
}

export default FullWidthTextField;