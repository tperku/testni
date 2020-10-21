import React from "react"
import Logo from "../../components/Logo/index.js"
import Navigation from "../../components/Navigation/index.js"
import ContactBar from "../../components/contactBar/index.js"

import styles from "./style.module.css"

const NavigationHeader = ({ activeTab }) => (
  <>
    <ContactBar />
    <section className={styles.navigationHeader}>
      <Logo />
      <Navigation activeTab={activeTab} />
    </section>
  </>
)

export default NavigationHeader
