"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/PDGP/Development/GitHub/patrickpuritscher.com-next/components/Card.js";

var borderRadius = '10px';
var letterSpacing = function letterSpacing(pointSize, tracking) {
  return pointSize * tracking / 1000;
};

exports.default = function () {
  return _react2.default.createElement("div", {
    className: "jsx-2008627875" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("div", {
    className: "jsx-2008627875" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("div", {
    className: "jsx-2008627875" + " " + "headerImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("h1", {
    className: "jsx-2008627875" + " " + "headerTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Patrick Puritscher")), _react2.default.createElement("div", {
    className: "jsx-2008627875" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("p", {
    className: "jsx-2008627875" + " " + "bodyText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Master's student in business information management. Creating software for people to make their life easier, rather than confusing it through poor UX."), _react2.default.createElement("p", {
    className: "jsx-2008627875" + " " + "bodyText bodyText__small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Stuttgart, Germany")), _react2.default.createElement("div", {
    className: "jsx-2008627875" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("a", { href: "https://github.com/Purii", className: "jsx-2008627875" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "GitHub"), _react2.default.createElement("a", {
    href: "https://twitter.com/whoispurii",
    className: "jsx-2008627875" + " " + "button button__twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Twitter")), _react2.default.createElement(_style2.default, {
    styleId: "2008627875",
    css: ".card.jsx-2008627875{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-shrink:0;flex-shrink:0;width:340px;background-color:#343d46;border-radius:10px;box-shadow:0 0 5px 3px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.1);-webkit-transition-property:width;transition-property:width;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;margin:20px 0;}@media (max-width:350px){.card.jsx-2008627875{width:300px;}}.header.jsx-2008627875{border-top-left-radius:" + borderRadius + ";border-top-right-radius:" + borderRadius + ";}.headerImage.jsx-2008627875{background-image:url(https://avatars0.githubusercontent.com/u/7056989);background-size:cover;background-position:-0px -40px;height:150px;border-top-left-radius:" + borderRadius + ";border-top-right-radius:" + borderRadius + ";}.headerTitle.jsx-2008627875{display:inline-block;background-color:rgba(199,199,199,0.97);font-family:'SF Pro Display','SF Pro Icons','Helvetica Neue', 'Helvetica','Arial',sans-serif;margin-top:-5px;margin-bottom:0;padding-right:20px;padding-left:15px;padding-top:10px;padding-bottom:10px;font-weight:200;color:#4e4e4e;font-size:24px;-webkit-letter-spacing:" + letterSpacing(24, 15) + "px;-moz-letter-spacing:" + letterSpacing(24, 15) + "px;-ms-letter-spacing:" + letterSpacing(24, 15) + "px;letter-spacing:" + letterSpacing(24, 15) + "px;text-transform:uppercase;}.body.jsx-2008627875{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.bodyText.jsx-2008627875{padding:0;margin-left:25px;margin-right:25px;color:#fff;font-weight:400;text-align:center;line-height:1.6em;font-size:15px;-webkit-letter-spacing:" + letterSpacing(15, -16) + "px;-moz-letter-spacing:" + letterSpacing(15, -16) + "px;-ms-letter-spacing:" + letterSpacing(15, -16) + "px;letter-spacing:" + letterSpacing(15, -16) + "px;margin-top:15px;margin-bottom:10px;}.bodyText__small.jsx-2008627875{margin-top:0;font-size:13px;-webkit-letter-spacing:" + letterSpacing(13, -6) + "px;-moz-letter-spacing:" + letterSpacing(13, -6) + "px;-ms-letter-spacing:" + letterSpacing(13, -6) + "px;letter-spacing:" + letterSpacing(13, -6) + "px;color:#f8f8f8;}.footer.jsx-2008627875{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-top:2px solid rgb(92,92,92);border-bottom-left-radius:" + borderRadius + ";border-bottom-right-radius:" + borderRadius + ";overflow:hidden;}.button.jsx-2008627875{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:2;color:#fff;text-decoration:none;background-color:#434343;text-align:center;font-size:16px;-webkit-letter-spacing:" + letterSpacing(16, -20) + "px;-moz-letter-spacing:" + letterSpacing(16, -20) + "px;-ms-letter-spacing:" + letterSpacing(16, -20) + "px;letter-spacing:" + letterSpacing(16, -20) + "px;}.button.jsx-2008627875:hover{background-color:#313131;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;margin-top:-1px;}.button__twitter.jsx-2008627875{background-color:rgba(85,172,238,0.83);}.button__twitter.jsx-2008627875:hover{background-color:#292f33;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdCLEFBR3NCLEFBZUMsQUFJc0MsQUFJbUIsQUFRbEQsQUFpQlIsQUFLSCxBQWFHLEFBTUEsQUFRQyxBQVVXLEFBUWlCLEFBR2pCLFVBL0NSLEVBdENqQixDQW1EZSxRQW5DNEIsSUEyRG5CLEFBVzFCLEVBL0NvQixDQWE0QixXQStCaEQsTUEzQ2EsT0FwQzBDLEVBNkR2QyxFQXhCRSxLQXZCa0IsT0FnRHZCLEdBMURXLENBa0NKLEVBekRJLEFBZ0RBLEFBd0JlLEtBVWhCLEVBU0ksU0FqQ1AsR0FsQ2EsT0EyRE4sS0EvRDNCLEdBdUNpQixDQWN3QyxjQWJULENBbkNqQyxDQTJESyxZQTFEa0MsRUFrRWIsSUFQeEIsU0FwRkQsQUFnRFMsRUFmUCxJQW9EOEIsTUFaVSxNQXZDeEMsZ0JBQ0csR0FUa0MsZ0JBVW5DLENBbkNOLFlBQ2EsRUF3RVQsR0FyQ0MsRUF1REQsSUF6QkYsT0FRaEIsSUFyQ3NCLENBdUR0QixDQWxFQSxDQXhCcUIsQUFpRXJCLFFBbkJBLFNBVmtCLEVBbENnQixjQW1DbEIsY0FDQyxlQUMrQixtQkFrQjlCLE1BdERVLFVBdURQLG1CQUNyQixBQXdCQSwrQkEvRTJCLDBEQUNjLDBEQW1DZCx5QkFDM0IsR0FuQ2dCLGNBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUERHUC9EZXZlbG9wbWVudC9HaXRIdWIvcGF0cmlja3B1cml0c2NoZXIuY29tLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib3JkZXJSYWRpdXMgPSAnMTBweCc7XG5jb25zdCBsZXR0ZXJTcGFjaW5nID0gKHBvaW50U2l6ZSwgdHJhY2tpbmcpID0+IHBvaW50U2l6ZSAqIHRyYWNraW5nIC8gMTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJJbWFnZVwiIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyVGl0bGVcIj5QYXRyaWNrIFB1cml0c2NoZXI8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keVRleHRcIj5cbiAgICAgICAgTWFzdGVyJmFwb3M7cyBzdHVkZW50IGluIGJ1c2luZXNzIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQuIENyZWF0aW5nIHNvZnR3YXJlXG4gICAgICAgIGZvciBwZW9wbGUgdG8gbWFrZSB0aGVpciBsaWZlIGVhc2llciwgcmF0aGVyIHRoYW4gY29uZnVzaW5nIGl0IHRocm91Z2hcbiAgICAgICAgcG9vciBVWC5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImJvZHlUZXh0IGJvZHlUZXh0X19zbWFsbFwiPlN0dXR0Z2FydCwgR2VybWFueTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9QdXJpaVwiPlxuICAgICAgICBHaXRIdWJcbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX3R3aXR0ZXJcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS93aG9pc3B1cmlpXCJcbiAgICAgID5cbiAgICAgICAgVHdpdHRlclxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jYXJkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIHdpZHRoOiAzNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2Q0NjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgICAgICAgIDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR7Ym9yZGVyUmFkaXVzfTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR7Ym9yZGVyUmFkaXVzfTtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXJJbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzcwNTY5ODkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC00MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke2JvcmRlclJhZGl1c307XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke2JvcmRlclJhZGl1c307XG4gICAgICB9XG4gICAgICAuaGVhZGVyVGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk5LCAxOTksIDE5OSwgMC45Nyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknLCAnU0YgUHJvIEljb25zJywgJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgICAgICAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGNvbG9yOiAjNGU0ZTRlO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAke2xldHRlclNwYWNpbmcoMjQsIDE1KX1weDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIC5ib2R5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuYm9keVRleHQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6ICR7bGV0dGVyU3BhY2luZygxNSwgLTE2KX1weDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIC5ib2R5VGV4dF9fc21hbGwge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAke2xldHRlclNwYWNpbmcoMTMsIC02KX1weDtcbiAgICAgICAgY29sb3I6ICNmOGY4Zjg7XG4gICAgICB9XG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYig5MiwgOTIsIDkyKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHtib3JkZXJSYWRpdXN9O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHtib3JkZXJSYWRpdXN9O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6ICR7bGV0dGVyU3BhY2luZygxNiwgLTIwKX1weDtcbiAgICAgIH1cbiAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTMxO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbl9fdHdpdHRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDE3MiwgMjM4LCAwLjgzKTtcbiAgICAgIH1cbiAgICAgIC5idXR0b25fX3R3aXR0ZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyZjMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/Card.js */"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJib3JkZXJSYWRpdXMiLCJsZXR0ZXJTcGFjaW5nIiwicG9pbnRTaXplIiwidHJhY2tpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sZUFBTixBQUFxQjtBQUNyQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsV0FBRCxBQUFZLFVBQVo7U0FBeUIsWUFBQSxBQUFZLFdBQXJDLEFBQWdEO0FBQXRFLEFBRUE7O2tCQUFlLFlBQUE7eUJBQ2IsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUE7d0NBQ0UsQUFBZTs7Z0JBQWY7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBO3dDQUFBLEFBQWM7O2dCQUFkO2tCQUFBO0FBQUE7QUFBQSxLQUhKLEFBQ0UsQUFFRSxBQUVGLHdDQUFBLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFhOztnQkFBYjtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBS0EsMktBQUEsY0FBQTt3Q0FBQSxBQUFhOztnQkFBYjtrQkFBQTtBQUFBO0FBQUEsS0FYSixBQUtFLEFBTUUsQUFFRix3Q0FBQSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBc0IsTUFBdEIsQUFBMkIsZ0VBQTNCLEFBQWE7O2dCQUFiO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBR0EsMkJBQUEsY0FBQTtVQUFBLEFBRU87d0NBRlAsQUFDWTs7Z0JBRFo7a0JBQUE7QUFBQTtBQUVFLEtBbkJOLEFBYUUsQUFJRTthQWpCSjtrckJBQUEsQUE2Q2dDLDZDQTdDaEMsQUE4Q2lDLGtOQTlDakMsQUFxRGdDLDZDQXJEaEMsQUFzRGlDLDBYQWdCVCxjQUFBLEFBQWMsSUF0RXRDLEFBc0V3QixBQUFrQixrQ0FBbEIsY0FBQSxBQUFjLElBdEV0QyxBQXNFd0IsQUFBa0IsaUNBQWxCLGNBQUEsQUFBYyxJQXRFdEMsQUFzRXdCLEFBQWtCLDZCQUFsQixjQUFBLEFBQWMsSUF0RXRDLEFBc0V3QixBQUFrQixvZUFpQmxCLGNBQUEsQUFBYyxJQUFJLENBdkYxQyxBQXVGd0IsQUFBbUIsa0NBQW5CLGNBQUEsQUFBYyxJQUFJLENBdkYxQyxBQXVGd0IsQUFBbUIsaUNBQW5CLGNBQUEsQUFBYyxJQUFJLENBdkYxQyxBQXVGd0IsQUFBbUIsNkJBQW5CLGNBQUEsQUFBYyxJQUFJLENBdkYxQyxBQXVGd0IsQUFBbUIscUlBT25CLGNBQUEsQUFBYyxJQUFJLENBOUYxQyxBQThGd0IsQUFBbUIsaUNBQW5CLGNBQUEsQUFBYyxJQUFJLENBOUYxQyxBQThGd0IsQUFBbUIsZ0NBQW5CLGNBQUEsQUFBYyxJQUFJLENBOUYxQyxBQThGd0IsQUFBbUIsNEJBQW5CLGNBQUEsQUFBYyxJQUFJLENBOUYxQyxBQThGd0IsQUFBbUIsMExBOUYzQyxBQW9HbUMsZ0RBcEduQyxBQXFHb0Msa1BBWVosY0FBQSxBQUFjLElBQUksQ0FqSDFDLEFBaUh3QixBQUFtQixrQ0FBbkIsY0FBQSxBQUFjLElBQUksQ0FqSDFDLEFBaUh3QixBQUFtQixpQ0FBbkIsY0FBQSxBQUFjLElBQUksQ0FqSDFDLEFBaUh3QixBQUFtQiw2QkFBbkIsY0FBQSxBQUFjLElBQUksQ0FqSDFDLEFBaUh3QixBQUFtQixNQWxIOUIsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUERHUC9EZXZlbG9wbWVudC9HaXRIdWIvcGF0cmlja3B1cml0c2NoZXIuY29tLW5leHQifQ==