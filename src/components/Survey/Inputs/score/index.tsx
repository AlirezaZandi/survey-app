import { Star } from "./Star";

import styles from "./styles.module.scss";

import { motion } from "framer-motion";

type Props = {
  min: number;
  max: number;

  value: number;
  onChange: (value: number) => void;
};
const Score = ({ max, min, onChange, value }: Props) => {
  return (
    <div className={styles.container}>
      {[...Array(max - min + 1)].map((_, index) => (
        <motion.div
          key={index}
          whileTap={{
            scale: 1.2,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            bounce: 1,
            duration: 0.1,
            type: "spring",
          }}>
          <Star filled={value > index} onClick={() => onChange(index + min)} />
        </motion.div>
      ))}
    </div>
  );
};
export { Score };
