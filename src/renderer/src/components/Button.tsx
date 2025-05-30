import styles from "./button.module.css";

interface ButtonProps {
  iconSrc: string; // path to SVG image
  alt?: string;
  onClick?: () => void;
}

function Button({ iconSrc, alt = "Icon", onClick }: ButtonProps): React.JSX.Element {
  return (
    <div className={styles.button} onClick={onClick}>
      <img src={iconSrc} alt={alt} className={styles.icon} />
    </div>
  );
}

export default Button;
