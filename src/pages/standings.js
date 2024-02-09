// StandingsPage.js

import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import capitalizeString from "../utils/strings"
import get_league_standings from '../data/views';

import { useLeague } from '../leagueContext';
import { useNavigate } from 'react-router-dom';
import { allowedLeagues } from '../data/allowed_leagues';

const header_style = {
    fontWeight: 'bold',
    backgroundColor: 'pink',
    color: '#282C34'
}
const tableStyle = {
    width: '75vw',
    margin: '0 auto'
  }

function StandingsPage() {

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

    const rows = get_league_standings(league)

    return (
        <div>
        <h1>{capitalizeString(league)} Standings</h1>
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
