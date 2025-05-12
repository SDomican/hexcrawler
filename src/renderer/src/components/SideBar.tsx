import styles from "./sidebar.module.css";

function SideBar(): React.JSX.Element {

  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default SideBar
