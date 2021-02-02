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
import { LitElement, html, svg, property, query, queryAll } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import DOMPurify from "dompurify";
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this) || this;
        _this.title = "";
        _this.content = "";
        _this.footer = "";
        _this._triggeredElement = null;
        if (!props) {
            return _this;
        }
        _this.title = props.title !== undefined ? props.title : _this.title;
        _this.content = props.content !== undefined ? props.content : _this.content;
        _this.footer = props.footer !== undefined ? props.footer : _this.footer;
        return _this;
    }
    Dialog.prototype.open = function () {
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(this);
        this.setAttribute("opened", "");
        this._triggeredElement = document.activeElement;
        this._dialogEl && this._dialogEl.focus();
    };
    Dialog.prototype.close = function () {
        this.removeAttribute("opened");
        if (this._triggeredElement instanceof HTMLElement) {
            this._triggeredElement.focus();
        }
    };
    Dialog.prototype.createRenderRoot = function () {
        return this;
    };
    Dialog.prototype.render = function () {
        var cleanContent = DOMPurify.sanitize(this.content);
        var cleanFooter = DOMPurify.sanitize(this.footer);
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <span\n        class=\"kuc-dialog__first-dummy\"\n        tabIndex=\"0\"\n        @focus=\"", "\"\n      ></span>\n      <div class=\"kuc-dialog__dialog\" role=\"dialog\" tabindex=\"0\">\n        <div class=\"kuc-dialog__dialog__header\">\n          <span class=\"kuc-dialog__dialog__header__title\">", "</span>\n          <button\n            class=\"kuc-dialog__dialog__header__close-button\"\n            type=\"button\"\n            aria-label=\"close\"\n            @click=\"", "\"\n          >\n            ", "\n          </button>\n        </div>\n        <div class=\"kuc-dialog__dialog__content\">\n          ", "\n        </div>\n        <div class=\"kuc-dialog__dialog__footer\">\n          ", "\n        </div>\n      </div>\n      <span\n        class=\"kuc-dialog__last-dummy\"\n        tabIndex=\"0\"\n        @focus=\"", "\"\n      ></span>\n      <div class=\"kuc-dialog__mask\"></div>\n    "], ["\n      ", "\n      <span\n        class=\"kuc-dialog__first-dummy\"\n        tabIndex=\"0\"\n        @focus=\"", "\"\n      ></span>\n      <div class=\"kuc-dialog__dialog\" role=\"dialog\" tabindex=\"0\">\n        <div class=\"kuc-dialog__dialog__header\">\n          <span class=\"kuc-dialog__dialog__header__title\">", "</span>\n          <button\n            class=\"kuc-dialog__dialog__header__close-button\"\n            type=\"button\"\n            aria-label=\"close\"\n            @click=\"", "\"\n          >\n            ", "\n          </button>\n        </div>\n        <div class=\"kuc-dialog__dialog__content\">\n          ", "\n        </div>\n        <div class=\"kuc-dialog__dialog__footer\">\n          ", "\n        </div>\n      </div>\n      <span\n        class=\"kuc-dialog__last-dummy\"\n        tabIndex=\"0\"\n        @focus=\"", "\"\n      ></span>\n      <div class=\"kuc-dialog__mask\"></div>\n    "])), this._getStyleTagTemplate(), this._handleFocusFirstDummy, this.title, this.close, this._getCloseButtonSvgTemplate(), unsafeHTML(cleanContent), unsafeHTML(cleanFooter), this._handleFocusLastDummy);
    };
    Dialog.prototype._handleFocusFirstDummy = function () {
        var lastFocusableElement = this._focusableElements[this._focusableElements.length - 2];
        lastFocusableElement && lastFocusableElement.focus();
    };
    Dialog.prototype._handleFocusLastDummy = function () {
        this._dialogEl.focus();
    };
    Dialog.prototype._getCloseButtonSvgTemplate = function () {
        return svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <svg\n        class=\"kuc-dialog__dialog__header__close-button-svg\"\n        width=\"32\"\n        height=\"32\"\n        viewBox=\"0 0 32 32\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z\"\n          fill=\"#F7F9FA\"\n        />\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z\"\n          fill=\"#888888\"\n        />\n      </svg>\n    "], ["\n      <svg\n        class=\"kuc-dialog__dialog__header__close-button-svg\"\n        width=\"32\"\n        height=\"32\"\n        viewBox=\"0 0 32 32\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z\"\n          fill=\"#F7F9FA\"\n        />\n        <path\n          fill-rule=\"evenodd\"\n          clip-rule=\"evenodd\"\n          d=\"M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z\"\n          fill=\"#888888\"\n        />\n      </svg>\n    "])));
    };
    Dialog.prototype._getStyleTagTemplate = function () {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <style>\n        kuc-dialog,\n        kuc-dialog *,\n        :lang(en) kuc-dialog,\n        :lang(en) kuc-dialog * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-dialog,\n        :lang(ja) kuc-dialog * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-dialog,\n        :lang(zh) kuc-dialog * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n\n        kuc-dialog {\n          display: none;\n        }\n\n        kuc-dialog[opened] {\n          display: block;\n        }\n\n        .kuc-dialog__dialog {\n          min-width: 600px;\n          font-size: 20px;\n          background-color: #fff;\n\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          z-index: 10000;\n        }\n\n        .kuc-dialog__dialog__header {\n          min-height: 64px;\n          border-bottom: 1px solid #e3e7e8;\n\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n\n        .kuc-dialog__dialog__header__title {\n          font-size: 24px;\n          padding: 0 24px;\n        }\n\n        .kuc-dialog__dialog__header__close-button {\n          width: 48px;\n          height: 48px;\n          border: none;\n          background-color: #fff;\n          margin-right: 12px;\n        }\n\n        .kuc-dialog__dialog__header__close-button-svg {\n          vertical-align: middle;\n        }\n\n        .kuc-dialog__dialog__content {\n          min-height: 48px;\n          border-bottom: #e3e7e8 solid 1px;\n          background-color: #f7f9fa;\n        }\n\n        .kuc-dialog__dialog__footer {\n          min-height: 48px;\n        }\n\n        .kuc-dialog__mask {\n          position: absolute;\n          top: 0;\n          right: 0;\n          display: block;\n          width: 100%;\n          height: 100%;\n          background-color: #000;\n          opacity: 0.6;\n          z-index: 9999;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-dialog,\n        kuc-dialog *,\n        :lang(en) kuc-dialog,\n        :lang(en) kuc-dialog * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-dialog,\n        :lang(ja) kuc-dialog * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-dialog,\n        :lang(zh) kuc-dialog * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n\n        kuc-dialog {\n          display: none;\n        }\n\n        kuc-dialog[opened] {\n          display: block;\n        }\n\n        .kuc-dialog__dialog {\n          min-width: 600px;\n          font-size: 20px;\n          background-color: #fff;\n\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          z-index: 10000;\n        }\n\n        .kuc-dialog__dialog__header {\n          min-height: 64px;\n          border-bottom: 1px solid #e3e7e8;\n\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n\n        .kuc-dialog__dialog__header__title {\n          font-size: 24px;\n          padding: 0 24px;\n        }\n\n        .kuc-dialog__dialog__header__close-button {\n          width: 48px;\n          height: 48px;\n          border: none;\n          background-color: #fff;\n          margin-right: 12px;\n        }\n\n        .kuc-dialog__dialog__header__close-button-svg {\n          vertical-align: middle;\n        }\n\n        .kuc-dialog__dialog__content {\n          min-height: 48px;\n          border-bottom: #e3e7e8 solid 1px;\n          background-color: #f7f9fa;\n        }\n\n        .kuc-dialog__dialog__footer {\n          min-height: 48px;\n        }\n\n        .kuc-dialog__mask {\n          position: absolute;\n          top: 0;\n          right: 0;\n          display: block;\n          width: 100%;\n          height: 100%;\n          background-color: #000;\n          opacity: 0.6;\n          z-index: 9999;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], Dialog.prototype, "title", void 0);
    __decorate([
        property()
    ], Dialog.prototype, "content", void 0);
    __decorate([
        property()
    ], Dialog.prototype, "footer", void 0);
    __decorate([
        query(".kuc-dialog__dialog")
    ], Dialog.prototype, "_dialogEl", void 0);
    __decorate([
        queryAll("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")
    ], Dialog.prototype, "_focusableElements", void 0);
    return Dialog;
}(LitElement));
export { Dialog };
if (!window.customElements.get("kuc-dialog")) {
    window.customElements.define("kuc-dialog", Dialog);
}
var templateObject_1, templateObject_2, templateObject_3;
