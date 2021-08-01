System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./baseItem"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Size, BaseItem, _dec, _class, _crd, ccclass, property, Vertical;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfBaseItem(extras) {
    _reporterNs.report("BaseItem", "./baseItem", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Size = _cc.Size;
    }, function (_baseItem) {
      BaseItem = _baseItem.BaseItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea9d1sCNmFIY78k1DtEu0xO", "vertical", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Vertical", Vertical = (_dec = ccclass('Vertical'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Vertical, _ref);

        function Vertical() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = Vertical.prototype;

        _proto.onLoad = function onLoad() {
          var _this$transform;

          this.input.placeholder = (_this$transform = this.transform) === null || _this$transform === void 0 ? void 0 : _this$transform.height.toString();
        };

        _proto.onInput = function onInput() {
          var _this$transform2;

          if (isNaN(Number(this.input.string))) return;
          (_this$transform2 = this.transform) === null || _this$transform2 === void 0 ? void 0 : _this$transform2.setContentSize(new Size(this.transform.contentSize.width, Number(this.input.string)));
        };

        return Vertical;
      }(_crd && BaseItem === void 0 ? (_reportPossibleCrUseOfBaseItem({
        error: Error()
      }), BaseItem) : BaseItem)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=vertical.js.map