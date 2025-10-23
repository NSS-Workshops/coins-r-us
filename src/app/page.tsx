import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Coins R Us</h1>
        <p>This is a simple app to help you track your coins.</p>
        <p>You can add coins to your inventory, view your inventory, and more.</p>
      </main>
    </div>
  );
}
