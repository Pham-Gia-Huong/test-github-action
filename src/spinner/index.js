var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, svg, property } from "lit-element";
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner(props) {
        var _this = _super.call(this) || this;
        _this.text = "";
        if (!props) {
            return _this;
        }
        _this.text = props.text !== undefined ? props.text : _this.text;
        return _this;
    }
    Spinner.prototype._getSpinnerSvgTemplate = function () {
        return svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <svg\n        class=\"kuc-spinner__spinner__loader\"\n        viewBox=\"0 0 50 50\"\n        aria-hidden=\"true\"\n      >\n        <circle r=\"4\" cx=\"30.43\" cy=\"4.72\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"39.85\" cy=\"10.15\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"45.28\" cy=\"19.56\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"45.28\" cy=\"30.43\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"39.85\" cy=\"39.85\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"30.44\" cy=\"45.28\" opacity=\"0.4\" />\n        <circle r=\"4\" cx=\"19.56\" cy=\"45.28\" opacity=\"0.5\" />\n        <circle r=\"4\" cx=\"10.15\" cy=\"39.85\" opacity=\"0.6\" />\n        <circle r=\"4\" cx=\"4.7\" cy=\"30.44\" opacity=\"0.7\" />\n        <circle r=\"4\" cx=\"4.7\" cy=\"19.56\" opacity=\"0.8\" />\n        <circle r=\"4\" cx=\"10.15\" cy=\"10.15\" opacity=\"0.9\" />\n        <circle r=\"4\" cx=\"19.56\" cy=\"4.72\" opacity=\"1\" />\n      </svg>\n    "], ["\n      <svg\n        class=\"kuc-spinner__spinner__loader\"\n        viewBox=\"0 0 50 50\"\n        aria-hidden=\"true\"\n      >\n        <circle r=\"4\" cx=\"30.43\" cy=\"4.72\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"39.85\" cy=\"10.15\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"45.28\" cy=\"19.56\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"45.28\" cy=\"30.43\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"39.85\" cy=\"39.85\" opacity=\"0.3\" />\n        <circle r=\"4\" cx=\"30.44\" cy=\"45.28\" opacity=\"0.4\" />\n        <circle r=\"4\" cx=\"19.56\" cy=\"45.28\" opacity=\"0.5\" />\n        <circle r=\"4\" cx=\"10.15\" cy=\"39.85\" opacity=\"0.6\" />\n        <circle r=\"4\" cx=\"4.7\" cy=\"30.44\" opacity=\"0.7\" />\n        <circle r=\"4\" cx=\"4.7\" cy=\"19.56\" opacity=\"0.8\" />\n        <circle r=\"4\" cx=\"10.15\" cy=\"10.15\" opacity=\"0.9\" />\n        <circle r=\"4\" cx=\"19.56\" cy=\"4.72\" opacity=\"1\" />\n      </svg>\n    "])));
    };
    Spinner.prototype.open = function () {
        var body = document.getElementsByTagName("BODY")[0];
        body.appendChild(this);
    };
    Spinner.prototype.close = function () {
        this.parentNode && this.parentNode.removeChild(this);
    };
    Spinner.prototype.createRenderRoot = function () {
        return this;
    };
    Spinner.prototype.render = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      <div class=\"kuc-spinner__spinner\" aria-live=\"assertive\" role=\"alert\">\n        ", "\n        <div\n          class=\"", "\"\n        >\n          ", "\n        </div>\n      </div>\n      <div class=\"kuc-spinner__mask\"></div>\n    "], ["\n      ", "\n      <div class=\"kuc-spinner__spinner\" aria-live=\"assertive\" role=\"alert\">\n        ", "\n        <div\n          class=\"",
            "\"\n        >\n          ", "\n        </div>\n      </div>\n      <div class=\"kuc-spinner__mask\"></div>\n    "])), this._getStyleTagTemplate(), this._getSpinnerSvgTemplate(), !this.text
            ? "kuc-spinner__spinner__text visually-hidden"
            : "kuc-spinner__spinner__text", !this.text ? "now loading…" : this.text);
    };
    Spinner.prototype._getStyleTagTemplate = function () {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <style>\n        kuc-spinner,\n        kuc-spinner *,\n        :lang(en) kuc-spinner,\n        :lang(en) kuc-spinner * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-spinner,\n        :lang(ja) kuc-spinner * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-spinner,\n        :lang(zh) kuc-spinner * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-spinner {\n          font-size: 14px;\n          color: #333333;\n        }\n        .kuc-spinner__spinner {\n          position: fixed;\n          top: 0;\n          left: 0;\n          z-index: 10000;\n          width: 100%;\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        .kuc-spinner__spinner__loader {\n          width: 50px;\n          height: 50px;\n          animation: rotate-loading 1s steps(12) infinite;\n          fill: #99ccff;\n        }\n        .kuc-spinner__spinner__text {\n          margin: 10px 0;\n        }\n        .visually-hidden {\n          position: absolute;\n          white-space: nowrap;\n          width: 1px;\n          height: 1px;\n          overflow: hidden;\n          border: 0;\n          padding: 0;\n          clip: rect(0 0 0 0);\n          clip-path: inset(50%);\n          margin: -1px;\n        }\n        .kuc-spinner__mask {\n          position: absolute;\n          top: 0;\n          right: 0;\n          display: block;\n          width: 100%;\n          height: 100%;\n          background-color: #666666;\n          opacity: 0.6;\n          z-index: 9999;\n        }\n        @keyframes rotate-loading {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-spinner,\n        kuc-spinner *,\n        :lang(en) kuc-spinner,\n        :lang(en) kuc-spinner * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-spinner,\n        :lang(ja) kuc-spinner * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-spinner,\n        :lang(zh) kuc-spinner * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-spinner {\n          font-size: 14px;\n          color: #333333;\n        }\n        .kuc-spinner__spinner {\n          position: fixed;\n          top: 0;\n          left: 0;\n          z-index: 10000;\n          width: 100%;\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        .kuc-spinner__spinner__loader {\n          width: 50px;\n          height: 50px;\n          animation: rotate-loading 1s steps(12) infinite;\n          fill: #99ccff;\n        }\n        .kuc-spinner__spinner__text {\n          margin: 10px 0;\n        }\n        .visually-hidden {\n          position: absolute;\n          white-space: nowrap;\n          width: 1px;\n          height: 1px;\n          overflow: hidden;\n          border: 0;\n          padding: 0;\n          clip: rect(0 0 0 0);\n          clip-path: inset(50%);\n          margin: -1px;\n        }\n        .kuc-spinner__mask {\n          position: absolute;\n          top: 0;\n          right: 0;\n          display: block;\n          width: 100%;\n          height: 100%;\n          background-color: #666666;\n          opacity: 0.6;\n          z-index: 9999;\n        }\n        @keyframes rotate-loading {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], Spinner.prototype, "text", void 0);
    return Spinner;
}(LitElement));
export { Spinner };
if (!window.customElements.get("kuc-spinner")) {
    window.customElements.define("kuc-spinner", Spinner);
}
var templateObject_1, templateObject_2, templateObject_3;
