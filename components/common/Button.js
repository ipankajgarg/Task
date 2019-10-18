import React from "react";

function Button({
  content = "Press me",
  color = "red",
  onPress = () => {
    console.log("clicked");
  },
  width = 50,
  height = 50
}) {
  return (
    <button className="fontreg" onClick={onPress}>
      {content}

      <style jsx>{`
        button {
          background-color: ${color};
          width: ${width};
          height: ${height};
          border: none;
          color: white;
          font-size: 15px;
        }
      `}</style>
    </button>
  );
}

export default Button;
