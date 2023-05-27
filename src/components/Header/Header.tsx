import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
        <div className={styles.container}>
            <h1 className={styles.logo}>TRELLO</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </header>
  )
}