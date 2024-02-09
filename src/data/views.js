
let team_data = require("./teams.json")
let women_data = require("./women.json")

const key_emojis = {
    "roses":"🌹",
    "group_date_rose":"👥",
    "first_or_last_rose":"✨",
    "starts_rumor_stays":"💪",
    "went_home_on_own":"🔚"
}

const league_keys = {
    "Crawlers":["roses","group_date_rose","first_or_last_rose","starts_rumor_stays"],
    "Jobby":["roses","group_date_rose","first_or_last_rose","starts_rumor_stays","went_home_on_own"]
}

export function get_player_points(league){
    const tdr = get_team_data(league)
    const listOfDictionaries = Object.entries(tdr).flatMap(([key, values]) => values.map(v => (
        {
            contestant: v,
            team: key,
            points: calculate_contestant_points(women_data,v, league),
            display: calculate_contestant_display(women_data,v, league)
        }
    )));
    return listOfDictionaries.sort((a,b)=>b.points - a.points)
}

export default function get_league_standings(league){
    const teams = get_team_data(league)
    console.log('TEAMS')
    console.log(teams)
    const listOfDicts = Object.entries(teams).map(([outerKey, innerDict]) => ({
        team: outerKey,
        total_points: get_team_points(league, outerKey)
      }));
    return listOfDicts.sort((a,b)=>b.total_points - a.total_points)
}

function get_team_data(league){
    const team_data_reduced = team_data[league]
    return team_data_reduced
}

function calculate_contestant_display(contestant_info, v, league){
    console.log(v)
    let ci = contestant_info[v]
    let lk = league_keys[league]
    let disp = '';
    lk.forEach(item => {
        let count = ci[item] || 0; // If ci[item] is falsy, use 0
        if(count < 0){ count = 1}
        disp += key_emojis[item].repeat(count);
    });
    return disp;
}

function calculate_contestant_points(contestant_info, v, league){
    console.log('NAME')
    console.log(v)
    let ci = contestant_info[v]
    console.log('Calculating points')
    const keys = league_keys[league]
    console.log('Contestant info')
    console.log(Object.keys(contestant_info))
    console.log(ci)
    const sum = keys.reduce((total, key) => total + (ci.hasOwnProperty(key) ? ci[key] : 0), 0);

    return(sum)
}

function get_team_points(league, team){
    const tdr = get_team_data(league)
    const roster = tdr[team]
    console.log(roster)
    console.log('Getting team points!')
    const sum = roster.reduce((acc, key) => acc +
        calculate_contestant_points(
            women_data, key, league
        ), 0);
    return sum
}