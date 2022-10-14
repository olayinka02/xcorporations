import React from "react";
import { Image } from 'react-bootstrap';
import avater from '../Assets/avater.png';
import { Bell } from 'react-bootstrap-icons';

function UpperRightProfile() {
    return (

        <div style={{ float: 'right', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0 + 'px', gap: 7 + 'px', }} >
            <div style={{ padding: 0.6 + 'rem', backgroundColor: 'white', borderRadius: 70 + 'px', position: 'relative', }}>
                <Bell size={20} />
                <span style={{ position: 'absolute', top: 0 + 'px', right: 0 + 'px', display: 'block', backgroundColor: 'red', borderRadius: 45 + 'px', height: 16 + 'px', width: 16 + 'px', padding: 0.2 + 'rem', }} className="badge badge-light">2</span>
            </div>
            <div className="UpperRightProfileText">
                <span>Hi, Yinka</span>
            </div>
            <div>
                <Image style={{ width: 37 + 'px', height: 37 + 'px', }} roundedCircle={true} src={avater} alt="rounded" />
            </div>

        </div>
    );
}
export default UpperRightProfile;