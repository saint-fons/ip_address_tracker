import React from 'react'
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import connect from 'react-redux/lib/connect/connect';
import {Redirect, withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Address from "./Address";


class AddressContainer extends React.Component {

    componentDidMount() {

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return <Address
        />
    }
}


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.address
})


export default compose(connect(mapStateToProps, {getStatus, getUserProfile, updateStatus}),
    withRouter)
(AddressContainer)
