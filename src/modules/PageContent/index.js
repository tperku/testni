import React from "react"
import styles from "./style.module.css"
import ImageParagraph from "../../components/ImageParagraph/index.js"

const PageContent = () => (
  <section className={styles.pageContent}>
    <ImageParagraph />
    <ImageParagraph />
  </section>
)

export default PageContent
