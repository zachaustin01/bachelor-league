// Teams.js

import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { get_player_points } from "../data/views";

import { useLeague } from '../leagueContext';
import { useNavigate } from 'react-router-dom';
import { allowedLeagues } from '../data/allowed_leagues';

const header_style = {
    fontWeight: 'bold',
    backgroundColor: 'pink',
    color: '#282C34'
}
const tableStyle = {
    width: '85vw',
    margin: '0 auto'
  }

function TeamsPage() {

    const { leagueName } = useLeague();
    const navigate = useNavigate();
    let league = leagueName;
    console.log('LEAGUE')
    console.log(league)

    // Check if the leagueName is not set or not included in the allowedLeagues array
    useEffect(() => {
        // Check if the leagueName is not set or not included in the allowedLeagues array
        if (!leagueName || !allowedLeagues.includes(leagueName)) {
          navigate('/');
        }
      }, [leagueName, navigate]);

    if (!leagueName || !allowedLeagues.includes(leagueName)) {
    return null; // You can also return a loading indicator or message here if needed
    }

    const contestants = get_player_points(league)
    const rows = contestants
    return(
        <>
            <h1>Contestants</h1>
            <TableContainer component={Paper} style={tableStyle}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={header_style}>Contestant</TableCell>
                    <TableCell style={header_style}>Team Name</TableCell>
                    <TableCell style={header_style}>Points</TableCell>
                    <TableCell style={header_style}>Display</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.contestant}
                    </TableCell>
                    <TableCell align="right">
                        {row.team}
                    </TableCell>
                    <TableCell align="right">
                        {row.points}
                    </TableCell>
                    <TableCell align="right">
                        {row.display}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    )
}

export default TeamsPage;
