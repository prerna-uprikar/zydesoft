import styles from "./Hero.module.scss";
function Hero() {
  return (
    <>
      <div className={styles.yogaWrapper}>
        <div className={styles.heroSec}>
          <img
            className={styles.lotus}
            src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/352b95a02a155f489ec4e725/bn.png"
          />
          <h1 className={styles.lotusHeading}>Welcome!</h1>
          <p className={styles.lotusPara}>
            Every human being should have at least a simple spiritual <br />{" "}
            process in their lives. If they have that, they will live and <br />{" "}
            die well.
          </p>
          <p className={styles.lotusPara}>
            Image from <a>freepik</a>
          </p>
          <div className={styles.btnWrapper}>
            <button className={styles.lotusButton}>READ MORE</button>
          </div>
        </div>

        <div>
          <img
            className={styles.yoga}
            src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/397aec59aed553968551ef89/tytyy.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
