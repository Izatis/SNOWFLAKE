import React from "react";
import s from "./AboutUs.module.scss";
import { motion } from "framer-motion";

const AboutsUs = () => {
  return (
    <>
      <div className={s.back}>
        <motion.div
          style={{
            background:
              "linear-gradient(140deg, rgba(109, 149, 252, 0.67) -50.55%,  rgba(109, 149, 252, 0) 25.97% )",
          }}
          animate={{
            background: [
              "linear-gradient(140deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
              "linear-gradient(140deg, rgba(109, 149, 252, 0.67) -20.55%,  rgba(109, 149, 252, 0) 25.97% )",
            ],
          }}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              background:
                "linear-gradient(140deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
              opacity: 0,
            },
            visible: {
              background:
                "linear-gradient(140deg, rgba(109, 149, 252, 0.67) -20.55%,  rgba(109, 149, 252, 0) 25.97% )",
              opacity: 1,
            },
          }}
          transition={{ duration: 2.3 }}
          className={s.left_banner}
        />
        <div id="about" className={s.about_container}>
          <motion.div className={s.left}>
            <motion.h3
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              почему мы?
            </motion.h3>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.8 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              лучшие полагаются <br />
              на <span>snowflake</span>
            </motion.h1>
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
                обсудим ваш проект
              </motion.button>
            </a>
          </motion.div>
          <motion.div className={s.right}>
            <motion.p
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              Почему именно мы? Мы готовы предложить <br />
              подход к каждому клиенту, чтобы понимать <br />
              их потребности и цели.
            </motion.p>
            <motion.div
              initial="hidden"
              Ff
              transition={{ duration: 0.8 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              className={s.info}
            >
              <a>
                <img src="/ok.png" alt="prog" />
                Высокопрофессиональные программисты
              </a>
              <a>
                <img src="/ok.png" alt="info" />
                Скорость, качество, цена
              </a>
              <a>
                <img src="/ok.png" alt="tec" />
                Современные технологии
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          style={{
            background:
              "linear-gradient(310deg, rgba(109, 149, 252, 0.67) -60.50%,  rgba(109, 149, 252, 0) 25.97% )",
          }}
          animate={{
            background: [
              "linear-gradient(310deg, rgba(109, 149, 252, 0.67) -10.50%,  rgba(109, 149, 252, 0) 0.97% )",
              "linear-gradient(310deg, rgba(109, 149, 252, 0.67) -20.50%,  rgba(109, 149, 252, 0) 25.97% )",
            ],
          }}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              background:
                "linear-gradient(310deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
              opacity: 0,
            },
            visible: {
              background:
                "linear-gradient(310deg, rgba(109, 149, 252, 0.67) -20.50%,  rgba(109, 149, 252, 0) 25.97% )",
              opacity: 1,
            },
          }}
          transition={{ duration: 2.3 }}
          className={s.right_banner}
        />
      </div>
    </>
  );
};

export default AboutsUs;
