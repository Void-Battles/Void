import React, { Component } from 'react';
import { Context } from "../../ContextAPI";
import { Redirect } from 'react-router-dom'

class AdminConsole extends Component {
    render() {
        const { isAdminLoggedIn } = this.props
        if (!isAdminLoggedIn) return <Redirect to="/admin_login" />
        return (
            <div>  
                
            </div>
        )
    }
}


export default props => <Context.Consumer>
    {context => (
        <AdminConsole
            setHeaderTab={context.setHeaderTab}
            isAdminLoggedIn={context.state.isAdminLoggedIn}
            handleAdminLogin={context.handleAdminLogin}
            {...props}
        />
    )}
</Context.Consumer>