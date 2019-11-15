import React from "react";

function Button({
  content = "Press me",

  onPress = () => {
    console.log("clicked");
  },
  styles = {}
}) {
  return (
    <button className="fontreg" style={{ ...styles }} onClick={onPress}>
      {content}
    </button>
  );
}

export default Button;
