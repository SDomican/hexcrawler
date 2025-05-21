import styles from "./button.module.css";
import gearIcon from '../assets/Images/gear-hammer.svg';

function Button(): React.JSX.Element {

  return (
    <div className={styles.button}>
        <img src={gearIcon}  alt="Add Icon"/>
    </div>
  )
}

export default Button


