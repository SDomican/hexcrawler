import styles from "./button.module.css";

interface ButtonProps {
  iconSrc: string; // path to SVG image
  alt?: string;
}

function Button({ iconSrc, alt = "Icon" }: ButtonProps): React.JSX.Element {
  return (
    <div className={styles.button}>
      <img src={iconSrc} alt={alt} className={styles.icon} />
    </div>
  );
}

export default Button;
