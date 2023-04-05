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
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}>
        <motion.h2 animate={{ x: 100 }} transition={{ duration: 2 }}>
          LETSDO haya try to brings all your <br /> tasks, teammates, and tools
          together
        </motion.h2>
        <motion.img
          animate={{ x: -50 }}
          transition={{ duration: 2 }}
          src="../../image/bild.png"
          alt=""
        />
      </motion.dev>














      
      <motion.dev className="h-todo">
        <motion.p animate={{ y: 50 }} transition={{ duration: 2 }}>
          Take control of your day and boost your productivity with our powerful
          todo list. <br />
          Say goodbye to the chaos of forgetting tasks and hello to a more
          organized and efficient you.
          <br /> Let our tool help you prioritize, plan and achieve your goals,
          one task at a time.
        </motion.p>
        <motion.img
          src="../../image/todo.png"
          animate={{ y: 50 }}
          transition={{ duration: 2 }}
          initial={{ opacity: 0.5, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
        />
      </motion.dev>








      <motion.dev
        className="sec"
        initial={{ opacity: 1, scale: 1, x: 500 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <motion.h2>
          Vereinfachen Sie Ihr Projektmanagement mit unserer
          benutzerfreundlichen Software.
          <br /> Verfolgen Sie Aufgaben, Budgets und Fortschritte in Echtzeit.
        </motion.h2>
        <motion.img
          animate={{ x: -50 }}
          transition={{ duration: 2 }}
          src="../../image/bild2.png"
          alt=""
        />
      </motion.dev>
    </div>
  );
}
