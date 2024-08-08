import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Seja bem-vindo(a) ao exemplo de navegação no React</h1>
      </div>
    </main>
  );
}
