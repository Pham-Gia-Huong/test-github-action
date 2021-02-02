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
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification(props) {
        var _this = _super.call(this) || this;
        _this.text = "";
        _this.type = "danger";
        _this.performUpdate();
        if (!props) {
            return _this;
        }
        _this.className =
            props.className !== undefined ? props.className : _this.className;
        _this.text = props.text !== undefined ? props.text : _this.text;
        _this.type = props.type !== undefined ? props.type : _this.type;
        return _this;
    }
    Notification.prototype._handleClickCloseButton = function (event) {
        this.close();
    };
    Notification.prototype._getCloseButtonColor = function () {
        switch (this.type) {
            case "info":
                return "#448aca";
            case "success":
                return "#9bbc65";
            default:
                return "#c65040";
        }
    };
    Notification.prototype._getCloseButtonSvgTemplate = function () {
        return svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <svg\n        width=\"32\"\n        height=\"32\"\n        viewBox=\"0 0 32 32\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <title>close button</title>\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z\"\n          fill=\"", "\"\n        />\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z\"\n          fill=\"white\"\n        />\n      </svg>\n    "], ["\n      <svg\n        width=\"32\"\n        height=\"32\"\n        viewBox=\"0 0 32 32\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <title>close button</title>\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z\"\n          fill=\"", "\"\n        />\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z\"\n          fill=\"white\"\n        />\n      </svg>\n    "])), this._getCloseButtonColor());
    };
    Notification.prototype.createRenderRoot = function () {
        return this;
    };
    Notification.prototype.open = function () {
        this.classList.add("kuc-notification-fadein");
        this.classList.remove("kuc-notification-fadeout");
        this._notificationTitleEl.setAttribute("role", "alert");
    };
    Notification.prototype.close = function () {
        this.classList.add("kuc-notification-fadeout");
        this.classList.remove("kuc-notification-fadein");
        this._notificationTitleEl.removeAttribute("role");
    };
    Notification.prototype.firstUpdated = function () {
        document.body.appendChild(this);
    };
    Notification.prototype.render = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      <div\n        class=\"kuc-notification__notification kuc-notification__notification--", "\"\n      >\n        <p class=\"kuc-notification__notification__title\" aria-live=\"assertive\">\n          ", "\n        </p>\n        <button\n          class=\"kuc-notification__notification__closeButton\"\n          type=\"button\"\n          aria-label=\"close\"\n          @click=\"", "\"\n        >\n          ", "\n        </button>\n      </div>\n    "], ["\n      ", "\n      <div\n        class=\"kuc-notification__notification kuc-notification__notification--",
            "\"\n      >\n        <p class=\"kuc-notification__notification__title\" aria-live=\"assertive\">\n          ", "\n        </p>\n        <button\n          class=\"kuc-notification__notification__closeButton\"\n          type=\"button\"\n          aria-label=\"close\"\n          @click=\"", "\"\n        >\n          ", "\n        </button>\n      </div>\n    "])), this._getStyleTagTemplate(), this
            .type, this.text, this._handleClickCloseButton, this._getCloseButtonSvgTemplate());
    };
    Notification.prototype._getStyleTagTemplate = function () {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <style>\n        kuc-notification,\n        kuc-notification *,\n        :lang(en) kuc-notification,\n        :lang(en) kuc-notification * {\n          font-family: \"HelveticaNeueW02-65Medi\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-notification,\n        :lang(ja) kuc-notification * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-notification,\n        :lang(zh) kuc-notification * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-notification {\n          color: #ffffff;\n          font-weight: 700;\n          text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);\n          font-size: 0;\n          line-height: normal;\n          display: inline-block;\n          width: 100%;\n          position: fixed;\n          top: 0;\n          z-index: 10000;\n          pointer-events: none;\n          margin-top: 16px;\n          text-align: center;\n          visibility: hidden;\n          animation-fill-mode: forwards;\n        }\n        .kuc-notification-fadein {\n          animation-name: kuc-notification-fade-in;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n        }\n        .kuc-notification-fadeout {\n          animation-name: kuc-notification-fade-out;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n        }\n        .kuc-notification__notification {\n          display: inline-block;\n          background-color: #e74c3c;\n        }\n        .kuc-notification__notification--info {\n          background-color: #3498db;\n        }\n        .kuc-notification__notification--success {\n          background-color: #91c36c;\n        }\n        .kuc-notification__notification--danger {\n          background-color: #e74c3c;\n        }\n        .kuc-notification__notification__title {\n          display: inline-block;\n          vertical-align: middle;\n          word-break: break-word;\n          font-size: 16px;\n          margin: 16px 8px 16px 24px;\n          max-width: 500px;\n        }\n        .kuc-notification__notification__closeButton {\n          width: 48px;\n          height: 48px;\n          padding: 0;\n          background-color: transparent;\n          outline: none;\n          border: none;\n          vertical-align: middle;\n          pointer-events: auto;\n        }\n        @keyframes kuc-notification-fade-in {\n          0% {\n            visibility: visible;\n            top: -56px;\n          }\n          100% {\n            visibility: visible;\n            top: 0;\n          }\n        }\n        @keyframes kuc-notification-fade-out {\n          0% {\n            visibility: visible;\n            top: 0;\n          }\n          10% {\n            visibility: visible;\n            top: 14px;\n          }\n          100% {\n            top: -56px;\n          }\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-notification,\n        kuc-notification *,\n        :lang(en) kuc-notification,\n        :lang(en) kuc-notification * {\n          font-family: \"HelveticaNeueW02-65Medi\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-notification,\n        :lang(ja) kuc-notification * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-notification,\n        :lang(zh) kuc-notification * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-notification {\n          color: #ffffff;\n          font-weight: 700;\n          text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);\n          font-size: 0;\n          line-height: normal;\n          display: inline-block;\n          width: 100%;\n          position: fixed;\n          top: 0;\n          z-index: 10000;\n          pointer-events: none;\n          margin-top: 16px;\n          text-align: center;\n          visibility: hidden;\n          animation-fill-mode: forwards;\n        }\n        .kuc-notification-fadein {\n          animation-name: kuc-notification-fade-in;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n        }\n        .kuc-notification-fadeout {\n          animation-name: kuc-notification-fade-out;\n          animation-duration: 250ms;\n          animation-timing-function: ease-out;\n        }\n        .kuc-notification__notification {\n          display: inline-block;\n          background-color: #e74c3c;\n        }\n        .kuc-notification__notification--info {\n          background-color: #3498db;\n        }\n        .kuc-notification__notification--success {\n          background-color: #91c36c;\n        }\n        .kuc-notification__notification--danger {\n          background-color: #e74c3c;\n        }\n        .kuc-notification__notification__title {\n          display: inline-block;\n          vertical-align: middle;\n          word-break: break-word;\n          font-size: 16px;\n          margin: 16px 8px 16px 24px;\n          max-width: 500px;\n        }\n        .kuc-notification__notification__closeButton {\n          width: 48px;\n          height: 48px;\n          padding: 0;\n          background-color: transparent;\n          outline: none;\n          border: none;\n          vertical-align: middle;\n          pointer-events: auto;\n        }\n        @keyframes kuc-notification-fade-in {\n          0% {\n            visibility: visible;\n            top: -56px;\n          }\n          100% {\n            visibility: visible;\n            top: 0;\n          }\n        }\n        @keyframes kuc-notification-fade-out {\n          0% {\n            visibility: visible;\n            top: 0;\n          }\n          10% {\n            visibility: visible;\n            top: 14px;\n          }\n          100% {\n            top: -56px;\n          }\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], Notification.prototype, "text", void 0);
    __decorate([
        property({ type: String })
    ], Notification.prototype, "type", void 0);
    __decorate([
        query(".kuc-notification__notification__title")
    ], Notification.prototype, "_notificationTitleEl", void 0);
    return Notification;
}(LitElement));
export { Notification };
if (!window.customElements.get("kuc-notification")) {
    window.customElements.define("kuc-notification", Notification);
}
var templateObject_1, templateObject_2, templateObject_3;
