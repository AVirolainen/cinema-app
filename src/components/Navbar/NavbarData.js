import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const NavbarData = [{
    title: "Зараз в кіно", 
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: "Скоро в кіно", 
    path: "/soon",
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title: "Акції", 
    path: "/discount",
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
},
{
    title: "Про нас", 
    path: "/about",
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
},

]
