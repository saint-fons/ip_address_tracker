import React from 'react'




const Address = (props) => {

    let newAddressElement = React.createRef()

    let onAddressChange = () => {
        let text = newAddressElement.current.value
        props.updateAddress(text)
    }


    return <div>
            <div>Requested address: {props.address}</div>
            <div>
                <textarea
                    onChange={ onAddressChange }
                    value={props.remoteIP}
                    ref={newAddressElement}
                />
            </div>
    </div>
}


export default Address