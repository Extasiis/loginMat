import React from 'react'

//Components Material UI
import { Grid, FormGroup, FormControl, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core'

import Styles from './Styles'

//footer
import Footer from '../Footer'

const Login = () => {

    const classes = Styles()

    return(
        
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <FormGroup className={classes.form}>
                        <Typography gutterBottom variant="h4" component="h2" color="primary">

                            Iniciar 

                        <br/>

                            Sesion

                        </Typography>
                        <FormControl >
                            <TextField
                                id="outlined-basic"
                                bgcolor="primary"
                                color="primary"
                                label="Correo Electronico"
                                variant="outlined"
                                size="small"
                                text="primary"
                                className={classes.input} />
                            <br></br>
                            <TextField
                                id="outlined-basic"
                                bgcolor="primary"
                                color="primary"
                                text="primary"
                                label="Contraseña"
                                variant="outlined"
                                size="small"
                                className={classes.input} />
                            <br></br>
                            <Button                                 
                                variant="contained"
                                color="secondary"
                                disableElevation fullWidth>

                                Iniciar Sesion

                            </Button>
                            <br></br>
                            <Button                                 
                                variant="contained"
                                color="secondary"
                                disableElevation fullWidth>

                                Registrarse

                            </Button>
                            <FormControlLabel
                            className={classes.check}
                            value="start"
                            control={<Checkbox color="primary" />}
                            label="Recuerdame"
                            labelPlacement=""
                            />
                        </FormControl>
                        </FormGroup>
                </Grid>
                <Footer />
            </Grid>

    )
}

export default Login;