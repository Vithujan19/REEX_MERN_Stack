import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const ProtectedRouter = ({component, ...rest}) => {
    var RenderComponents = component;
    var currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(RenderComponents);
    return(
        <Route
            {...rest}
            render = {
                props => {
                    return currentUser ? (
                        <RenderComponents {...props} />
                    ) : (
                        <Redirect 
                            to = {{
                                pathname: '/Login'
                            }}
                        />
                    )
                }
            }
        />
    )
}

export default ProtectedRouter;