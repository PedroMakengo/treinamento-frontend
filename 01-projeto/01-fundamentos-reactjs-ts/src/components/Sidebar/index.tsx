import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";

import coverImg from "../../assets/cover.png";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImg} alt="Cover Image" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/pedromakengo.png" />
        <strong>Pedro Makengo</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
