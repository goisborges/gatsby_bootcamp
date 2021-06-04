import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"


const Strapiblog = () => {
    
   
    return (
        
        <Layout>
            <div>
                <h1>Strapi Blog</h1>
                <p>dynamic pages being built using a Javascript template and information retrieved from Strapi CMS </p>
            </div>
              
        </Layout>
    )
}


export default Strapiblog