import styles from './avatar.module.scss';

type AvatarProps = {
  imageUrl?: string | null;
  alt?: string;
};

export const Avatar = ({ imageUrl, alt = 'User avatar' }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      {imageUrl ? (
        <img src={imageUrl} alt={alt} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>👤</div>
      )}
    </div>
  );
};
