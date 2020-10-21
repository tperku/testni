import React from "react"
import styles from "./style.module.css"
import {navTabs} from "../../constants/constants.js"


const NavigationBar = ({ activeTab, useThisStyle }) => (

    <nav className={styles[useThisStyle || "navigationBar"]}>
    {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}>
      {tab}</li>
    )}
  </nav>

)

export default NavigationBar

