import React from "react"
import NavigationHeader from "../components/NavigationHeader/index.js"
import Footer from "../components/Footer/index.js"

const HeaderFooterLayout = ({ children }) => (
  <>
    <NavigationHeader activeTab="Home" />
    {children}
    <Footer />
  </>
)

export default HeaderFooterLayout
