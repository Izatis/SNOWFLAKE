import React from "react";
import s from "./OurService.module.scss";
import { motion } from "framer-motion";
import OurServiceCard from "./../OurServiceCard/OurServiceCard";
const OurService = () => {
  return (
    <div className={s.container} id="services">
      <motion.div className={s.title_content}>
        <motion.h1
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          our services
        </motion.h1>
        <motion.h2
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          ИСПЫТАЙТЕ СИЛУ <br /> <b>ИННОВАЦИЙ</b>{" "}
        </motion.h2>
        <motion.hr
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        />
        <motion.p
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          Мы предлагаем полный цикл услуг в области информационных технологий
          <br />
          такие как: создание удобных веб-сайтов с адаптивным дизайном с <br />
          оптимизацией для поисковых систем и разработку мобильных приложений.
        </motion.p>
        <a href="#contacts">
          <motion.button
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            VIEW ALL
          </motion.button>
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        transition={{ duration: 0.6 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        className={s.service_cards}
      >
        <OurServiceCard />
      </motion.div>
    </div>
  );
};

export default OurService;
