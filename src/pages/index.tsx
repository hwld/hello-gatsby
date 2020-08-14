import React, { useState } from "react"
import { Header } from "../components/header"
import { Link } from "gatsby"

const Home: React.FC = () => {
  const [cnt, setCnt] = useState(1)
  return (
    <div style={{ color: "purple" }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby" />
      <p>What a world.</p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt=""
        style={{ width: 400, height: 200 }}
      />
      <button
        onClick={() => {
          setCnt(cnt => cnt + 1)
        }}
      >
        {cnt}
      </button>
    </div>
  )
}

export default Home
