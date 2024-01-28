import React, { useEffect, useState } from "react";
import s from "./Load.module.scss";
import { motion, useInView } from "framer-motion";

const Load = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoad(false);
    }, 5000);
  }, [load]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [show]);
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({ threshold: 2.4 });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  const [style, setStyle] = useState({ opacity: 1 });

  useEffect(() => {
    setTimeout(function () {
      setStyle({ opacity: 0 });
    },3500);
  }, [style]);


  return (
    <motion.div
      className={load === true ? s.Load : s.LoadOff}
      variants={isInView && isMounted}
      initial="hidden"
      exit="exit"
      ref={ref}
      animate={{ opacity: isInView && isMounted }}
      style={style}
      transition={{ duration: 5.4 }}
      visibility={"hidden"}
    >
      <video className={s.video} style={{width: '100%'}} autoPlay muted loop>
        <source style={{width: '100%'}} src="./LoaderVideo.mp4" />
      </video>
    </motion.div>
  );
};

export default Load;
