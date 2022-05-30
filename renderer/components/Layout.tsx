import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image';
//import styles from '@/styles/components/layout.module.css';
import { Container, Typography, Box } from '@mui/material';
import styles from '@/styles/Home.module.scss';

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.Layout}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
          <Container maxWidth="sm" >
              <Image
                src='http://pruebas.grupobasa.com.ar/images/1eeb166.png'
                alt="Picture of the author"
                width={167}
                height={50}
              />
              <Typography variant='h6'>ADMISIÓN DE TURNOS</Typography>
          </Container>
      </header>
      <Container maxWidth="sm" className={styles.main}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgb(250 250 250 / 90%)',
              padding: '20px',
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: '6px',
              boxShadow: "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px"
            }}
          >
            {children}
          </Box>
      </Container>  
      <footer className={styles.footer}>
        <Container maxWidth="sm" >
            <Typography align='center'>I'm here to stay (Footer)</Typography>
         </Container> 
      </footer>
  </div>
)

export default Layout
