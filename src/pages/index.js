import React from "react"
import HeaderFooter from "../layouts/headerFooter.js"
import TitlePage from "../modules/TitlePage/index.js"
import PageContent from "../modules/PageContent/index.js"

const IndexPage = () => (
  <HeaderFooter>
    <TitlePage />
    <PageContent />
  </HeaderFooter>
)

export default IndexPage
