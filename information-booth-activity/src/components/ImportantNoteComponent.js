import { useCentralContext } from "../context/centralContext";
import styles from "../styles/ImportantNotes.module.css";
import { useState } from "react";

const ImportantNotesComponent = () => {
  const {importantNotes, setImportantNotes} = useCentralContext()

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>📝</div>
        <div className={styles.title}>Important notes</div>
      </div>

      <div className={styles.body}>
        <textarea
          className={styles.textarea}
          value={importantNotes}
          onChange={(e) => setImportantNotes(e.target.value)}
        />

        {!importantNotes && (
          <div className={styles.hint}>Tap to edit notes...</div>
        )}
      </div>
    </div>
  );
};

export default ImportantNotesComponent;