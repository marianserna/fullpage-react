'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var utils = require('../utils');
var renderUtils = utils.renderUtils;
var defaultClass = renderUtils.defaultClass;

var Slide = function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide(props) {
    _classCallCheck(this, Slide);

    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props));

    _this.name = 'Slide';
    return _this;
  }

  _createClass(Slide, [{
    key: 'render',
    value: function render() {
      var style = Object.assign({ overflow: 'hidden', width: '100%', height: window.innerHeight }, this.props.style);
      var attrs = {
        'data-slide': this.props.horizontal ? 'HorizontalSlider' : 'Fullpage'
      };

      return React.createElement(
        'div',
        _extends({ className: defaultClass.call(this) }, attrs, { style: style }),
        this.props.children
      );
    }
  }]);

  return Slide;
}(React.Component);

Slide.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  horizontal: React.PropTypes.bool
};

module.exports = Slide;