import React, { Component } from "react";
import theme from "../../static/theme";

class About extends Component {
  state = { show: false };

  render() {
    const { show } = this.state;

    return (
      <div>
        <i></i>
        <p className="fontreg">
          Jeevansathi.com is one of the leading and most trusted matrimony
          websites in India. Making happy marriages happen since 1998,
          Jeevansathi understands the importance of choosing the right partner
          for marriage, especially in the Indian cultural setup.
          {!show ? (
            <span onClick={() => this.setState({ show: true })}>More</span>
          ) : (
            "It believes in providing the most secure and convenient matchmaking experience to all its members by ensuring 100% screening,exclusive privacy options, photo protection features and verification of phone numbers and more information. While the online matrimonial site connects millions of people directly, Jeevansathi also maintains a dedicated Customer Care team and offers offline Match Point Centers across the country, for deeper and personal interaction with prospective brides, grooms and /or families."
          )}
        </p>

        <style jsx>{`
          div {
            text-align: center;
            padding: 0px 25px;
          }
          i {
            display: inline-block;
            background-image: url("../../static/images/homeSpriteNewFinal.png");
            width: 33px;
            background-position: -294px -11px;
            height: 34px;
            margin-top: 18px;
          }

          p {
            color: #9b9b9b;
            font-size: 14px;
          }
          span {
            color: ${theme.primaryColor};
          }
        `}</style>
      </div>
    );
  }
}

export default About;
