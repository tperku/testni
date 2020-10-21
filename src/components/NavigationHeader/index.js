import React from "react"
import Logo from "../Logo/index.js"
import Navigation from "../Navigation/index.js"
import styles from "./style.module.css"



const NavigationHeader = (props) => (
    <section className={styles.navigationHeader}>
        <Logo/>
        <Navigation activeTab = {props.activeTab} />
    </section>


)

export default NavigationHeader