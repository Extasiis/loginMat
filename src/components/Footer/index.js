import React from 'react'
import { Box } from '@material-ui/core'
import Styles from './Styles'

const Footer = () => {

  const classes = Styles()

    return(
    
      <footer className={classes.footer}>
          <Box display="flex" flexDirection="row-reverse" >
            
              <p className={classes.texto} m={0}>Cinetlify</p>
            
          </Box>
      </footer>  
    
    )
}

export default Footer;