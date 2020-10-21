import React from "react"
import NavigationHeader from "../modules/NavigationHeader/index.js"
import Footer from "../modules/Footer/index.js"

const HeaderFooterLayout = ({ children }) => (
  <>
    <NavigationHeader activeTab="Home" />
    {children}
    <Footer />
  </>
)

export default HeaderFooterLayout
