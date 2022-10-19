import style from './Header.module.css'
import {  NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink className={style.a} to='/people'>People</NavLink>
            </div>
            <div>
                <NavLink className={style.a}  to='/films'>Films</NavLink>
            </div>
            <div>
                <NavLink className={style.a}  to='/starships'>Starships</NavLink>
            </div>
            <div>
                <NavLink className={style.a}  to='/planets'>Planets</NavLink>
            </div>
            <div>
                <NavLink className={style.a}  to='/species'>Species</NavLink>
            </div>
        </nav>
    )
}

export default Header