import React from 'react'
import {Redirect, withRouter} from "react-router";
import {compose} from "redux";
import Address from "./Address";
import connect from 'react-redux/lib/connect/connect';
import {getAddress} from "../../Redux/Address-reducer";


class AddressContainer extends React.Component {

    componentDidMount() {
        this.props.getAddress()
    }

    render() {
        return <Address
            address={this.props.address}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        address: state.AddressPage.address
    }
}

export default compose(connect(mapStateToProps, {getAddress}))
(AddressContainer)