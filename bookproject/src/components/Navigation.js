import { NavLink } from "react-router-dom";



const Navigation = () => {
    return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/homepage">Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cgu">CGU</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookpage">Bookpage</NavLink>
                    </li>
                    


                </ul>
            </nav>
    )
}

export default Navigation;