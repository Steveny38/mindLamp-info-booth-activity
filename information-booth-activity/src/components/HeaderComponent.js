import styles from '../styles/HeaderComponent.module.css';

const HeaderComponent = () => {
    const handleClickBack = () => {
        window.parent.postMessage(
            JSON.stringify({
            action: "back"
            }),
            "*"
        );
    };

  return ( 
    <div className={styles.header}>
      <img onClick={() => handleClickBack()}
        className={styles.logo} 
        src="/mindlamp.svg" 
        alt="mindlamp svg" 
      />

      <div className={styles.title}>
        Information Booth
      </div>
    </div>
  );
};

export default HeaderComponent;