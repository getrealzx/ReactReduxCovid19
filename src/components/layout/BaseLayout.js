import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseLayout = (props) => {
    return (
        <>  
            <br/>
            <Header />
                {props.children}
            <br/>
            <Footer/>
        </>
    )
}

export default BaseLayout
