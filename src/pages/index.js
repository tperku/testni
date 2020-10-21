import React from "react"

import ContactBar from "../components/contactBar/index.js"
import NavigationHeader from "../components/NavigationHeader/index.js"

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab = "Home" />
  </main>
)

export default IndexPage
