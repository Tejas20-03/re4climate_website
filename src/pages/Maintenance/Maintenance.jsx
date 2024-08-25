import React from "react";
import "./maintenance.css";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <div className="container maintenance-container">
      <div className="row">
        <div className="col-md-6">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>Temporarily down for maintenance</h2>
            <h1>We’ll be back soon!</h1>
            <div>
              <p>
                Sorry for the inconvenience but we’re performing some
                maintenance at the moment. We’ll be back online shortly!
              </p>
              <p>— The Team</p>
            </div>
            <div className="error-actions">
              <Link to="/" className="btn btn-info btn-lg">
                Take Me Home
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <svg
            className="svg-box"
            width="380px"
            height="500px"
            viewBox="0 0 837 1045"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <path
                d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
                stroke="#3bafda"
                strokeWidth={6}
              />
              <path
                d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
                stroke="#7266ba"
                strokeWidth={6}
              />
              <path
                d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
                stroke="#f76397"
                strokeWidth={6}
              />
              <path
                d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
                stroke="#00b19d"
                strokeWidth={6}
              />
              <path
                d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
                stroke="#ffaa00"
                strokeWidth={6}
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
