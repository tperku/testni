import React from "react"
import ImagePool from "../ImagePool/index.js"
import styles from "./style.module.css"

const GalleryContainer = ({ title, start, end, isGray }) => (
  <section
    style={{ bbackgroundColor: isGray ? "#f2f2f2" : "white" }}
    className={styles.galleryContainer}
  >
    <h1>{title}</h1>
    <ImagePool start={start} end={end} />
  </section>
)

export default GalleryContainer
