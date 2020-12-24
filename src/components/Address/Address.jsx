import React from 'react'

const Address = (props) => {

    let newAddressElement = React.createRef()

    let onAddressChange = () => {
        let text = newAddressElement.current.value
        props.updateAddress(text)
    }

    let addAddress = () => {
        props.getAddress(props.remoteIP)
    }

    return <div>
            <div>Current IP address: {props.address}</div>
            <div>

                <textarea
                    placeholder={"Please enter requested address"}
                    onChange={ onAddressChange }
                    value={props.remoteIP}
                    ref={newAddressElement}
                />
            </div>
        <div>
            <button onClick={ addAddress }>Enter</button>
        </div>
        <div>
            Internet provider: {props.address}
        </div>
        <div>
            Country: {props.country}
        </div>
        <div>
            city: {props.city}
        </div>
    </div>
}


export default Address