import styles from "./buttonContainer.module.css";
import Button from '@renderer/components/Button';
import gearIcon from '../assets/Images/gear-hammer.svg';

function ButtonContainer(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
    </div>
  );
}

export default ButtonContainer;
