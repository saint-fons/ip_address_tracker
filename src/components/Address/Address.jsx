import React from 'react'
import "./../../App.css"
import NewForm from "../Forms/NewForm";

const Address = (props) => {

    return <div className={"headerAddressInfo"}>
        <div className={"currentAddress"}>Required IP address: {props.address}</div>
        <div className={"EnterIpAddressContainer"}>
            <NewForm getAddress={props.getAddress}
                     updateAddress={props.updateAddress}
                     remoteIP={props.remoteIP}
            />
        </div>
        {/*<div className={"enterAddress"}>

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
        </div>*/}

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