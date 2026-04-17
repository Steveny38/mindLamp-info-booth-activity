import { useState } from "react";

import styles from "../styles/CarEssentialsComponent.module.css"
import { useCentralContext } from "../context/centralContext";

const CarEssentialsComponent = () => {


  const {carEssentials, toggleCarEssential, removeCarEssential, addEssential } = useCentralContext()


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Car essentials</h2>
        <button onClick={()=> addEssential()} className={styles.addBtn}>+</button>
      </div>

      <div className={styles.list}>
        {carEssentials.map((item) => (
          <div key={item.id} className={styles.item}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCarEssential(item.id)}
              />
              <span
                className={
                  item.checked ? styles.checkedText : styles.text
                }
              >
                {item.label}
              </span>
            </label>

            <button onClick={()=>removeCarEssential(item.id)} className={styles.removeBtn}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default CarEssentialsComponent;