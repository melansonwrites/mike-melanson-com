// Step 1: Import React
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
    <Seo title="Mike Melanson - Writer, Cyclist, Techie" />
    <StaticImage 
      src="../images/mike-melanson.jpg"
      quality={95}
      alt="A beardless (rare) Mike Melanson"
      style={{ marginBottom: `1.45rem` }}
    />
   <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>I am Mike, AKA charioteer of Mabel the dog.</p>
    </main>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage