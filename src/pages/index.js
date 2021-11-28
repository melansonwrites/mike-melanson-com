import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Mike Melanson - Writer, Cyclist, Techie" />
    <StaticImage 
      src="../images/mike-melanson.jpg"
      quality={95}
      alt="A beardless (rare) Mike Melanson"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Howdy, folks!</h1>
    <Link to="/about">About</Link>
    <p>This is the landing page for Mike Melanson, a guy who writes about technology and is learning about how to do all of this without ever getting a "server" like in the old days...</p>
    <p>
    <a class="twitter-timeline" href="https://twitter.com/rwwmike?ref_src=twsrc%5Etfw">Tweets by rwwmike</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </p>
  </Layout>
)

export default IndexPage
