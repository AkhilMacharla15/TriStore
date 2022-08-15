import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import "./Contact.scss"


const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact_container">
                <p className="h1">CONTACT US</p>
                {/* <p className="email">Email Us</p> */}
                <p className="customercare">We’re here to help! E-mail our Online Customer Service Team, 
                and we will review and respond to your email as soon as possible.</p>
                
                <p className="eaddress">contact@tristore.com</p>


            </div>
            <Footer />
        </>
    )
}

export default Contact