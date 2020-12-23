import React from 'react'
import {Redirect, withRouter} from "react-router";
import {compose} from "redux";
import Address from "./Address";
import connect from 'react-redux/lib/connect/connect';
import {getAddress, updateAddress} from "../../Redux/Address-reducer";


class AddressContainer extends React.Component {

    componentDidMount() {
        this.props.getAddress(this.props.remoteIP)
    }

    render() {
        return <Address
            address={this.props.address}
            remoteIP={this.props.remoteIP}
            updateAddress={this.props.updateAddress}
            getAddress={this.props.getAddress}
            isp={this.props.isp}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        address: state.AddressPage.ip,
        remoteIP: state.AddressPage.remoteIP,
        isp: state.AddressPage.isp
    }
}

export default compose(connect(mapStateToProps, {getAddress, updateAddress}))
(AddressContainer)
