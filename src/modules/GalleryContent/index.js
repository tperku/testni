import React from "react"
import GalleryContainer from "../../components/GalleryContainer/index.js"
import styles from "./style.module.css"

const GalleryContent = () => (
  <main className={styles.galleryContent}>
    <GalleryContainer title="Amazing exterior" start={0} end={4} isGray />
    <GalleryContainer title="Relaxing sauna" start={4} end={8} />
    <GalleryContainer title="Modern interior" start={8} end={24} isGray />
  </main>
)

export default GalleryContent
