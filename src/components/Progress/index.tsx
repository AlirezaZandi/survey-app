import styles from "./styles.module.scss";

type Props = {
  value: number;
};
const Progress = ({ value }: Props) => {
  return (
    <div className={styles.ProgressContainer}>
      <label htmlFor='file' className={styles.label}>
        شما به {value >= 100 ? 100 : value}٪ سوالات پاسخ داده اید
      </label>
      <div className={styles.progressBody}>
        <progress
          className={styles.progress}
          id='file'
          max='100'
          value={value}></progress>
      </div>
    </div>
  );
};
export { Progress };
