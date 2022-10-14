import React from "react";
import { Image } from 'react-bootstrap';
import avater from '../Assets/avater.png';
import { Bell } from 'react-bootstrap-icons';

function UpperRightProfile() {
    return (

        <div style={{ float: 'right', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0 + 'px', gap: 7 + 'px', }} >
            <div style={{ width: 'auto', height: 'auto', padding: 0.6 + 'rem', backgroundColor: 'white', borderRadius: 50 + 'px', position: 'relative', }}>
                <Bell size={26} />
                <span style={{ position: 'absolute', top: 0 + 'px', right: 0 + 'px', display: 'block', backgroundColor: 'red', borderRadius: 45 + 'px', height: 20 + 'px', width: 20 + 'px', padding: 0.2 + 'rem', }} className="badge badge-light">2</span>
            </div>
            <div className="UpperRightProfileText">
                <span>Hi, Yinka</span>
            </div>
            <div>
                <Image style={{ width: 40 + 'px', height: 40 + 'px', }} roundedCircle={true} src={avater} alt="rounded" />
            </div>

        </div>
    );
}
export default UpperRightProfile;