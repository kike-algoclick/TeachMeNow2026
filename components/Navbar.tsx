import styles from "@/app/ui/navbar.module.css"
import clsx from "clsx"
import Image from "next/image"



export default function Navbar(){

    return ( 

    <div className="w-full z-100 fixed">
       
        <div className={clsx(styles.navbar ,styles.styling)}>

             <div className={styles.Logo}>
                <Image
                    width={190}
                    height={170}
                    src="/logo.png"
                    className="hidden md:block"
                    alt="Screenshots of the dashboard project showing desktop version"/>
        
                <Image
                    width={50}
                    height={50}
                    src="/tmn-icon.png"
                    className="block md:hidden"
                    alt="Screenshots of the dashboard project showing desktop version"/>
            </div>


            <nav className={styles.options}>
                <ul>
                    <a href="/">
                    <li>Home</li>
                    </a>
                    <li>About Us</li>
                    <a href="/plans">
                    <li>Explore Premium</li>
                    </a>
                </ul>
            </nav>

            <div className="flex gap-5">
                <button className={styles.sign}>Login</button>
                <button className={styles.sign}>Sign Up</button>
            </div>

        </div>

    </div> 
    )
   }