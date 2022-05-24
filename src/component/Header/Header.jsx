import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Header({tittle, icon}) {
    return (
        <>
        <div className='header'> 
            <span className="headerIcon">
                {icon}
            </span>
            <span className="headerTittle">
                {tittle}
            </span>
        </div>
        <div className="headerDivider"></div>
        </>
    )
}

export default Header