import React from "react"
import { Link } from "gatsby"
import styles from "./style.module.css"
import { navTabs } from "../../constants/constants.js"

const NavigationBar = ({ activeTab, useThisStyle }) => (
  <nav className={styles[useThisStyle || "navigationBar"]}>
    {navTabs.map(({ tab, to }) => (
      <Link to={to}>
        <li className={tab === activeTab ? styles.active : ""}>{tab}</li>
      </Link>
    ))}
  </nav>
)

export default NavigationBar
