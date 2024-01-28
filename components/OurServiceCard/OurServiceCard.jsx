import React from "react";
import s from "./OurServiceCard.module.scss";
import { motion } from "framer-motion";

const OurServiceCard = () => {
  return (
    <>
      <div className={s.first}>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
          <img src="/mobileDev.png" alt="mobiledev" />
          <h1>MOBILE DEV</h1>
        </motion.div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
          <img src="/frontend.png" alt="front" />
          <h1>FRONT-END</h1>
        </motion.div>
      </div>

      <div className={s.second}>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
          <img src="/ux.png" alt="ux" />
          <h1> IU/UX DESIGN</h1>
        </motion.div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
          <img src="/backend.png" alt="backend" />
          <h1>BACK-END</h1>
        </motion.div>
      </div>
    </>
  );
};

export default OurServiceCard;
