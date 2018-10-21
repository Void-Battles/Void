import React from 'react'
import axios from 'axios'
import { backendURL } from '../../urls'
import { Link } from 'react-router-dom'

class TournamentLists extends React.Component {
    state = { tournaments: null }
    async componentDidMount() {
        const response = await axios.get(backendURL + '/api/tournaments/getTournaments/current')
        console.log(response)
        this.setState({ tournaments: response.data })
    }
    render() {
        const { tournaments } = this.state
        return (
            <div>
                {tournaments && tournaments.map(tournament => {
                    return <Link to={'/vb-tournament/' + tournament.tournament_name}><h1>{tournament.tournament_name}</h1></Link>
                })}
            </div>
        )
    }
}

export default TournamentLists