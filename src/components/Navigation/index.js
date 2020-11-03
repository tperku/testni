import React from "react"
import NavigationBar from "../NavigationBar/index.js"
import ReactFlagsSelect from "react-flags-select"
import "react-flags-select/css/react-flags-select.css"
import styles from "./style.module.css"

const Navigation = ({ activeTab }) => (
  <section className={styles.navigation}>
    <NavigationBar activeTab={activeTab} />
    <ReactFlagsSelect
      countries={["GB", "IT", "DE"]}
      className={styles.combobox}
      placeholder="ENGLISH"
      customLabels={{ GB: "English", DE: "Deutsche", IT: "Italiano" }}
    />
  </section>
)

export default Navigation
