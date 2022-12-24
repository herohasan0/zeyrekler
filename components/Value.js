import React from "react";

import styles from "./Value.module.css";

function Value({ className, ...props }) {
  return (
    <div className={styles.Value}>
      <div className={styles.Numb}>
        <div>{props?.Numb}</div>
        <div className={className}>{props?.Value || "-"}</div>
      </div>
    </div>
  );
}

export default Value;
