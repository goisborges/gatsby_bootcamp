import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


import { Link } from "gatsby"

const Contact = () => 
    (
        <Layout>
            <Seo title="Contact" />
            <div>
                
                <h1>This is my contact page</h1>
                <p>Leave your message</p>
            </div>
            <button><Link to="../">Home</Link></button>
            <button><a href="http://www.facebook.com" target="_blank" rel="noreferrer">My Facebook page</a></button>
            
        </Layout>
    )


export default Contact