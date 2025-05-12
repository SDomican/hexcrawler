import styles from './mainmenu.module.css';
import bgImage from '../assets/Images/WorldMapTemp.png'
import { Link } from 'react-router-dom';

function MainMenu(): React.JSX.Element {
  return (
    <div className={styles.overlay} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.menuBox}>
        <h1 className={styles.title}>Hex Crawler</h1>
        <button className={styles.menuButton}><Link to="/" className="link">HexTest</Link></button>
        <button className={styles.menuButton}>Open World</button>
        <button className={styles.menuButton}>Settings</button>
        <span className={styles.version}>v0.0.1</span>
      </div>
    </div>
  );
}

export default MainMenu;
