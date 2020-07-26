import React from "react";
import Card from "./Card";
import { getSearchPaginationDataThunk } from "../Thunk";
import { connect } from "react-redux";

function CardList({
  searchResult,
  page,
  value,
  getSearchPaginationDataThunk,
  isPaginationLoading
}) {
  function onLoadMore() {
    console.log("clicked");
    getSearchPaginationDataThunk(value, page + 1);
  }

  return (
    <div>
      <div className="list-container">
        {searchResult.map(item => (
          <Card item={item} />
        ))}
      </div>
      <div style={{ paddingBottom: 20, textAlign: "center" }}>
        {isPaginationLoading ? (
          <span className="load-more">Loading....</span>
        ) : (
          <span onClick={onLoadMore} className="load-more">
            Load more
          </span>
        )}
      </div>
      <style jsx>{`
        .list-container {
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;
          justify-content: space-around;
        }
        .load-more {
          background: white;
          padding: 5px;
          border-radius: 10px;
          color: #1d79c0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default connect(null, { getSearchPaginationDataThunk })(CardList);
