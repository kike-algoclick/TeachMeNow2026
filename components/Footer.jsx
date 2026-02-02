import clsx from "clsx";
import styles from '@/app/ui/footer.module.css'

export default function Footer(){
    return(
        <div className="footer-container">
            <footer>
                <div className={styles.footer_content}>
                    <div className={styles.footer_section}>

                        <h3>We are TeachMeNow</h3>
                        <p>We are a platform that supports teachers with practical tools to improve classroom results
                        </p>
                        
                        <div>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Explore Premium</p>
                            <p>Test</p>
                        </div>
                        <div className={styles.footer_section}></div>

                    </div>
                </div>
            </footer>
        </div>
    )
}