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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
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
    Button.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    Button.prototype._handleClickButton = function (event) {
        event.stopPropagation();
        this._dispatchCustomEvent("click");
    };
    Button.prototype._dispatchCustomEvent = function (eventName) {
        var event = new CustomEvent(eventName, {
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    };
    Button.prototype.createRenderRoot = function () {
        return this;
    };
    Button.prototype._getButtonColorType = function () {
        if (this.type === "normal" ||
            this.type === "submit" ||
            this.type === "alert") {
            return this.type;
        }
        return "normal";
    };
    Button.prototype.render = function () {
        this._updateVisible();
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <button\n        type=\"button\"\n        class=\"kuc-button__button kuc-button__button--", "\"\n        ?disabled=\"", "\"\n        @click=\"", "\"\n      >\n        ", "\n      </button>\n    "], ["\n      ", "\n      <button\n        type=\"button\"\n        class=\"kuc-button__button kuc-button__button--", "\"\n        ?disabled=\"", "\"\n        @click=\"", "\"\n      >\n        ", "\n      </button>\n    "])), this._getStyleTagTemplate(), this._getButtonColorType(), this.disabled, this._handleClickButton, this.text);
    };
    Button.prototype._getStyleTagTemplate = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <style>\n        kuc-button,\n        kuc-button *,\n        :lang(en) kuc-button,\n        :lang(en) kuc-button * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-button,\n        :lang(ja) kuc-button * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-button,\n        :lang(zh) kuc-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-button {\n          display: inline-block;\n          vertical-align: top;\n        }\n        kuc-button[hidden] {\n          display: none;\n        }\n        .kuc-button__button {\n          font-size: 16px;\n          min-width: 163px;\n          height: 48px;\n          padding: 0px 16px;\n          user-select: none;\n        }\n        .kuc-button__button:focus {\n          outline: none;\n        }\n        .kuc-button__button--normal {\n          border: 1px solid #e3e7e8;\n          background-color: #f7f9fa;\n          box-shadow: 1px 1px 1px #ffffff inset;\n          color: #3498db;\n        }\n        .kuc-button__button--normal:hover,\n        .kuc-button__button--normal:focus,\n        .kuc-button__button--normal:active {\n          background-color: #c8d6dd;\n          box-shadow: none;\n          cursor: pointer;\n        }\n        .kuc-button__button--submit {\n          border: 1px solid #e3e7e8;\n          background-color: #3498db;\n          color: #ffffff;\n        }\n        .kuc-button__button--submit:hover,\n        .kuc-button__button--submit:focus,\n        .kuc-button__button--submit:active {\n          background-color: #1d6fa5;\n          cursor: pointer;\n        }\n        .kuc-button__button--alert {\n          border: 0 none;\n          background-color: #e74c3c;\n          box-shadow: 1px 1px 1px #ffffff inset;\n          color: #ffffff;\n        }\n        .kuc-button__button--alert:hover,\n        .kuc-button__button--alert:focus,\n        .kuc-button__button--alert:active {\n          background-color: #bf2718;\n          box-shadow: none;\n          cursor: pointer;\n        }\n        .kuc-button__button:disabled {\n          border: 1px solid #e3e7e8;\n          background-color: #d4d7d7;\n          box-shadow: none;\n          color: #888888;\n          cursor: default;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-button,\n        kuc-button *,\n        :lang(en) kuc-button,\n        :lang(en) kuc-button * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-button,\n        :lang(ja) kuc-button * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-button,\n        :lang(zh) kuc-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-button {\n          display: inline-block;\n          vertical-align: top;\n        }\n        kuc-button[hidden] {\n          display: none;\n        }\n        .kuc-button__button {\n          font-size: 16px;\n          min-width: 163px;\n          height: 48px;\n          padding: 0px 16px;\n          user-select: none;\n        }\n        .kuc-button__button:focus {\n          outline: none;\n        }\n        .kuc-button__button--normal {\n          border: 1px solid #e3e7e8;\n          background-color: #f7f9fa;\n          box-shadow: 1px 1px 1px #ffffff inset;\n          color: #3498db;\n        }\n        .kuc-button__button--normal:hover,\n        .kuc-button__button--normal:focus,\n        .kuc-button__button--normal:active {\n          background-color: #c8d6dd;\n          box-shadow: none;\n          cursor: pointer;\n        }\n        .kuc-button__button--submit {\n          border: 1px solid #e3e7e8;\n          background-color: #3498db;\n          color: #ffffff;\n        }\n        .kuc-button__button--submit:hover,\n        .kuc-button__button--submit:focus,\n        .kuc-button__button--submit:active {\n          background-color: #1d6fa5;\n          cursor: pointer;\n        }\n        .kuc-button__button--alert {\n          border: 0 none;\n          background-color: #e74c3c;\n          box-shadow: 1px 1px 1px #ffffff inset;\n          color: #ffffff;\n        }\n        .kuc-button__button--alert:hover,\n        .kuc-button__button--alert:focus,\n        .kuc-button__button--alert:active {\n          background-color: #bf2718;\n          box-shadow: none;\n          cursor: pointer;\n        }\n        .kuc-button__button:disabled {\n          border: 1px solid #e3e7e8;\n          background-color: #d4d7d7;\n          box-shadow: none;\n          color: #888888;\n          cursor: default;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], Button.prototype, "text", void 0);
    __decorate([
        property({ type: String })
    ], Button.prototype, "type", void 0);
    __decorate([
        property({ type: Boolean })
    ], Button.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], Button.prototype, "visible", void 0);
    return Button;
}(LitElement));
export { Button };
if (!window.customElements.get("kuc-button")) {
    window.customElements.define("kuc-button", Button);
}
var templateObject_1, templateObject_2;
