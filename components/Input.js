import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchDataThunk } from "../Thunk";

class Input extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { value } = this.props;
    if (!value) return;

    console.log("submitting");
    this.props.getSearchDataThunk(value);
  };

  render() {
    const { value, onHandleClick } = this.props;

    return (
      <div
        style={{
          textAlign: "center",
          paddingTop: 40,
          position: "sticky",
          top: 0
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onSubmit={this.onSubmit}
        >
          <input value={value} onChange={onHandleClick} />
          <button type="submit">Go</button>
        </form>
        <style jsx>{`
          input {
            height: 70px;
            width: 50%;
            padding: 0px 10px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

            border: 1px solid rgba(255, 255, 255, 0.6);
            border-right: transparent;
            background: #3270b8;
            background: rgba(255, 255, 255, 0.05);
            font-size: 25px;
            color: white;
          }
          button {
            background: rgba(255, 255, 255, 0.05);
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border-right: 1px solid rgba(255, 255, 255, 0.6);
            border-top: 1px solid rgba(255, 255, 255, 0.6);
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
            border-left: transparent;
            /* width: 100%; */
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            height: 72px;
            padding: 0px 25px;
            font-size: 20px;
            margin-left: 5px;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(null, { getSearchDataThunk })(Input);
