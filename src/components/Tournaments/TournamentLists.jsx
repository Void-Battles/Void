import React from 'react'
import axios from 'axios'
import { backendURL } from '../../urls'
import { Link } from 'react-router-dom'
import { Context } from '../../ContextAPI'

class TournamentLists extends React.Component {
    state = { tournaments: null }
    async componentDidMount() {
        const response = await axios.get(backendURL + '/api/tournaments/getTournaments/current')
        this.setState({ tournaments: response.data })
    }

    handleRegisterTeam = async (tournament_name) => {
        // TeamId, TournamentId
        const data = {
            tournament_name,
        }
        const response = await axios.post(backendURL + '/api/tournaments/register', data).catch(err => alert(err.response.data))
        console.log(response)
    }

    render() {
        console.log(this.props, this.state)
        const { tournaments } = this.state
        return (
            <div style={{width: '100%', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#383838'}}>
                {tournaments && tournaments.map(tournament => {
                    // const isSignedUp = tournament.signed_up_teams.filter(team => team._id === this.props.team_id.team_name)
                    return <div onClick={() => this.handleRegisterTeam(tournament.tournament_name)} style={styles.tournamentContainer}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '30%'}}>
                                <h1 style={styles.title}>{tournament.tournament_name}</h1>
                                <h1 style={{textAlign: 'center', color: 'green'}}>STARTS IN: 2 DAYS(2)</h1>
                            </div>

                            <section style={styles.tournament_icons}>
                            <p style={{marginRight: 10}}>{tournament.killer}</p>
                            <div style={{display: 'flex', justifyContent: 'space-around', width: '60%'}}>
                            {tournament.survivors.map(survivor => <img style={styles.survivor_icons} src={require(`../../resources/survivors/${survivor}.png`)}/>)}
                            </div>
                            </section>

                            <h1 style={{color: 'darkgray', fontWeight: 'lighter'}}>{tournament.signed_up_teams.length} SIGNED UP</h1>

                            <section style={styles.footer}>
                                <h1 style={{margin: 'auto', color: '#9c32f7'}}>REGISTER</h1>
                            </section>
                        </div>
                })}
            </div>
        )
    }
}

const styles = {
    tournamentContainer: {
        width: 700,
        height: 260,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#262626',
        padding: '5px 5px 50px 5px',
        boxSizing: 'border-box',
        borderRadius: 5,
        position: 'relative',
        margin: '20px 0 20px 0'
    },
    title: {
        fontWeight: 'bolder',
        fontSize: 24,
        color: 'white',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    tournament_icons: {
        display: 'flex',
        width: '100%',
        height: '50%',
        justifyContent: 'space-around',
        color: 'white'
    },
    survivor_icons: {
        width: '70px',
        height: '80px'
    },
    footer: {
        width: '100%',
        display: 'flex',
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.3)',
        fontWeight: 'bolder',
        position: 'absolute',
        bottom: 0,
        borderRadius: '0 0 5px 5px'
    }
}

export default props => <Context.Consumer>{context => <TournamentLists {...props} team_id={context.state.userInfo.team_id}/>}</Context.Consumer>