import React, { useState } from 'react'
import UserTable from '../tables/UserTable'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import EditUserForm from '../forms/EditUserForm'

export default function ListUser(props) {
  const usersData = [
    { id: 1, name: 'diawara', username: 'Pape Ibrahima', date:new Date().getDate()+'-'+new Date().getMonth()+'-'+new Date().getFullYear()},
  ]

  const [users, setUsers] = useState(usersData)

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

  const classes = useStyles();


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


  return(

  <div className="flex-large">
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button to="/"  color="inherit" component={Link}>
              Accueil
            </Button>
            <Button to="/liste" color="inherit" component={Link}>
              Liste Etudiants
            </Button>
            <Button color="inherit" to="/aPropos" component={Link}>A Propos</Button>
          </Toolbar>
        </AppBar>
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
            <h2>Listes Etudiants</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          </div>
        )}
      </div><br/><br/>

  </div>

)
}
