import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import CardList from "../components/CardList";
import { getSearchDataThunk, BASE_URL } from "../Thunk";

class Index extends Component {
  state = { value: "naruto" };

  onHandleClick = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { searchResult } = this.props;
    const { value } = this.state;
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#1D79C0",
          padding: "0px 100px"
        }}
      >
        <Input value={value} onHandleClick={this.onHandleClick} />

        <div
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 20,
            fontSize: 20
          }}
        >
          {searchResult.isLoading ? (
            "Fetching...."
          ) : (
            <div>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>
                Requesting:
              </span>
              <span> {`${BASE_URL}?q=${value}`}</span>
            </div>
          )}
        </div>

        {searchResult.data && (
          <CardList
            searchResult={searchResult.data.results}
            page={searchResult.data.page}
            value={value}
            isPaginationLoading={searchResult.isPaginationLoading}
          />
        )}
      </div>
    );
  }
}

Index.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getSearchDataThunk("naruto"));
  return {};
};

function mapStateToProps({ searchResult }) {
  return { searchResult };
}

export default connect(mapStateToProps, { getSearchDataThunk })(Index);
