import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function load_data(league){
    let team_data = require('../data/teams.json')
    let team_data_reduced = team_data[league]

    let tableRows = [];

    for (let leader in team_data_reduced) {
        let contestants = team_data_reduced[leader];
        let row = {
            "Name": leader,
            "Contestant1": contestants[0],
            "Contestant2": contestants[1],
            "Contestant3": contestants[2]
        };
        tableRows.push(row);
    }

    function createData(name, contestant1, contestant2, contestant3) {
    return {name, contestant1, contestant2, contestant3 };
    }

    const rows = tableRows.map((x) => createData(
        x["Name"],x["Contestant1"],x["Contestant2"],x["Contestant3"]
    ));
    return rows
}

const header_style = {
    fontWeight: 'bold',
    backgroundColor: 'pink',
    color: '#282C34'
}
const tableStyle = {
    width: '75%',
    margin: '0 auto'
  }

export default function BasicTable(league) {
  const rows = load_data(league)
  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={header_style}>Team Name</TableCell>
            <TableCell style={header_style} align="right">Contestant 1</TableCell>
            <TableCell style={header_style} align="right">Contestant 2</TableCell>
            <TableCell style={header_style} align="right">Contestant 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.contestant1}</TableCell>
              <TableCell align="right">{row.contestant2}</TableCell>
              <TableCell align="right">{row.contestant3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}