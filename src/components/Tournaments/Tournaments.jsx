import React from 'react'
import axios from 'axios'
import { backendURL } from '../../urls'

class Tournaments extends React.Component {
  constructor() {
    super()

    this.state = {
      tournamentData: []
    }
  }

  componentDidMount() {
    axios.get(`${backendURL}/api/tournaments/allTournaments`).then(response => {
      console.log(response.data)
      this.setState({ tournamentData: response.data })
    })
  }
  render() {
    this.state.tournamentData &&
      this.state.tournamentData.map((tournament, i) => {
          console.log('TEST', tournament)
        return (
          <div key={i}>
            <section>
              <h1>{tournament.map}</h1>
            </section>

            <section>
              <h1>{tournament.killer}</h1>
            </section>

            <section>
              <h1>{tournament.survivors}</h1>
            </section>
          </div>
        )
      })
    return <div />
  }
}

export default Tournaments
