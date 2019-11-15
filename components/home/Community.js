import React from "react";
import axios from "axios";
import Icon from "../../static/svgHandler";
// import Icon from "../../../common/components/svgHandler";
// import GA from "../../../common/components/GA";
// let API_SERVER_CONSTANTS
let accValue = null;
export default class Sec7links extends React.Component {
  constructor(props) {
    super(props);
    //  this.GAObject = new GA();
    this.state = {
      communityLinks: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(`https://www.jeevansathi.com/seo/communityLinks/seo/communityLinks`)
      .then(response => {
        if (response && response.data && Array.isArray(response.data))
          this.setState({ communityLinks: response.data });
      });
  }

  addClasses(elm, cls1, cls2) {
    let elements = document.getElementsByClassName(elm);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add(cls1);
      elements[i].classList.remove(cls2);
    }
  }

  handleAccordian(key) {
    let accorDian = document.getElementById(`collapse${key}`);
    let em = document.getElementById(`em${key}`);
    let el = document.getElementById(`el${key}`);
    if (accValue == key) {
      accorDian.classList.remove("show");
      accorDian.classList.add("hide");
      em.classList.remove("hide");
      em.classList.add("show");
      el.classList.remove("show");
      el.classList.add("hide");
      accValue = null;
    } else {
      this.addClasses("accordionItems", "hide", "show");
      this.addClasses("ic1", "show", "hide");
      this.addClasses("ic2", "hide", "show");
      accorDian.classList.remove("hide");
      accorDian.classList.add("show");
      em.classList.remove("show");
      em.classList.add("hide");
      el.classList.remove("hide");
      el.classList.add("show");
      accValue = key;
    }
  }
  setLinks(url) {
    //this.GAObject.gaTrack('','jsms', 'Homepage_R', 'matrimonial footer');
    window.location.href = url;
  }
  render() {
    return (
      <div className="mHomePage">
        {this.state.communityLinks.length > 0 && (
          <div className="connect_container pUB32 pt-0 pb-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="match w-100">
                    <h3 className="text-uppercase">Browse</h3>
                    <span>
                      <strong className="pr-1 pl-0">Matrimonial</strong>Profiles
                      By{" "}
                    </span>
                  </div>
                  {this.state.communityLinks &&
                    this.state.communityLinks.map((item, key) => {
                      return (
                        <div className="accordion_tab w-100">
                          <div className="item">
                            <div className="accordion">
                              <div className="card border-0">
                                <div className="card-header p-0 w-100">
                                  <h5 className="mb-0">
                                    <div
                                      onClick={e => {
                                        this.handleAccordian(key);
                                      }}
                                      className=" w-100 btn btn-link d-flex  justify-content-between align-items-center"
                                    >
                                      {item.displayName}
                                      <span
                                        className="m-0 ic1 show"
                                        id={`em${key}`}
                                      >
                                        <Icon
                                          type={"expand_more"}
                                          css={{
                                            height: "22px",
                                            width: "22px",
                                            color: "#4C6176"
                                          }}
                                        />
                                      </span>

                                      <span
                                        className="m-0 ic2  hide"
                                        id={`el${key}`}
                                      >
                                        <Icon
                                          type={"expand_less"}
                                          css={{
                                            height: "22px",
                                            width: "22px",
                                            color: "#4C6176"
                                          }}
                                        />
                                      </span>
                                    </div>
                                  </h5>
                                </div>
                                <div
                                  className="mar-0 pt-4 hide accordionItems"
                                  id={`collapse${key}`}
                                >
                                  <div className="card-body p-0">
                                    <div className="links">
                                      {item.props.map(data => {
                                        return (
                                          <div className="mar-0 wid50p allLinks">
                                            <div className="matrimonial_state">
                                              <a
                                                href="javascript:void(0)"
                                                onClick={e => {
                                                  this.setLinks(data.link);
                                                }}
                                              >
                                                {data.name} Matrimonial{" "}
                                              </a>
                                            </div>
                                            <div className="comLinks">
                                              <a
                                                href="javascript:void(0)"
                                                onClick={e => {
                                                  this.setLinks(data.brides);
                                                }}
                                              >
                                                {data.name} Brides
                                              </a>
                                            </div>
                                            <div className="comLinks">
                                              <a
                                                href="javascript:void(0)"
                                                onClick={e => {
                                                  this.setLinks(data.grooms);
                                                }}
                                              >
                                                {data.name} Grooms
                                              </a>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          * {
            margin: 0 auto;
            padding: 0;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          a {
            text-decoration: none;
          }
          .wid50p {
            width: 50%;
          }
          .hide {
            display: none;
          }
          .show {
            display: block;
          }
          .row {
            display: table;
          }
          .wid50p {
            width: 50%;
          }
          .mHomePage div,
          .mHomePage a {
            outline: 0;
          }
          .mHomePage div:focus,
          .mHomePage a:focus {
            outline: 0;
          }
          .mHomePage .mar-0 {
            margin: 0;
          }
          .mHomePage .match h3 {
            font-size: 12px;
            font-weight: 700;
            color: #8a9db0;
            margin-bottom: 4px;
            letter-spacing: 1.5px;
          }
          .mHomePage .match span {
            font-size: 16px;
          }
          .mHomePage .match span strong {
            padding: 0 0 0 5px;
            color: #d9475c;
          }
          .mHomePage .match span {
            font-size: 20px;
          }
          .mHomePage .accordion .card-header {
            background: transparent;
          }
          .mHomePage .accordion .card-header .btn-link {
            padding-bottom: 15px;
            padding-top: 15px;
            color: #4c6176;
            font-weight: 600;
            font-size: 14px;
          }
          .mHomePage .accordion .card-header .btn-link:focus,
          .mHomePage .accordion .card-header .btn-link:hover {
            text-decoration: none;
          }
          .mHomePage .accordion .card-body a {
            margin: 0 0 10px;
            font-size: 14px;
            color: #4c6176;
            display: inline-block;
            line-height: 20px;
          }
          .mHomePage .container-fluid {
            width: 100%;
            padding-right: 24px;
            padding-left: 24px;
          }
          .mHomePage .row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -24px;
            margin-left: -24px;
          }
          .mHomePage .col-sm-12 {
            position: relative;
            width: 100%;
            min-height: 1px;
          }
          .mHomePage .links {
            display: flex;
            flex-wrap: wrap;
          }
          @media (min-width: 576px) {
            .mHomePage .col-sm-12 {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
          .mHomePage .card {
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
          }
          .mHomePage .card-body {
            flex: 1 1 auto;
            padding: 1.25rem;
          }
          .mHomePage .card-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
          }
          .mHomePage .card-header:first-child {
            border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
          }
          .mHomePage .accordion .card:first-of-type {
            border-bottom: 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          }
          .mHomePage .accordion .card:last-of-type {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .mHomePage .border-0 {
            border: 0 !important;
          }
          .mHomePage .d-flex {
            display: flex !important;
          }
          .mHomePage .justify-content-between {
            justify-content: space-between !important;
          }
          .mHomePage .align-items-center {
            align-items: center !important;
          }
          .mHomePage .w-100 {
            width: 100% !important;
          }
          .mHomePage .m-0 {
            margin: 0 !important;
          }
          .mHomePage .mb-0 {
            margin-bottom: 0 !important;
          }
          .mHomePage .p-0 {
            padding: 0 !important;
          }
          .mHomePage .pl-0 {
            padding-left: 0 !important;
          }
          .mHomePage .pt-0 {
            padding-top: 0 !important;
          }
          .mHomePage .pb-0 {
            padding-bottom: 0 !important;
          }
          .mHomePage .pr-1 {
            padding-right: 0.25rem !important;
          }
          .mHomePage .pt-4 {
            padding-top: 1.5rem !important;
          }
          .mHomePage .text-uppercase {
            text-transform: uppercase !important;
          }
          .mHomePage .accordion .card-header {
            background: transparent;
          }
          .mHomePage .accordion .card-header .btn-link {
            padding-bottom: 15px !important;
            color: #4c6176;
            font-weight: 600;
            font-size: 14px;
          }
          .mHomePage .accordion .card-header .btn-link:focus,
          .mHomePage .accordion .card-header .btn-link:hover {
            text-decoration: none;
          }
          .mHomePage .accordion .card-body a {
            margin: 0 0 10px;
            font-size: 14px;
            color: #4c6176;
            display: block;
            line-height: 20px;
          }
          .mHomePage .pUB32 {
            padding: 32px 24px;
          }
          .mHomePage .allLinks {
            width: 50%;
            display: flex;
            flex: 1 1 auto;
            padding-top: 8px;
            flex-direction: column;
          }
          .mHomePage .comLinks {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            line-height: 30px;
            font-weight: 400;
            margin: 0;
          }
          .mHomePage .matrimonial_state {
            font-size: 14px;
            color: #4c6176;
            line-height: 30px;
            font-weight: 500;
            margin: 0;
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}
