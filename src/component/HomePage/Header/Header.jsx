import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className='header'> 
            <span className="homeIcon">
                <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="homeTittle">
                خانه
            </span>
        </div>
    )
}

export default Header