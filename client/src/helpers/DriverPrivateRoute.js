import React from 'react'
import {Route,Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

const AdminPrivateRoute = ({component : Component, driverAuth, ...rest}) => (
    <Route 
        {...rest}
        render = {
            props => 
                driverAuth.isLogged === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
        }
    />
);

AdminPrivateRoute.propTypes = {
    driverAuth: PropTypes.object.isRequired,
}
  
const mapStateToProps = (state) => ({
    driverAuth: state.driverAuth
});

export default connect(mapStateToProps)(AdminPrivateRoute);
