import React from 'react'
import {compose} from "redux";
import Address from "./Address";
import connect from 'react-redux/lib/connect/connect';
import {getAddress, updateAddress} from "../../Redux/Address-reducer";


class AddressContainer extends React.Component {

    componentDidMount() {
        this.props.getAddress(this.props.remoteIP)
    }

    render() {
        return <div>
            <Address
                address={this.props.address}
                remoteIP={this.props.remoteIP}
                updateAddress={this.props.updateAddress}
                getAddress={this.props.getAddress}
                isp={this.props.isp}
                country={this.props.country}
                city={this.props.city}
                provider={this.props.provider}
                timezone={this.props.timezone}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        address: state.AddressPage.ip,
        remoteIP: state.AddressPage.remoteIP,
        isp: state.AddressPage.isp,
        provider: state.AddressPage.as.name,
        country: state.AddressPage.location.country,
        city: state.AddressPage.location.region,
        lat: state.AddressPage.location.lat,
        lng: state.AddressPage.location.lng,
        timezone: state.AddressPage.location.timezone
    }
}

export default compose(connect(mapStateToProps, {getAddress, updateAddress}))
(AddressContainer)
