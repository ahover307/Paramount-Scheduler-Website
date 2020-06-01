import React from 'react'

const SignedOutLinks = () => {
    return (
        <ul className={'right'}>
            <li><a to={'/login'}>Log In Staff</a></li>
        </ul>
    )
};

export default SignedOutLinks