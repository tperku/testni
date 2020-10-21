import React from "react"
import Logo from "../Logo/index.js"
import Navigation from "../Navigation/index.js"
import ContactBar from "../contactBar/index.js"

import styles from "./style.module.css"



const NavigationHeader = ({ activeTab }) => (
    
    <>
    <ContactBar />
    <section className={styles.navigationHeader}>
        <Logo/>
        <Navigation activeTab = {activeTab} />
    </section>
    </>


)

export default NavigationHeader