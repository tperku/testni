import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter.js"
import SeparatorBar from "../modules/SeparatorBar/index.js"
import GalleryContent from "../modules/GalleryContent/index.js"

const PhotoGallery = () => (
  <HeaderFooterLayout activeTab="Photo Gallery">
    <SeparatorBar text="Photo Gallery" />
    <GalleryContent />
  </HeaderFooterLayout>
)

export default PhotoGallery
