"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Countodown = _ref => {
  let {
    expire,
    setExpired,
    expireDate
  } = _ref;
  const calculateTimeLeft = () => {
    const difference = +new Date(expireDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    } else {
      setExpired(true);
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = (0, _react.useState)(calculateTimeLeft());

  //const [timeLeft, setTimeLeft] = useState(timeLeftProp);

  (0, _react.useEffect)(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, i) => {
    /*
    <if (!timeLeft[interval]) {
      return;
    }
    */
    timerComponents.push( /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      className: "countdownbanner__cell"
    }, /*#__PURE__*/_react.default.createElement("div", null, timeLeft[interval]), /*#__PURE__*/_react.default.createElement("div", null, interval, " "), /*#__PURE__*/_react.default.createElement("style", {
      jsx: true
    }, "\n        .countdownbanner__cell {\n          background-color: #fff;\n          border-radius: 8px;\n          width: 80px;\n          height: 80px;\n          display: flex;\n          flex-direction: column;\n          margin: 6px;\n          align-items: center;\n          justify-content: center;\n          font-size: 18px;\n\n\n\n        }\n        @media (max-width: 768px) {\n          .countdownbanner__cell {\n            font-size: 14px;\n            width: 56px;\n            height: 56px;\n            margin: 3px;\n          }\n        }\n\n      ")));
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "countdownbanner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "countdownbanner-timer"
  }, timerComponents.length ? timerComponents : /*#__PURE__*/_react.default.createElement("span", {
    className: "expired"
  }, "Time's up!"))), /*#__PURE__*/_react.default.createElement("style", {
    jsx: true
  }, "\n\n        .countdownbanner {\n          text-align: center;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 12px;\n        }\n\n        @media (max-width: 768px) {\n          .countdownbanner {\n            padding: 0;\n          }\n        }\n\n        .countdownbanner-logo {\n          height: 40vmin;\n          pointer-events: none;\n        }\n\n        @media (prefers-reduced-motion: no-preference) {\n          .countdownbanner-logo {\n            animation: countdownbanner-logo-spin infinite 20s linear;\n          }\n        }\n\n        .countdownbanner-header {\n          background-color: #282c34;\n          min-height: 100vh;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          font-size: calc(10px + 2vmin);\n          color: white;\n        }\n\n        .countdownbanner-link {\n          color: #61dafb;\n        }\n\n        @keyframes countdownbanner-logo-spin {\n          from {\n            transform: rotate(0deg);\n          }\n\n          to {\n            transform: rotate(360deg);\n          }\n        }\n\n        .countdownbanner-timer {\n          display: flex;\n          margin: 0 auto;\n        }\n\n        .countdownbannercell {\n          background-color: #fff;\n          border-radius: 8px;\n          width: 64px;\n          height: 64px;\n          display: flex;\n          flex-direction: column;\n          margin: 6px;\n          align-items: center;\n          justify-content: center;\n          font-size: 42px;\n        }\n\n      "));
};
var _default = Countodown;
exports.default = _default;