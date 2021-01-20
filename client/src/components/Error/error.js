import React from 'react'
import { Link } from 'react-router-dom'

const error = () => {
    return (
        <div className="container">
            Error 404 Page Not Found <Link to="/"> Go Back</Link>
        </div>
    )
}

export default error
