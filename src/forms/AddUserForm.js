import React, { useState } from 'react'
////////////////////////////////
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




const AddUserForm = props => {


  const classes = useStyles();

  const initialFormState = { id: null, name: '', username: '' ,date:'', adresse: ''}
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value} = event.target
    setUser({ ...user, [name]: value})
  }

  return (


    <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Ajouter Etudiants
    </Typography>
    <form className={classes.form}
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username || !user.date) return

        props.addUser(user)
        setUser(initialFormState)
      }}
      >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="fname"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Nom"
            autoFocus
            value={user.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Prenom"
            name="username"
            autoComplete="lname"
            value={user.username}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="adresse"
            label="Addresse"
            name="adresse"
            value={user.adresse}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input type="date" name="date" value={user.date} onChange={handleInputChange} />

        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Ajouter Etudiant
      </Button>

    </form>
  </div>

</Container>



  )
}

export default AddUserForm
