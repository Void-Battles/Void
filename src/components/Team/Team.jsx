import React from 'react'
import { PageContainer } from '../../GlobalStyles'
import TeamHeader from './TeamHeader'
import TeamRanks from './TeamRanks'
import TeamRoster from './TeamRoster'
import TeamMatches from './TeamMatches'
import TeamTournaments from './TeamTournaments'
import { Context } from '../../ContextAPI'

class Team extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    componentDidMount() {
        this.props.setHeaderTab('my-team')
    }

    render() {
        return (
            <PageContainer>
                <TeamHeader />
                <TeamRanks />
                <TeamRoster/>
                <TeamMatches />
                <TeamTournaments />
            </PageContainer>
        )
    }
}

export default () => <Context.Consumer>{context => <Team setHeaderTab={context.setHeaderTab}/>}</Context.Consumer>