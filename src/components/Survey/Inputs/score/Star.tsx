import styles from "./styles.module.scss";

type Props = {
  filled?: boolean;
  halfFilled?: boolean;
  onClick: () => void;
};
const Star = ({ filled, halfFilled, onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.star}>
      {!filled && !halfFilled ? (
        <svg
          focusable='false'
          aria-hidden='true'
          viewBox='0 0 24 24'
          width='100'
          height='100'
          fill='white'
          data-testid='StarBorderIcon'>
          <path d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'></path>
        </svg>
      ) : (
        <svg
          focusable='false'
          aria-hidden='true'
          width='100'
          height='100'
          fill={filled ? "white" : "#00000040"}
          viewBox='0 0 24 24'
          data-testid='StarIcon'>
          <path d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'></path>
        </svg>
      )}
    </div>
  );
};
export { Star };
