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
var MobileTextArea = /** @class */ (function (_super) {
    __extends(MobileTextArea, _super);
    function MobileTextArea(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.label = "";
        _this.placeholder = "";
        _this.value = "";
        _this.disabled = false;
        _this.requiredIcon = false;
        _this.visible = true;
        _this._GUID = _this._generateGUID();
        if (!props) {
            return _this;
        }
        _this.className =
            props.className !== undefined ? props.className : _this.className;
        _this.error = props.error !== undefined ? props.error : _this.error;
        _this.id = props.id !== undefined ? props.id : _this.id;
        _this.label = props.label !== undefined ? props.label : _this.label;
        _this.placeholder =
            props.placeholder !== undefined ? props.placeholder : _this.placeholder;
        _this.value = props.value !== undefined ? props.value : _this.value;
        _this.disabled =
            props.disabled !== undefined ? props.disabled : _this.disabled;
        _this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : _this.requiredIcon;
        _this.visible = props.visible !== undefined ? props.visible : _this.visible;
        return _this;
    }
    MobileTextArea.prototype._generateGUID = function () {
        return (new Date().getTime().toString(16) +
            Math.floor(Math.random() * 0x1000).toString(16));
    };
    MobileTextArea.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    MobileTextArea.prototype._handleFocusInput = function (event) {
        var detail = { value: this.value };
        this._dispatchCustomEvent("focus", detail);
    };
    MobileTextArea.prototype._handleChangeInput = function (event) {
        event.stopPropagation();
        var targetEl = event.target;
        var detail = { value: "", oldValue: this.value };
        this.value = targetEl.value;
        detail.value = this.value;
        this._dispatchCustomEvent("change", detail);
    };
    MobileTextArea.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    };
    MobileTextArea.prototype.createRenderRoot = function () {
        return this;
    };
    MobileTextArea.prototype.render = function () {
        this._updateVisible();
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <label\n        class=\"kuc-mobile-textarea__label\"\n        for=\"", "-label\"\n        ?hidden=", "\n      >\n        <span class=\"kuc-mobile-textarea__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-mobile-textarea__label__required-icon\"\n          ?hidden=", "\n          >*</span\n        >\n      </label>\n      <div class=\"kuc-mobile-textarea__form\">\n        <textarea\n          class=\"kuc-mobile-textarea__form__textarea\"\n          id=\"", "-label\"\n          placeholder=", "\n          ?disabled=\"", "\"\n          .value=", "\n          aria-invalid=\"", "\"\n          aria-describedby=\"", "-error\"\n          aria-required=", "\n          @focus=\"", "\"\n          @change=\"", "\"\n        /></textarea>\n      </div>\n      <div\n        class=\"kuc-mobile-textarea__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        ?hidden=", "\n      >\n        ", "\n      </div>\n    "], ["\n      ", "\n      <label\n        class=\"kuc-mobile-textarea__label\"\n        for=\"", "-label\"\n        ?hidden=", "\n      >\n        <span class=\"kuc-mobile-textarea__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-mobile-textarea__label__required-icon\"\n          ?hidden=", "\n          >*</span\n        >\n      </label>\n      <div class=\"kuc-mobile-textarea__form\">\n        <textarea\n          class=\"kuc-mobile-textarea__form__textarea\"\n          id=\"", "-label\"\n          placeholder=", "\n          ?disabled=\"", "\"\n          .value=", "\n          aria-invalid=\"", "\"\n          aria-describedby=\"", "-error\"\n          aria-required=", "\n          @focus=\"", "\"\n          @change=\"", "\"\n        /></textarea>\n      </div>\n      <div\n        class=\"kuc-mobile-textarea__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        ?hidden=", "\n      >\n        ", "\n      </div>\n    "])), this._getStyleTagTemplate(), this._GUID, !this.label, this.label, !this.requiredIcon, this._GUID, this.placeholder, this.disabled, this.value, this.error !== "", this._GUID, this.requiredIcon, this._handleFocusInput, this._handleChangeInput, this._GUID, !this.error, this.error);
    };
    MobileTextArea.prototype._getStyleTagTemplate = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <style>\n        kuc-mobile-textarea {\n          display: block;\n          font-size: 13px;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n        :lang(zh) kuc-mobile-textarea,\n        :lang(zh) kuc-mobile-textarea * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n        kuc-mobile-textarea[hidden] {\n          display: none;\n        }\n        .kuc-mobile-textarea__label {\n          padding: 0;\n          margin: 0 0 4px 0;\n        }\n        .kuc-mobile-textarea__label[hidden] {\n          display: none;\n        }\n        .kuc-mobile-textarea__label__text {\n          text-shadow: 0 1px 0 #fff;\n          color: #888;\n          font-size: 86%;\n          font-weight: 700;\n        }\n        .kuc-mobile-textarea__label__required-icon {\n          margin-left: 3px;\n          color: #d01212;\n        }\n        .kuc-mobile-textarea__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-mobile-textarea__form {\n          padding-left: 0.5em;\n          padding-right: 0.5em;\n        }\n        .kuc-mobile-textarea__form__textarea {\n          width: 100%;\n          height: 120px;\n          padding: 0.4em;\n          border: 1px solid #b3b3b3;\n          outline: 0;\n          box-shadow: 0 1px 0 #fff, inset 0 2px 3px #dadada;\n          border-radius: 0.4em;\n          box-sizing: border-box;\n        }\n        .kuc-mobile-textarea__form__textarea[aria-required=\"true\"] {\n          border: 1px solid #cf4a38;\n        }\n        .kuc-mobile-textarea__form__textarea:disabled {\n          color: #999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n        .kuc-mobile-textarea__error {\n          background-color: #fdffc9;\n          border: 1px solid #e5db68;\n          border-radius: 0.4em;\n          padding: 0.4em 1em;\n          margin-top: 0.3em;\n          margin-left: 0.5em;\n        }\n        .kuc-mobile-textarea__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-mobile-textarea {\n          display: block;\n          font-size: 13px;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n        :lang(zh) kuc-mobile-textarea,\n        :lang(zh) kuc-mobile-textarea * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n        kuc-mobile-textarea[hidden] {\n          display: none;\n        }\n        .kuc-mobile-textarea__label {\n          padding: 0;\n          margin: 0 0 4px 0;\n        }\n        .kuc-mobile-textarea__label[hidden] {\n          display: none;\n        }\n        .kuc-mobile-textarea__label__text {\n          text-shadow: 0 1px 0 #fff;\n          color: #888;\n          font-size: 86%;\n          font-weight: 700;\n        }\n        .kuc-mobile-textarea__label__required-icon {\n          margin-left: 3px;\n          color: #d01212;\n        }\n        .kuc-mobile-textarea__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-mobile-textarea__form {\n          padding-left: 0.5em;\n          padding-right: 0.5em;\n        }\n        .kuc-mobile-textarea__form__textarea {\n          width: 100%;\n          height: 120px;\n          padding: 0.4em;\n          border: 1px solid #b3b3b3;\n          outline: 0;\n          box-shadow: 0 1px 0 #fff, inset 0 2px 3px #dadada;\n          border-radius: 0.4em;\n          box-sizing: border-box;\n        }\n        .kuc-mobile-textarea__form__textarea[aria-required=\"true\"] {\n          border: 1px solid #cf4a38;\n        }\n        .kuc-mobile-textarea__form__textarea:disabled {\n          color: #999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n        .kuc-mobile-textarea__error {\n          background-color: #fdffc9;\n          border: 1px solid #e5db68;\n          border-radius: 0.4em;\n          padding: 0.4em 1em;\n          margin-top: 0.3em;\n          margin-left: 0.5em;\n        }\n        .kuc-mobile-textarea__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], MobileTextArea.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], MobileTextArea.prototype, "label", void 0);
    __decorate([
        property({ type: String })
    ], MobileTextArea.prototype, "placeholder", void 0);
    __decorate([
        property({ type: String })
    ], MobileTextArea.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileTextArea.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileTextArea.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileTextArea.prototype, "visible", void 0);
    return MobileTextArea;
}(LitElement));
export { MobileTextArea };
if (!window.customElements.get("kuc-mobile-textarea")) {
    window.customElements.define("kuc-mobile-textarea", MobileTextArea);
}
var templateObject_1, templateObject_2;
