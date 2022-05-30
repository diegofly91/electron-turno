import React, { ReactNode } from 'react'
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
type Props = {
    children: ReactNode
  }

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop: 5,
    color: theme.palette.text.secondary,
}));

const PapperComponent = ({ children }: Props) => {
    return (
      <Item>
        {children}
      </Item>
    );
  }
  
  export default PapperComponent;