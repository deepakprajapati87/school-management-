import { Button } from "@mui/material"
import Admin from '../../assets/img/admin.jpg'
import { useState } from "react"
export const AccountMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="accountMenu">
                <Button className="dropdown-toggle" type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={toggleMenu}>

                    {/* Profile image */}
                    
                    <img src={Admin} alt="" />
                    <span className="item-title">Stevne Zone <br /> <span className="item-title2">Admin</span></span>
                </Button>

                {/* Dropdown menu */}

                <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                   
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div>
        </>
    )
}