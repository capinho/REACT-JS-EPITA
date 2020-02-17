import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import UserTable from '../tables/UserTable'
import AddUserForm from '../forms/AddUserForm'
import EditUserForm from '../forms/EditUserForm'
//////////////////////////////////////////////////


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//////////////////////////////////////////////////////

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Pape Ibrahima diawara
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
////////////////////////////////////////////////////////


function HomePage(){

  const usersData = [
     { id: 1, name: 'diawara', username: 'Pape Ibrahima', date:new Date().getDate()+'-'+new Date().getMonth()+'-'+new Date().getFullYear(),adresse:'POINT E'},

  ]

  const classes = useStyles();


  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  console.log(users)


  const deleteUser = id => {
  setUsers(users.filter(user => user.id !== id))
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '', date: '', adresse: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username, date:user.date, adresse:user.adresse})
  }

  const updateUser = (id, updatedUser) => {
  setEditing(false)

  setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }


  return (
    <div className="container">
      <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button to="/" color="inherit" component={Link}>
                Accueil
              </Button>
              <Button to="/liste" color="inherit" component={Link}>
                Liste Etudiants
              </Button>
              <Button color="inherit" to="/aPropos" component={Link}>A Propos</Button>
            </Toolbar>
          </AppBar>
        </div>

      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Modifier Etudiants</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>Listes Etudiants</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>

        </div>
      </div>


      <Box mt={5}>
        <Copyright />
      </Box>

    </div>






  )
}

export default HomePage
