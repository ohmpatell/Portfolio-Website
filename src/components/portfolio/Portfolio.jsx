import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Banter Box",
    img: "banterbox.jpeg",
    desc: "BanterBox is an exciting real-time chat application built with ReactJS and SCSS, powered by Firebase for seamless data synchronization. Engage in dynamic conversations with other users in a visually appealing and responsive environment. With user authentication powered by Firebase, you can securely sign in using your Google account. BanterBox delivers a modern and interactive chat experience, making communication a breeze.",
    a: "https://banter-box.vercel.app/"
  },
  {
    id: 2,
    title: "My iLibrary",
    img: "ilibrary.png",
    desc: "Discover my full-stack skills in My iLibrary, a responsive book collection web app. Developed with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, it features secure authentication, real-time book data retrieval, and cloud deployment on Google Cloud VM. Explore seamless user experiences in a compact showcase of my technical proficiency.",
    a: "https://github.com/ohmpatell/my-iLibrary"
  },
  {
    id: 3,
    title: "ToronToBank",
    img: "torontobank.JPG",
    desc: "Crafted a user-friendly banking application, ToronToBank, employing cutting-edge technologies such as C#, Windows Forms, and .NET Framework. This robust solution seamlessly integrates with SQL Server, ensuring secure and efficient data storage and retrieval. Engineered core banking functions, including deposits, withdrawals, and transaction logging, to provide users with a seamless and secure financial experience.",
    a: "#"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            <a href={item.a}><button>See Demo</button></a>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
