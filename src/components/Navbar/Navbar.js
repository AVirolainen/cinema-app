import React, {useState} from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import {NavbarData} from "./NavbarData"

import { IconContext } from "react-icons";

import "./Navbar.css"

const Navbar =()=>{
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=>{
        setSidebar(sidebar => !sidebar)
    }

    return(
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <IconContext.Provider value={{ color: "white" }}>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </IconContext.Provider>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <IconContext.Provider value={{ color: "white" }}>
                                <AiIcons.AiOutlineClose />
                            </IconContext.Provider>
                        </Link>
                    </li>
                    {NavbarData.map((item, index)=>{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link> 
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar