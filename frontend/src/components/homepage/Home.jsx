import { useEffect } from "react";
import "./home.scss";
import Aos from "aos";
import { motion } from "framer-motion";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="hom">
      <motion.dev
        className="first"
        initial={{ opacity: 0.7, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>
        <motion.h2 className="h-text" animate={{ x: 100 }} transition={{ duration: 2 }}>
          LETSDO HAYA
          <br />{" "}
          <br />{" "}
          
            {" "}
            Simplify your project management with our user-friendly software.
            Track tasks, budgets, and progress in real time.
        </motion.h2>
        <motion.img
          animate={{ x: -50 }}
          transition={{ duration: 2 }}
          src="../../image/bild.png"
          alt=""
        />
      </motion.dev>

      <motion.dev>
        <motion.h2>LETSDO HAYA give you</motion.h2>

        <motion.container
          class="container"
          initial={{ opacity: 0.7, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}>
          <motion.div
            class="section1"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}>
            <h3>TODO List</h3>
            <p className="stext">
              " Take control of your day and boost your productivity with our
              powerful todo list. <br />
              Say goodbye to the chaos of forgetting tasks and hello to a more
              organized and efficient you.
              <br /> Let our tool help you prioritize, plan and achieve your
              goals, one task at a time."
            </p>
          </motion.div>
          <motion.div
            class="section2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}>
            <h3> PRODUCTS MANAGEMENT SYSTEM</h3>
            <p className="stext">
              "Maximize your business efficiency and productivity with our
              comprehensive product management system. Take your business to the
              next level - try it today."
            </p>
          </motion.div>

          <motion.div
            class="section4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}>
            <h3> CALANDER</h3>
            <p className="stext">
              "Stay on top of your schedule and boost your productivity with our
              user-friendly calendar app. Download now and optimize your time
              like never before."
            </p>
          </motion.div>

          <motion.div
            class="section3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}>
            <h3> NOTE</h3>
            <p className="stext">
              "Unleash your creativity and boost your productivity with our
              powerful note-taking app. Stay organized, capture your ideas, and
              access them from anywhere, anytime. Download now and take your
              note-taking to the next level."
            </p>
          </motion.div>
        </motion.container>
      </motion.dev>
    </div>
  );
}
