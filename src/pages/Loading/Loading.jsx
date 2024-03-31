import HashLoader from "react-spinners/HashLoader";
import themes from "../../_themes.module.scss";
import styles from "./Loading.module.scss";

const Loading = ({ message }) => {
  return (
    <div className={styles["container"]}>
      <HashLoader color={themes["font_color"]} size={75} loading={true} />
      <span className={styles["message"]}>
        {message ? message : "Loading..."}
      </span>
    </div>
  );
};

export default Loading;
