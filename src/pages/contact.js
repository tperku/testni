import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter.js"
import ContactSeparator from "../modules/ContactSeparator/index.js"
import ContactForm from "../modules/ContactForm/index.js"

const ContactPage = () => (
  <HeaderFooterLayout activeTab="Contact">
    <ContactSeparator />
    <ContactForm />
  </HeaderFooterLayout>
)

export default ContactPage
