import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Error: nothing found</h1>
    </div>
  );
};

export default NotFoundBlock;
