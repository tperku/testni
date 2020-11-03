import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter.js"
import SeparatorBar from "../modules/SeparatorBar/index.js"
import ContactForm from "../modules/ContactForm/index.js"

const ContactPage = () => (
  <HeaderFooterLayout activeTab="Contact">
    <SeparatorBar text="Contact" />
    <ContactForm />
  </HeaderFooterLayout>
)

export default ContactPage
