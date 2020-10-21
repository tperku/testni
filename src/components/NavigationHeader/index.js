import React from "react"
import Logo from "../Logo/index.js"
import Navigation from "../Navigation/index.js"
import styles from "./style.module.css"



const NavigationHeader = () => (
    <section className={styles.navigationHeader}>
        <Logo/>
        <Navigation/>
    </section>


)

export default NavigationHeader