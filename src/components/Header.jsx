import React from 'react'

const Header = () => {
  return (
    <>
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/icons/bootstrap.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                    </a>
                    <div className='container'>
                        Gully Cricket Scoreboard
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Header