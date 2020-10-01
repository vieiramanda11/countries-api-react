import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className="alert-light">
                <h2>{alert.message}</h2>
            </div>
        )
    )
}

export default Alert;