// StandingsPage.js

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import capitalizeString from "../utils/strings"
import get_league_standings from '../data/views';

const header_style = {
    fontWeight: 'bold',
    backgroundColor: 'pink',
    color: '#282C34'
}
const tableStyle = {
    width: '75vw',
    margin: '0 auto'
  }

function StandingsPage(league) {

    const rows = get_league_standings(league)

    return (
        <div>
        <h1>{capitalizeString(league.league)} Standings</h1>
        <TableContainer component={Paper} style={tableStyle}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={header_style}>Team Name</TableCell>
                    <TableCell style={header_style} align="right">Points</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.team}
                    </TableCell>
                    <TableCell align="right">
                        {row.total_points}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
      );
}

export default StandingsPage;
