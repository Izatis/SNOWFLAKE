import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import s from "../Robot/Robot.module.scss";
import { motion, useAnimationFrame } from "framer-motion";
import { fadeIn } from "@/constants/variants";

const Robot = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 600)) * -24;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <motion.section
      className={s.robot}
      id="aboutUs"
      style={{
        background:
          "linear-gradient(90deg, rgba(109, 149, 252, 0.67) -33.12%,  rgba(109, 149, 252, 0) 30.39% )",
      }}
      animate={{
        background: [
          "linear-gradient(90deg, rgba(109, 149, 252, 0.67) -53.12%,  rgba(109, 149, 252, 0) -10% )",
          "linear-gradient(90deg, rgba(109, 149, 252, 0.67) -33.12%,  rgba(109, 149, 252, 0) 30.39% )",
        ],
      }}
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {
          background:
            "linear-gradient(45deg, rgba(109, 149, 252, 0.67) -53.12%,  rgba(109, 149, 252, 0) -10% )",
          opacity: 0,
        },
        visible: {
          background:
            "linear-gradient(90deg, rgba(109, 149, 252, 0.67) -33.12%,  rgba(109, 149, 252, 0) 30.39% )",
          opacity: 1,
        },
      }}
      transition={{ duration: 2 }}
    >
      <motion.div className={s.container}>
        <motion.div
          className={s.left_side}
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          <img src="/bot.png" alt="bot" ref={ref} />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className={s.right_side}
        >
          <motion.h4
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            О компании
          </motion.h4>
          <motion.h1
            initial="hidden"
            transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Мы <span>воплощаем</span> <br />
            креативные идеи в жизнь
          </motion.h1>
          <motion.hr
            initial="hidden"
            transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          />
          <motion.h6
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Мы любим создавать
          </motion.h6>
          <motion.p
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Snowflake имеет богатый опыт работы с клиентами из разных отраслей,
            включая финансы, медиа, здравоохранение, розничную торговлю и многое
            другое. Наши разработчики готовы принимать вызовы любой сложности и
            гарантировать высокое качество наших услуг.
          </motion.p>

          <a href="#contacts">
            <motion.button
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              Read more
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Robot;
