import React from "react"
import TitleImage from "../../components/TitleImage/index.js"
import InquiryBlock from "../../components/InquiryBlock/index.js"
import styles from "./style.module.css"

const TitlePage = () => (
  <section className={styles.titlePage}>
    <TitleImage />
    <InquiryBlock />
  </section>
)

export default TitlePage
