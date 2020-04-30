import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import { makeStyles } from "@material-ui/core/styles"

//Components Material UI
import { Grid, FormGroup, FormControl, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core'
//import {CheckBoxOutlineBlankIcon, CheckBoxIcon} from '@material-ui/icons'

import theme from './theme'

const useStyles = makeStyles((theme) => ({
    form:{
        backgroundColor: "#001848",
        borderRadius : 4,
        padding:"3vh",
        margin:"10vh"    
    },
    input:{
        backgroundColor: "#0d3976"
    },
    button:{
        backgroundColor: "#2f90ef"
    },
    check:{
        color: "#fff"
    }
}))

const Login = () => {

    const classes = useStyles()

    const [state, setState] = useState({checkedA: true,})

    return(
        <ThemeProvider theme={theme}>
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
            </Grid>
        </ThemeProvider>
    )
}

export default Login;