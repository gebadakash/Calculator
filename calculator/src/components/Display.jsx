import styles from "./Display.module.css"

// eslint-disable-next-line react/prop-types
const Display = ({displayValue}) => {
  return <input className={styles.display} value={displayValue} readOnly></input>;
};

export default Display;
