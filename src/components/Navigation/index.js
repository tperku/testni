import React from "react"
import NavigationBar from "../NavigationBar/index.js"
import Combobox from "../Combobox/index.js"
import styles from "./style.module.css"

const Navigation = ({ activeTab }) => (
    <section className = {styles.navigation}>
        <NavigationBar activeTab = {activeTab}/>
        <Combobox/>
    </section>
)


export default Navigation