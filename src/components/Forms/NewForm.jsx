import React from "react"
import {Form, Field} from 'react-final-form'
import Styles from './Styles'
import "./../../App.css"









const NewForm = (props) => {

    let ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/


    let remoteIP = props.remoteIP

    const ipValue = value => ( value.match(ipFormat) ? updateAddress(value) : 'Invalid address' )
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)
    const required = value => (value ? undefined : 'Required')


    let updateAddress = (value) => {
        props.updateAddress(value)
    }


    let addAddress = (remoteIP) => {
        props.getAddress(remoteIP)
    }

    const onSubmit = async values => {
        addAddress()
        console.log(values)
    }


    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit,
                             form,
                             submitting,
                             pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="address"
                            validate={composeValidators(required, ipValue)}
                        >
                            {({ input, meta }) => (
                                <div>
                                    <label>Enter required address </label>
                                    <input {...input} type="text" placeholder="Address" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit"
                                    onClick={addAddress(remoteIP)}
                                    disabled={submitting}
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </Styles>
    )
}

export default NewForm