import React from "react";

import Value from "./Value.js";

import styles from "./Detailsline.module.css";

function Detailsline({ className, ...props }) {
  return (
    <div style={{ minWidth: "inherit" }} className={styles.Detailsline}>
      <div>{props?.Text}</div>
      <div>
        {props?.Value ? (
          <Value className={className} Value={props?.Value} />
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}

export default Detailsline;
