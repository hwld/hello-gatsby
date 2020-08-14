import React, { useState } from "react"
import { Header } from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Home: React.FC = () => {
  return (
    <Layout>
      <Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt=""
        style={{ width: 400, height: 200 }}
      />
    </Layout>
  )
}

export default Home
