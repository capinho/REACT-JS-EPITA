import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UserTable = props => (
  <TableContainer component={Paper}>

    <Table className={useStyles().table} aria-label="simple table">
      <TableHead>
      <TableRow>
        <TableCell align="right">Nom</TableCell>
        <TableCell align="right">Prenom</TableCell>
        <TableCell align="right" id="date">Date</TableCell>
        <TableCell align="right" id="adresse">Adresse</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <TableRow key={user.id}>
            <TableCell align="right">{user.name}</TableCell>
            <TableCell align="right">{user.username}</TableCell>
            <TableCell align="right" id={'date'+ user.id}>{user.date}</TableCell>
            <TableCell align="right" id={"adresse"+user.id}>{user.adresse}</TableCell>
            <TableCell align="right">
              <Button variant="contained" color="primary"
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Modifier
              </Button>
              <Button  variant="contained" color="secondary" onClick={() => props.deleteUser(user.id)} className="button muted-button">
                Supprimer
              </Button>


            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell align="center">Pas d'Etudiants</TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
</TableContainer>

)

export default UserTable
