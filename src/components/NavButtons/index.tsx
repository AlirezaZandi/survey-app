import { Button } from "../common/Button";

import styles from "./styles.module.scss";

type Props = {
  onUpClick: () => void;
  onDownClick: () => void;
  disableDownButton?: boolean;
};
const NavButtons = ({ onDownClick, onUpClick, disableDownButton }: Props) => {
  return (
    <div className={styles.nav}>
      <Button
        onClick={onUpClick}
        size='sm'
        label={
          <svg height='9' width='14' fill='white'>
            <path d='M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z'></path>
          </svg>
        }
        className={styles.navButtonLeft}
        disable={disableDownButton}
      />
      <Button
        onClick={onDownClick}
        size='sm'
        label={
          <svg height='9' width='14' fill='white'>
            <path d='M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z'></path>
          </svg>
        }
        className={styles.navButtonRight}
      />
    </div>
  );
};
export { NavButtons };
