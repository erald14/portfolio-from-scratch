import React from "react";
import "./index.scss";

const Mobile = ({}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="drawing">
            <svg
              id="mobileFrame"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 600 934"
            >
              <path
                className="mobile-frame"
                fill="#FFF"
                d="M101.7 116.4c0-27.7 22.5-50.2 50.2-50.2H447c27.7 0 50.2 22.5 50.2 50.2v701.9c0 27.7-22.5 50.2-50.2 50.2H151.9c-27.7 0-50.2-22.5-50.2-50.2V116.4z"
              />
              <path
                className="mobile-frame"
                fill="none"
                stroke="#66BB6A"
                strokeWidth={2}
                d="M101.7 116.4c0-27.7 22.5-50.2 50.2-50.2H447c27.7 0 50.2 22.5 50.2 50.2v701.9c0 27.7-22.5 50.2-50.2 50.2H151.9c-27.7 0-50.2-22.5-50.2-50.2V116.4z"
              />
              <path
                className="mobile-frame"
                fill="#66BB6A"
                d="M180.8 107.6c4.2 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5-7.5 3.4-7.5 7.5 3.4 7.5 7.5 7.5zM229.8 100.1c0-4.2 3.4-7.5 7.5-7.5h129.3c4.2 0 7.5 3.4 7.5 7.5 0 4.2-3.4 7.5-7.5 7.5H237.3c-4.2 0-7.5-3.4-7.5-7.5zm0 733.2c0-4.2 3.4-7.5 7.5-7.5h129.3c4.2 0 7.5 3.4 7.5 7.5 0 4.2-3.4 7.5-7.5 7.5H237.3c-4.2 0-7.5-3.3-7.5-7.5z"
              />
              <path
                className="mobile-frame"
                fill="none"
                stroke="#66BB6A"
                strokeWidth={2}
                d="M480 147.5H120v640h360v-640z"
              />
              <rect
                id="screenBg"
                x={121}
                y={149}
                width={358}
                height={638}
                fill="#1ba6f9"
                clipPath="url(#screenMask)"
              />
              {/* <g id="header" transform="translate(121 166)">
                <path fillOpacity=".5" id="Path_265" d="M0,0H358V95H0Z" />
              </g> */}
              {/* header */}
              <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#screenMask)">
                <path fill="#F5F5F5" d="M121 172.5h360v-24H121v24z" />
                <path
                  fill="#616161"
                  fillOpacity=".9"
                  d="M434 154.5h-1v-1h-4v1h-1c-.6 0-1 .4-1 1v10.1c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-10.1c0-.6-.4-1-1-1zm-29.8 12.1h9v-9.1c0 .1-9 9.1-9 9.1zm12-12.1l-3 3v9.1h3v-12.1zm-30.9 2l6.7 10.1 6.7-10.1c-1.4-1.2-4.8-2.1-6.7-2.1s-5.3 1-6.7 2.1z"
                />
              </g>{" "}
              {/* status bar */}
              <g id="clock" transform="translate(121 166)">
                <text
                  id="status_clock_wrapper"
                  fill="#555"
                  fontFamily="Roboto"
                  fontSize={14}
                  x={326}
                >
                  <tspan id="status_clock">9:30</tspan>
                </text>
              </g>
              <g id="app-title" transform="translate(121 440)">
                <text
                  fontSize={18}
                  fill="#eee"
                  family="Roboto"
                  transform="translate(120 40)"
                >
                  <tspan x={0} y={0} fontSize={45}>
                    Mobile
                  </tspan>
                </text>
              </g>{" "}
              {/* app-title */} {/* nav-tabs */}
              <g className="avatar-wrapper" clipPath="url(#screenMask)"></g>
              <g id="footer" /> footer
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

Mobile.propTypes = {};

export default Mobile;
