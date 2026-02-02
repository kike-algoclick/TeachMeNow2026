import Image from "next/image";
import styles from "@/app/ui/landingpage.module.css"
import clsx from "clsx";

//Cambiar los classNames por los styles.Name

export default function Home() {
  return (
   <div className={clsx(styles.background, styles.body)}>
      <div className={styles.container}>
        <div className={styles.fondo}></div>
        <div className={styles.logo}>
          <h1>
            Teach<span className={styles.highlight}>Me</span>
            <span className={styles.highlight2}>Now</span>
          </h1>
        </div>

        <header className={styles.Barra_busqueda}>
          <input type="text" placeholder="How can I help you today?" />
          <button>Send</button>
        </header>

        <main className={styles.main_content}>
          <div className={styles.Cards}>
            <div className={styles.Card}>
              <img src="/Landing_images/Teacher.jpeg" alt="" />
            </div>
            <div className={styles.card_body}>
              <h2>Teachers</h2>
              <p>Start with your students and improve your classes</p>
              
                <button>Start Now</button>
              
            </div>
          </div>

          <div className={styles.Cards}>
            <div className={styles.Card}>
              <img src="/Landing_images/Alumno.jpeg" alt="" />
            </div>
            <div className={styles.card_body}>
              <h2>Student</h2>
              <p>Get started with you classes and improve your results</p>
            
                <button>Start Now</button>
              
            </div>
          </div>

          <div className={styles.Cards}>
            <div className={styles.Card}>
              <img src="/Landing_images/Director.jpeg" alt="" />
            </div>
            <div className={styles.card_body}>
              <h2>Principal</h2>
              <p>Start as a Principal and improve your teachers' work</p>
        
                <button>Start Now</button>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
