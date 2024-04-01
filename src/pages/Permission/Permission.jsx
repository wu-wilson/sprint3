import { useEffect } from "react";
import styles from "./Permission.module.scss";

const Permission = ({ permissionGranted, setPermissionGranted }) => {
  useEffect(() => {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            setPermissionGranted(true);
          }
        })
        .catch(console.error);
    } else {
      setPermissionGranted(true);
    }
    return () => {};
  }, []);

  const handlePermissionGranted = () => {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          setPermissionGranted(true);
          window.location.reload();
        }
      })
      .catch(console.error);
  };

  return (
    <>
      {permissionGranted ? null : (
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <span className={styles["title"]}>
              <span className={styles["emoji"]}>👋</span> Hey there!
            </span>
            <span className={styles["subtitle"]}>
              This website needs access to some of your device's motion sensors
              to run. Could we have your permission to use them?
            </span>
            <button onClick={handlePermissionGranted}>Grant Permission</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Permission;
