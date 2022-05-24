import React from 'react'

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