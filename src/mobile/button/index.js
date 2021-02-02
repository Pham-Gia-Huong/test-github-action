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
import { LitElement, html, property } from "lit-element";
var MobileButton = /** @class */ (function (_super) {
    __extends(MobileButton, _super);
    function MobileButton(props) {
        var _this = _super.call(this) || this;
        _this.text = "";
        _this.type = "normal";
        _this.disabled = false;
        _this.visible = true;
        if (!props) {
            return _this;
        }
        _this.className =
            props.className !== undefined ? props.className : _this.className;
        _this.id = props.id !== undefined ? props.id : _this.id;
        _this.text = props.text !== undefined ? props.text : _this.text;
        _this.type = props.type !== undefined ? props.type : _this.type;
        _this.disabled =
            props.disabled !== undefined ? props.disabled : _this.disabled;
        _this.visible = props.visible !== undefined ? props.visible : _this.visible;
        return _this;
    }
    MobileButton.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    MobileButton.prototype._handleClickButton = function (event) {
        event.stopPropagation();
        this._dispatchCustomEvent("click");
    };
    MobileButton.prototype._dispatchCustomEvent = function (eventName) {
        var event = new CustomEvent(eventName, {
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    };
    MobileButton.prototype.createRenderRoot = function () {
        return this;
    };
    MobileButton.prototype._getButtonColorType = function () {
        if (this.type === "normal" || this.type === "submit") {
            return this.type;
        }
        return "normal";
    };
    MobileButton.prototype.render = function () {
        this._updateVisible();
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <button\n        type=\"button\"\n        class=\"kuc-mobile-button__button kuc-mobile-button__button--", "\"\n        ?disabled=\"", "\"\n        @click=\"", "\"\n      >\n        ", "\n      </button>\n    "], ["\n      ", "\n      <button\n        type=\"button\"\n        class=\"kuc-mobile-button__button kuc-mobile-button__button--", "\"\n        ?disabled=\"", "\"\n        @click=\"", "\"\n      >\n        ", "\n      </button>\n    "])), this._getStyleTagTemplate(), this._getButtonColorType(), this.disabled, this._handleClickButton, this.text);
    };
    MobileButton.prototype._getStyleTagTemplate = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <style>\n        kuc-mobile-button,\n        kuc-mobile-button * {\n          font-size: 14px;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n        :lang(zh) kuc-mobile-button,\n        :lang(zh) kuc-mobile-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n        kuc-mobile-button {\n          display: inline-block;\n          vertical-align: top;\n        }\n        kuc-mobile-button[hidden] {\n          display: none;\n        }\n        .kuc-mobile-button__button {\n          min-width: 100px;\n          height: 42px;\n          padding: 12px 12px;\n          user-select: none;\n          font-weight: 700;\n          line-height: 1;\n        }\n        .kuc-mobile-button__button:focus {\n          outline: none;\n        }\n        .kuc-mobile-button__button--submit {\n          border: 2px solid #206694;\n          background-color: #206694;\n          color: #fff;\n          border-radius: 6px;\n        }\n        .kuc-mobile-button__button--submit:disabled {\n          border-color: #a5a5a5;\n          background: #a5a5a5;\n        }\n        .kuc-mobile-button__button--normal {\n          border: 2px solid #206694;\n          background-color: #ffffff;\n          color: #206694;\n          border-radius: 6px;\n        }\n        .kuc-mobile-button__button--normal:disabled {\n          color: #a5a5a5;\n          border-color: #a5a5a5;\n          cursor: default;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-mobile-button,\n        kuc-mobile-button * {\n          font-size: 14px;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n        :lang(zh) kuc-mobile-button,\n        :lang(zh) kuc-mobile-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n        kuc-mobile-button {\n          display: inline-block;\n          vertical-align: top;\n        }\n        kuc-mobile-button[hidden] {\n          display: none;\n        }\n        .kuc-mobile-button__button {\n          min-width: 100px;\n          height: 42px;\n          padding: 12px 12px;\n          user-select: none;\n          font-weight: 700;\n          line-height: 1;\n        }\n        .kuc-mobile-button__button:focus {\n          outline: none;\n        }\n        .kuc-mobile-button__button--submit {\n          border: 2px solid #206694;\n          background-color: #206694;\n          color: #fff;\n          border-radius: 6px;\n        }\n        .kuc-mobile-button__button--submit:disabled {\n          border-color: #a5a5a5;\n          background: #a5a5a5;\n        }\n        .kuc-mobile-button__button--normal {\n          border: 2px solid #206694;\n          background-color: #ffffff;\n          color: #206694;\n          border-radius: 6px;\n        }\n        .kuc-mobile-button__button--normal:disabled {\n          color: #a5a5a5;\n          border-color: #a5a5a5;\n          cursor: default;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], MobileButton.prototype, "text", void 0);
    __decorate([
        property({ type: String })
    ], MobileButton.prototype, "type", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileButton.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileButton.prototype, "visible", void 0);
    return MobileButton;
}(LitElement));
export { MobileButton };
if (!window.customElements.get("kuc-mobile-button")) {
    window.customElements.define("kuc-mobile-button", MobileButton);
}
var templateObject_1, templateObject_2;
