import React from "react";

function Card({ item }) {
  console.log(item);
  return (
    <div
      style={{
        width: 250,
        //height: 400,
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 10
      }}
    >
      <div style={{ backgroundColor: "transparent" }}>
        <img style={{ width: "100%", height: 300 }} src={item.image_url} />
      </div>
      <div className="title">{item.title}</div>

      <style jsx>{`
        .title {
          padding: 20px;
          //border-radius: 0px 0px 10px 10px;
          background-color: white;
          margin-top: -4px;
          text-align: center;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          margin: auto;
        }
        img {
          //border-radius: 10px 10px 0px 0px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
      `}</style>
    </div>
  );
}

export default Card;
