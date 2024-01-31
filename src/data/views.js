
let team_data = require("./teams.json")
let women_data = require("./women.json")

export function get_player_points(league){
    const tdr = get_team_data(league)
    const listOfDictionaries = Object.entries(tdr).flatMap(([key, values]) => values.map(v => (
        {
            contestant: v,
            team: key,
            points: calculate_contestant_points(women_data[v]),
            display: calculate_contestant_display(women_data[v])
        }
    )));
    return listOfDictionaries.sort((a,b)=>b.points - a.points)
}

export default function get_league_standings(league){
    const teams = get_team_data(league)
    const listOfDicts = Object.entries(teams).map(([outerKey, innerDict]) => ({
        team: outerKey,
        total_points: get_team_points(league, outerKey)
      }));
    return listOfDicts.sort((a,b)=>b.total_points - a.total_points)
}

function get_team_data(league){
    const team_data_reduced = team_data[league.league]
    return team_data_reduced
}

function calculate_contestant_display(contestant_info){
    let disp = ""
    disp = disp + "🌹".repeat(contestant_info["roses"])
    return(disp)
}

function calculate_contestant_points(contestant_info){
    let points = 0
    points = points + contestant_info["roses"]
    return(points)
}

function get_team_points(league, team){
    const tdr = get_team_data(league)
    const roster = tdr[team]
    const sum = roster.reduce((acc, key) => acc +
        calculate_contestant_points(
            women_data[key]
        ), 0);
    return sum
}