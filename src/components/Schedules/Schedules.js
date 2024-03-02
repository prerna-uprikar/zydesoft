import styles from "./Schedule.module.scss";

function ScheduleWrapper() {
  return (
    <>
      <div className={styles.scheduleWrapper}>
        <p className={styles.joinPara}>
          Join our powerful and efficient practices <br />
          with the best teachers
        </p>
        <p className={styles.joinpara2}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit.
        </p>

        <p className={styles.freecpick}>Images from  <a href="/" className={styles.freepicklink}>Freepick</a></p>

        <div className={styles.scheduleBtn}>
            <button className={styles.seeScheduleBtn}>SEE SCHEDULE</button>
        </div>
      </div>

      <div className={styles.scheduleform}>
         <div className={styles.contactUs}>
             <h1 className={styles.contactUsHead}>Contact Us</h1>
             <p className={styles.Any}>Any questions or remarks? Just write us a message!</p>
             <div className={styles.borderedDiv}>
                <p>Sydney</p>
                <p>45 Pirrama Rd, Pyrmont NSW 2022</p>
             </div>

             <div className={styles.borderedDiv}>
                <p >Melbourne</p>
                <p>163 Collins St, Melbourne VIC 3000</p>
             </div>

             <div>
                <p>Los Angeles</p>
                <p>340 Main St, Venice CA 902291, USA</p>
             </div>
         </div>

         <div className={styles.getInTouch}>
            <p className={styles.GetInTouchText}>Get in Touch</p>
            <p className={styles.HaveInq}>Have an inquiry or some feedbak for us? Fill out the form below to contact our team.</p>

            <div className={styles.inputfieldsWrap}>
              <div>
                <p>Name</p>
                <input type="text" className={styles.input} placeholder="Enter your name"/>
              </div>

              <div>
                <p>Email</p>
                <input type="text" className={styles.input} placeholder="Enter valid email address"/>
              </div>

              <div>
                <p>How can we help</p>
                <input type="text" className={styles.input} placeholder=""/>
              </div>

              <div className={styles.submitwrapper}>
                <button className={styles.submit}>SUBMIT</button>
              </div>
            </div>
         </div>
      </div>
    </>
  );
}

export default ScheduleWrapper;
