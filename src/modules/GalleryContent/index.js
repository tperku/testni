import React from "react"
import GalleryContainer from "../../components/GalleryContainer/index.js"
import styles from "./style.module.css"

const GalleryContent = () => (
  <main className={styles.galleryContent}>
    <GalleryContainer title="Amazing exterior" />
    <GalleryContainer title="Relaxing sauna" />
    <GalleryContainer title="Modern interior" />
  </main>
)

export default GalleryContent
