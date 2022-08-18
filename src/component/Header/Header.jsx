import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { setOffcanvasState, useTweetDispatch, useTweetState } from '../../context/TweetContext'

function Header({ tittle, icon }) {

    const dispatchOffcanvas = useTweetDispatch()
    const { offcanvasState } = useTweetState()

    return (
        <>
            <div className='header'>
                {/* header icon that can be get from props */}
                <span className="hamburger" onClick={() => {
                    setOffcanvasState(dispatchOffcanvas, !offcanvasState)
                }}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
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