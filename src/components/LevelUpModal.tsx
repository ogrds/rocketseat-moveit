import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export default function LevelUpModal() {
  const { level, closeLeveUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.levelUpModalOverlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLeveUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
