import React from "react"
import { NavLink } from "react-router-dom"
import '../style/Navigation.css'

const Navigation = () => {
    return (
        <>
        
            <nav> <h1> Livre Troc </h1>
                <ul>
                    <li>
                        <NavLink to="/">Livre Troc </NavLink>
                    </li>
                    <li>
                        <NavLink to="/books:id">Page des livres</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inscription">Inscriez-vous</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;