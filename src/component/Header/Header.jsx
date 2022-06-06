import React from 'react'

function Header({ tittle, icon }) {
    return (
        <>
            <div className='header'>
                {/* header icon that can be get from props */}
                <span className="headerIcon">
                    {icon}
                </span>
                {/* header tittle that can be get from props */}
                <span className="headerTittle">
                    {tittle}
                </span>
            </div>
            <div className="headerDivider"></div>
        </>
    )
}

export default Header