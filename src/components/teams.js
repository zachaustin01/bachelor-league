import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function add_roses(s,roses){
  return s + " " + "🌹".repeat(roses)
}

function load_data(league){
    let team_data = require('../data/teams.json')
    let women_data = require('../data/women.json')
    let team_data_reduced = team_data[league]
    console.log(league)

    let tableRows = [];

    for (let leader in team_data_reduced) {
        let contestants = team_data_reduced[leader];
        console.log(contestants)
        let row = {
            "Name": leader,
            "Contestant1": add_roses(contestants[0], women_data[contestants[0]].roses),
            "C1_Elim": women_data[contestants[0]].Eliminated,
            "Contestant2": add_roses(contestants[1], women_data[contestants[1]].roses),
            "C2_Elim": women_data[contestants[1]].Eliminated,
            "Contestant3": add_roses(contestants[2], women_data[contestants[2]].roses),
            "C3_Elim": women_data[contestants[2]].Eliminated
          };
        console.log(row)
        tableRows.push(row);
    }

    function getColorFromBoolean(booleanString) {
      return booleanString.toLowerCase() === 'false' ? 'lightgreen' : '#282C34';
    }

    function createData(name, contestant1, c1_elim, contestant2, c2_elim, contestant3, c3_elim) {
      c1_elim = getColorFromBoolean(c1_elim)
      c2_elim = getColorFromBoolean(c2_elim)
      c3_elim = getColorFromBoolean(c3_elim)
    return {
      name,
      contestant1,
      c1_elim,
      contestant2,
      c2_elim,
      contestant3,
      c3_elim
    }}

    const rows = tableRows.map((x) => createData(
        x["Name"],
        x["Contestant1"],
        x["C1_Elim"],
        x["Contestant2"],
        x["C2_Elim"],
        x["Contestant3"],
        x["C3_Elim"]
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
              <TableCell align="right" style={{
                backgroundColor:row.c1_elim,
                color:row.c1_elim !== 'lightgreen' ? 'pink' : 'black'
                }}>{row.contestant1} </TableCell>
              <TableCell align="right" style={{
                backgroundColor:row.c2_elim,
                color:row.c2_elim !== 'lightgreen' ? 'pink' : 'black'
                }}>{row.contestant2}</TableCell>
              <TableCell align="right" style={{
                backgroundColor:row.c3_elim,
                color:row.c3_elim !== 'lightgreen' ? 'pink' : 'black'
                }}>{row.contestant3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}