import React from "react";
import classnames from "classnames";

export default function Button(props) {
  const { onClick, icon, className } = props;
  return (
    <button
      type="button"
      className={classnames("btn--medium", "btn--circle", "caller--button", className)}
      onClick={e => {
        onClick();
      }}
    >
      <img src={icon} alt='call' />
    </button>
  );
}
