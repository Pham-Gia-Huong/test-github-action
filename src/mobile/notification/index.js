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
import { LitElement, html, svg, property, query } from "lit-element";
var MobileNotification = /** @class */ (function (_super) {
    __extends(MobileNotification, _super);
    function MobileNotification(props) {
        var _this = _super.call(this) || this;
        _this.text = "";
        _this.performUpdate();
        if (!props) {
            return _this;
        }
        _this.className =
            props.className !== undefined ? props.className : _this.className;
        _this.text = props.text !== undefined ? props.text : _this.text;
        return _this;
    }
    MobileNotification.prototype._handleClickCloseButton = function (event) {
        this.close();
    };
    MobileNotification.prototype._getCloseButtonSvgTemplate = function () {
        return svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <svg\n      height=\"12\"\n      width=\"12\" \n      viewBox=\"0 0 512.001 512.001\" \n      xmlns=\"http://www.w3.org/2000/svg\">\n        <g>\n          <path \n            d=\"m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z\"/>\n        </g>\n      </svg>\n    "], ["\n    <svg\n      height=\"12\"\n      width=\"12\" \n      viewBox=\"0 0 512.001 512.001\" \n      xmlns=\"http://www.w3.org/2000/svg\">\n        <g>\n          <path \n            d=\"m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z\"/>\n        </g>\n      </svg>\n    "])));
    };
    MobileNotification.prototype.createRenderRoot = function () {
        return this;
    };
    MobileNotification.prototype.open = function () {
        this.classList.add("kuc-mobile-notification-fadein");
        this.classList.remove("kuc-mobile-notification-fadeout");
        this._notificationTitleEl.setAttribute("role", "alert");
    };
    MobileNotification.prototype.close = function () {
        this.classList.add("kuc-mobile-notification-fadeout");
        this.classList.remove("kuc-mobile-notification-fadein");
        this._notificationTitleEl.removeAttribute("role");
    };
    MobileNotification.prototype.firstUpdated = function () {
        document.body.appendChild(this);
    };
    MobileNotification.prototype.render = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      <div class=\"kuc-mobile-notification__notification\">\n        <p\n          class=\"kuc-mobile-notification__notification__title\"\n          aria-live=\"assertive\"\n        >\n          ", "\n        </p>\n        <button\n          class=\"kuc-mobile-notification__notification__closeButton\"\n          type=\"button\"\n          aria-label=\"close\"\n          @click=\"", "\"\n        >\n          ", "\n        </button>\n      </div>\n    "], ["\n      ", "\n      <div class=\"kuc-mobile-notification__notification\">\n        <p\n          class=\"kuc-mobile-notification__notification__title\"\n          aria-live=\"assertive\"\n        >\n          ", "\n        </p>\n        <button\n          class=\"kuc-mobile-notification__notification__closeButton\"\n          type=\"button\"\n          aria-label=\"close\"\n          @click=\"", "\"\n        >\n          ", "\n        </button>\n      </div>\n    "])), this._getStyleTagTemplate(), this.text, this._handleClickCloseButton, this._getCloseButtonSvgTemplate());
    };
    MobileNotification.prototype._getStyleTagTemplate = function () {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <style>\n        kuc-mobile-notification {\n          display: block;\n          font-size: 13px;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n          visibility: hidden;\n          animation-fill-mode: forwards;\n          position: relative;\n          top: -100px;\n          left: 0;\n        }\n\n        :lang(zh) kuc-mobile-notification,\n        :lang(zh) kuc-mobile-notification * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n\n        .kuc-mobile-notification-fadein {\n          animation-name: kuc-mobile-notification-fade-in;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n          width: 100%;\n          position: fixed;\n          visibility: visible;\n        }\n\n        .kuc-mobile-notification-fadeout {\n          animation-name: kuc-mobile-notification-fade-out;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n          width: 100%;\n          position: fixed;\n        }\n\n        .kuc-mobile-notification__notification {\n          background-color: #ffffcf;\n          background: linear-gradient(#ffda4a, #ffc32c);\n          width: 100%;\n          min-height: 48px;\n          z-index: 20;\n          font-size: 12px;\n          font-weight: 700;\n          line-height: 14px;\n          text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n          color: #333;\n          text-align: center;\n          vertical-align: top;\n        }\n\n        .kuc-mobile-notification__notification__title {\n          display: inline-block;\n          vertical-align: middle;\n          word-break: break-word;\n          padding: 17px 44px 11px 44px;\n          margin-left: -20px;\n          max-width: 500px;\n          text-align: left;\n        }\n\n        .kuc-mobile-notification__notification__closeButton {\n          position: absolute;\n          right: 0;\n          top: 0;\n          width: 44px;\n          height: 48px;\n          padding: 0;\n          background-color: transparent;\n          border: none;\n          vertical-align: middle;\n          pointer-events: auto;\n          outline: none;\n        }\n        @keyframes kuc-mobile-notification-fade-in {\n          0% {\n            top: -100px;\n            left: 0;\n          }\n          50% {\n            top: -50px;\n            left: 0;\n          }\n          100% {\n            top: 0;\n            left: 0;\n          }\n        }\n        @keyframes kuc-mobile-notification-fade-out {\n          0% {\n            visibility: visible;\n            top: 0;\n            left: 0;\n          }\n          50% {\n            visibility: visible;\n            top: -50px;\n            left: 0;\n          }\n          100% {\n            top: -100px;\n            left: 0;\n          }\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-mobile-notification {\n          display: block;\n          font-size: 13px;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n          visibility: hidden;\n          animation-fill-mode: forwards;\n          position: relative;\n          top: -100px;\n          left: 0;\n        }\n\n        :lang(zh) kuc-mobile-notification,\n        :lang(zh) kuc-mobile-notification * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n\n        .kuc-mobile-notification-fadein {\n          animation-name: kuc-mobile-notification-fade-in;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n          width: 100%;\n          position: fixed;\n          visibility: visible;\n        }\n\n        .kuc-mobile-notification-fadeout {\n          animation-name: kuc-mobile-notification-fade-out;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n          width: 100%;\n          position: fixed;\n        }\n\n        .kuc-mobile-notification__notification {\n          background-color: #ffffcf;\n          background: linear-gradient(#ffda4a, #ffc32c);\n          width: 100%;\n          min-height: 48px;\n          z-index: 20;\n          font-size: 12px;\n          font-weight: 700;\n          line-height: 14px;\n          text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n          color: #333;\n          text-align: center;\n          vertical-align: top;\n        }\n\n        .kuc-mobile-notification__notification__title {\n          display: inline-block;\n          vertical-align: middle;\n          word-break: break-word;\n          padding: 17px 44px 11px 44px;\n          margin-left: -20px;\n          max-width: 500px;\n          text-align: left;\n        }\n\n        .kuc-mobile-notification__notification__closeButton {\n          position: absolute;\n          right: 0;\n          top: 0;\n          width: 44px;\n          height: 48px;\n          padding: 0;\n          background-color: transparent;\n          border: none;\n          vertical-align: middle;\n          pointer-events: auto;\n          outline: none;\n        }\n        @keyframes kuc-mobile-notification-fade-in {\n          0% {\n            top: -100px;\n            left: 0;\n          }\n          50% {\n            top: -50px;\n            left: 0;\n          }\n          100% {\n            top: 0;\n            left: 0;\n          }\n        }\n        @keyframes kuc-mobile-notification-fade-out {\n          0% {\n            visibility: visible;\n            top: 0;\n            left: 0;\n          }\n          50% {\n            visibility: visible;\n            top: -50px;\n            left: 0;\n          }\n          100% {\n            top: -100px;\n            left: 0;\n          }\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], MobileNotification.prototype, "text", void 0);
    __decorate([
        query(".kuc-mobile-notification__notification__title")
    ], MobileNotification.prototype, "_notificationTitleEl", void 0);
    return MobileNotification;
}(LitElement));
export { MobileNotification };
if (!window.customElements.get("kuc-mobile-notification")) {
    window.customElements.define("kuc-mobile-notification", MobileNotification);
}
var templateObject_1, templateObject_2, templateObject_3;
