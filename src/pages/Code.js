import React from 'react';
import code from '../assets/user.gcode';

const Code = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href={code} download>Download file, not malicious trust us</a>
        </div>
    );
};

export default Code;