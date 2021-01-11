import React from 'react'
import "./../../App.css"

const Address = (props) => {

    let newAddressElement = React.createRef()

    let onAddressChange = () => {
        let text = newAddressElement.current.value
        props.updateAddress(text)
    }

    let addAddress = () => {
        props.getAddress(props.remoteIP)
    }

    return <div className={"headerAddressInfo"}>
        <div className={"currentAddress"}>Current IP address: {props.address}</div>

        <div className={"enterAddress"}>

                <textarea
                    className={"textAreaAddress"}
                    placeholder={"Enter address"}
                    onChange={onAddressChange}
                    value={props.remoteIP}
                    ref={newAddressElement}
                />
            <div>
                <button className={"buttonAreaAddress"} onClick={addAddress}>></button>
            </div>
        </div>

        <div className={"metaAddressData"}>
            <div className={"metaAddressDataContainer"}>
                <div className={"metaAddressInfo"}>
                    IP ADDRESS
                </div>
                <div className={"metaAddressText"}>
                    {props.address}
                </div>
            </div>

            <div className={"metaAddressDataContainer"}>
                <div className={"metaAddressInfo"}>
                    location
                </div>
                <div className={"metaAddressText"}>
                    {props.city}
                </div>
            </div>

            <div className={"metaAddressDataContainer"}>
                <div className={"metaAddressInfo"}>
                    TIMEZONE
                </div>
                <div className={"metaAddressText"}>
                    {props.timezone}
                </div>
            </div>

            <div className={"metaAddressDataContainer"}>
                <div className={"metaAddressInfo"}>
                    Internet provider
                </div>
                <div className={"metaAddressText"}>
                    {props.provider}
                </div>
            </div>

        </div>

    </div>
}


export default Address