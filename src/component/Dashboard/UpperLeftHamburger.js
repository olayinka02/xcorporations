import React from "react";
import { Image} from 'react-bootstrap';
import Hamburger from '../Assets/Hamburger.svg';




function UpperLeftHamburger() {
    return (
        <div>
            <Image src={Hamburger} fluid alt="..." />
        </div>
    )
}
export default UpperLeftHamburger;