'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = exports.Footer = exports.Stage = exports.Theatre = undefined;

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/PDGP/Development/GitHub/patrickpuritscher.com-next/layouts/Main/index.js';
var Theatre = exports.Theatre = function Theatre(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-3059782316',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: '651932133',
    css: 'div.jsx-3059782316{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHcUIsWUFDQywwRUFDUyw4RUFDSCw2RkFDRixpQkFDbkIiLCJmaWxlIjoibGF5b3V0cy9NYWluL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QREdQL0RldmVsb3BtZW50L0dpdEh1Yi9wYXRyaWNrcHVyaXRzY2hlci5jb20tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBUaGVhdHJlID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAqLFxuICAgICAgKjpiZWZvcmUsXG4gICAgICAqOmFmdGVyIHtcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5UaGVhdHJlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5leHBvcnQgY29uc3QgU3RhZ2UgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuU3RhZ2UucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5lID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5TY2VuZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn0iXX0= */\n/*@ sourceURL=layouts/Main/index.js */'
  }), _react2.default.createElement(_style2.default, {
    styleId: '1257995296',
    css: 'html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{width:100%;min-width:320px;margin:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIsQUFHK0IsQUFLSCxBQUdSLFdBQ0ssUUFIbEIsR0FMQSxLQVNXLFNBQ1giLCJmaWxlIjoibGF5b3V0cy9NYWluL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QREdQL0RldmVsb3BtZW50L0dpdEh1Yi9wYXRyaWNrcHVyaXRzY2hlci5jb20tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBUaGVhdHJlID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAqLFxuICAgICAgKjpiZWZvcmUsXG4gICAgICAqOmFmdGVyIHtcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5UaGVhdHJlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5leHBvcnQgY29uc3QgU3RhZ2UgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuU3RhZ2UucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5lID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5TY2VuZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn0iXX0= */\n/*@ sourceURL=layouts/Main/index.js */'
  }));
};

Theatre.propTypes = {
  children: _propTypes2.default.node
};

var Stage = exports.Stage = function Stage(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-1695338880',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: '1695338880',
    css: '.jsx-1695338880{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2dCLEFBRXFCLHNEQUNELDBFQUNGLFdBQ1csOEVBQ0gsNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6ImxheW91dHMvTWFpbi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUERHUC9EZXZlbG9wbWVudC9HaXRIdWIvcGF0cmlja3B1cml0c2NoZXIuY29tLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVGhlYXRyZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGh0bWwge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgKixcbiAgICAgICo6YmVmb3JlLFxuICAgICAgKjphZnRlciB7XG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuVGhlYXRyZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGNvbnN0IFN0YWdlID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblN0YWdlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuU2NlbmUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59Il19 */\n/*@ sourceURL=layouts/Main/index.js */'
  }));
};

Stage.propTypes = {
  children: _propTypes2.default.node
};

var Footer = exports.Footer = function Footer(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-628348228',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: '628348228',
    css: '.jsx-628348228{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGdCLEFBRXFCLHNEQUNELDBFQUNGLFdBQ1EscUVBQ0EsNkZBQ3JCIiwiZmlsZSI6ImxheW91dHMvTWFpbi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUERHUC9EZXZlbG9wbWVudC9HaXRIdWIvcGF0cmlja3B1cml0c2NoZXIuY29tLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVGhlYXRyZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGh0bWwge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgKixcbiAgICAgICo6YmVmb3JlLFxuICAgICAgKjphZnRlciB7XG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuVGhlYXRyZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGNvbnN0IFN0YWdlID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblN0YWdlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuZSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuU2NlbmUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59Il19 */\n/*@ sourceURL=layouts/Main/index.js */'
  }));
};

Footer.propTypes = {
  children: _propTypes2.default.node
};

var Scene = exports.Scene = function Scene(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-3235180329',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, props.children, _react2.default.createElement(_style2.default, {
    styleId: '3235180329',
    css: 'div.jsx-3235180329{max-width:640px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 1rem;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWdCLEFBR3lCLGdCQUNMLFdBQ0UsMEVBQ0UsZUFDTyw4RUFDeEIiLCJmaWxlIjoibGF5b3V0cy9NYWluL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9QREdQL0RldmVsb3BtZW50L0dpdEh1Yi9wYXRyaWNrcHVyaXRzY2hlci5jb20tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBUaGVhdHJlID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAqLFxuICAgICAgKjpiZWZvcmUsXG4gICAgICAqOmFmdGVyIHtcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5UaGVhdHJlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5leHBvcnQgY29uc3QgU3RhZ2UgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuU3RhZ2UucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5lID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5TY2VuZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn0iXX0= */\n/*@ sourceURL=layouts/Main/index.js */'
  }));
};

Scene.propTypes = {
  children: _propTypes2.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvTWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJUaGVhdHJlIiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIm5vZGUiLCJTdGFnZSIsIkZvb3RlciIsIlNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7QUFBTyxJQUFNLDRCQUFVLFNBQVYsQUFBVSxlQUFBO3lCQUNyQixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsUUFBQSxBQUNTO2FBRFQ7U0FBQTtBQUFBO2FBQUE7U0FEcUIsQUFDckI7QUFBQTtBQURLOztBQThCUCxRQUFBLEFBQVE7WUFDSSxvQkFEWixBQUFvQixBQUNFLEFBR3RCO0FBSm9CLEFBQ2xCOztBQUdLLElBQU0sd0JBQVEsU0FBUixBQUFRLGFBQUE7eUJBQ25CLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxRQUFBLEFBQ1M7YUFEVDtTQURtQixBQUNuQjtBQUFBO0FBREs7O0FBY1AsTUFBQSxBQUFNO1lBQ00sb0JBRFosQUFBa0IsQUFDSSxBQUd0QjtBQUprQixBQUNoQjs7QUFHSyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxjQUFBO3lCQUNwQixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsUUFBQSxBQUNTO2FBRFQ7U0FEb0IsQUFDcEI7QUFBQTtBQURLOztBQWFQLE9BQUEsQUFBTztZQUNLLG9CQURaLEFBQW1CLEFBQ0csQUFHdEI7QUFKbUIsQUFDakI7O0FBR0ssSUFBTSx3QkFBUSxTQUFSLEFBQVEsYUFBQTt5QkFDbkIsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLFFBQUEsQUFDUzthQURUO1NBRG1CLEFBQ25CO0FBQUE7QUFESzs7QUFlUCxNQUFBLEFBQU07WUFDTSxvQkFEWixBQUFrQixBQUNJO0FBREosQUFDaEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BER1AvRGV2ZWxvcG1lbnQvR2l0SHViL3BhdHJpY2twdXJpdHNjaGVyLmNvbS1uZXh0In0=