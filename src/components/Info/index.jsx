import styles from "./Info.module.css";

const Info = ({ todosLength, totalCounts, onDelete }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>{`Total Counts: ${todosLength}`}</p>
      </div>
      <div className={styles.infoTotal}>
        <p>{`Total Counts: ${totalCounts}`}</p>
      </div>
      <div className={styles.deleteAllButton} onClick={onDelete}>
        Delete All List
      </div>
    </div>
  );
};

export default Info;
