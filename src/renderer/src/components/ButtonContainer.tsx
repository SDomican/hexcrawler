import styles from "./buttonContainer.module.css";
import Button from '@renderer/components/Button';
import gearIcon from '../assets/Images/gear-hammer.svg';

interface ButtonContainerProps {
  onToggleHexRightBar: () => void;
}


function ButtonContainer({ onToggleHexRightBar }: ButtonContainerProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      <Button onClick={onToggleHexRightBar} iconSrc={gearIcon} />
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
      <Button iconSrc={gearIcon}/>
    </div>
  );
}

export default ButtonContainer;
