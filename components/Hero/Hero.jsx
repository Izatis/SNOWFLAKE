import React, { useRef } from "react";
import s from "./Hero.module.scss";
import { motion } from "framer-motion";
import VideoBackground from "../Background/Background";

const Hero = () => {
  return (
    <>
      <div className={s.last}>
        <VideoBackground />
        <motion.div
          style={{
            background:
              "linear-gradient(268deg, rgba(109, 149, 252, 0.67) -50.55%,  rgba(109, 149, 252, 0) 25.97% )",
          }}
          animate={{
            background: [
              "linear-gradient(268deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
              "linear-gradient(268deg, rgba(109, 149, 252, 0.67) -20.55%,  rgba(109, 149, 252, 0) 25.97% )",
            ],
          }}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              background:
                "linear-gradient(268deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
              opacity: 0,
            },
            visible: {
              background:
                "linear-gradient(268deg, rgba(109, 149, 252, 0.67) -20.55%,  rgba(109, 149, 252, 0) 25.97% )",
              opacity: 1,
            },
          }}
          transition={{ duration: 2 }}
          className={s.back}
        >
          <div className={s.hero}>
            <div className={s.hero_content}>
              <motion.div className={s.left}>
                <motion.h1
                  initial="hidden"
                  transition={{ duration: 0.7 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
                >
                  Компания по <br /> <span>разработке</span> <br />
                  веб-сайтов и <br /> приложений
                </motion.h1>
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
                  transition={{ duration: 0.7 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
                >
                  Добро пожаловать в нашу IT компанию! <br/> Мы - команда
                  специалистов, которые хотят <br/> изменить мир с помощью современных
                  технологий.
                </motion.p>
                <a href="#contacts">
                  <motion.button
                    initial="hidden"
                    transition={{ duration: 0.8 }}
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
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
