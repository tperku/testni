import React from "react"

import ContactBar from "../components/contactBar/index.js"
import NavigationHeader from "../components/NavigationHeader/index.js"
import Footer from "../components/Footer/index.js"

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab = "Home" />
    <Footer/>
  </main>
)

export default IndexPage
