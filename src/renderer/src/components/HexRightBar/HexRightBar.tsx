import styles from "./hexRightBar.module.css";

export default function HexRightBar(): React.JSX.Element {
  return (
    <div id="hex-right-bar" className={styles.rightBarContainer}>
      <div id="hex-right-bar-upper-icon-container" className={styles.upperRightBarIconContainer}>

      </div>
      <div id="hex-right-bar-icon-container" className={styles.rightBarIconContainer}>

      </div>
    </div>
  );
}