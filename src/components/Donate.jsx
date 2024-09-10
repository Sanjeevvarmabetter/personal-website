import React from "react";

const Donate = () => {
    const path_qr = "./qr_pic.jpeg";

    return (
        
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>


            <h1> Donate money to reduce hunger in India</h1>
            <img src={path_qr} alt="qr code" style={{ width: '300px', height: '300px' }}/> 


            <p>Lets wake up</p>


        </div>
    );
};


export default Donate;