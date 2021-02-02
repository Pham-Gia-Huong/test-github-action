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
import { LitElement, html, property, query } from "lit-element";
import { v4 as uuid } from "uuid";
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.label = "";
        _this.placeholder = "";
        _this.prefix = "";
        _this.suffix = "";
        _this.textAlign = "left";
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
        _this.prefix = props.prefix !== undefined ? props.prefix : _this.prefix;
        _this.suffix = props.suffix !== undefined ? props.suffix : _this.suffix;
        _this.textAlign =
            props.textAlign !== undefined ? props.textAlign : _this.textAlign;
        _this.value = props.value !== undefined ? props.value : _this.value;
        _this.disabled =
            props.disabled !== undefined ? props.disabled : _this.disabled;
        _this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : _this.requiredIcon;
        _this.visible = props.visible !== undefined ? props.visible : _this.visible;
        return _this;
    }
    Text.prototype._generateGUID = function () {
        return uuid();
    };
    Text.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    Text.prototype._handleFocusInput = function (event) {
        var detail = { value: this.value };
        this._dispatchCustomEvent("focus", detail);
    };
    Text.prototype._handleChangeInput = function (event) {
        event.stopPropagation();
        var targetEl = event.target;
        var detail = { value: "", oldValue: this.value };
        this.value = targetEl.value;
        detail.value = this.value;
        this._dispatchCustomEvent("change", detail);
    };
    Text.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    };
    Text.prototype.createRenderRoot = function () {
        return this;
    };
    Text.prototype._updateContainerWidth = function () {
        var inputFormElmOuter = this._inputFormElm.children[1];
        var labelWidth = this._labelElm.getBoundingClientRect().width;
        var inputFormWidth = this._inputFormElm.getBoundingClientRect().width;
        var textContainerWidth = inputFormWidth;
        if (labelWidth > inputFormWidth) {
            textContainerWidth = labelWidth;
        }
        this._textContainerElm.style.width = textContainerWidth + "px";
        inputFormElmOuter.style.width = "100%";
    };
    Text.prototype.render = function () {
        this._updateVisible();
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <div class=\"kuc-text__text\">\n        <label\n          class=\"kuc-text__text__label\"\n          for=\"", "-label\"\n          ?hidden=", "\n        >\n          <span class=\"kuc-text__text__label__text\">", "</span\n          ><!--\n          --><span\n            class=\"kuc-text__text__label__required-icon\"\n            ?hidden=", "\n            >*</span\n          >\n        </label>\n        <div class=\"kuc-text__text__input-form\">\n          <div class=\"kuc-text__text__input-form__prefix-outer\">\n            <span\n              class=\"kuc-text__text__input-form__prefix-outer__prefix\"\n              ?hidden=\"", "\"\n              >", "</span\n            >\n          </div>\n          <div class=\"kuc-text__text__input-form__input-outer\">\n            <input\n              class=\"kuc-text__text__input-form__input-outer__input\"\n              id=\"", "-label\"\n              placeholder=", "\n              textAlign=", "\n              type=\"text\"\n              .value=", "\n              aria-required=", "\n              aria-invalid=\"", "\"\n              aria-describedby=\"", "-error\"\n              @focus=\"", "\"\n              @change=\"", "\"\n              ?disabled=\"", "\"\n            />\n          </div>\n          <div class=\"kuc-text__text__input-form__suffix-outer\">\n            <span\n              class=\"kuc-text__text__input-form__suffix-outer__suffix\"\n              ?hidden=\"", "\"\n              >", "</span\n            >\n          </div>\n        </div>\n        <div\n          class=\"kuc-text__text__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          ?hidden=", "\n        >\n          ", "\n        </div>\n      </div>\n    "], ["\n      ", "\n      <div class=\"kuc-text__text\">\n        <label\n          class=\"kuc-text__text__label\"\n          for=\"", "-label\"\n          ?hidden=", "\n        >\n          <span class=\"kuc-text__text__label__text\">", "</span\n          ><!--\n          --><span\n            class=\"kuc-text__text__label__required-icon\"\n            ?hidden=", "\n            >*</span\n          >\n        </label>\n        <div class=\"kuc-text__text__input-form\">\n          <div class=\"kuc-text__text__input-form__prefix-outer\">\n            <span\n              class=\"kuc-text__text__input-form__prefix-outer__prefix\"\n              ?hidden=\"", "\"\n              >", "</span\n            >\n          </div>\n          <div class=\"kuc-text__text__input-form__input-outer\">\n            <input\n              class=\"kuc-text__text__input-form__input-outer__input\"\n              id=\"", "-label\"\n              placeholder=", "\n              textAlign=", "\n              type=\"text\"\n              .value=", "\n              aria-required=", "\n              aria-invalid=\"", "\"\n              aria-describedby=\"", "-error\"\n              @focus=\"", "\"\n              @change=\"", "\"\n              ?disabled=\"", "\"\n            />\n          </div>\n          <div class=\"kuc-text__text__input-form__suffix-outer\">\n            <span\n              class=\"kuc-text__text__input-form__suffix-outer__suffix\"\n              ?hidden=\"", "\"\n              >", "</span\n            >\n          </div>\n        </div>\n        <div\n          class=\"kuc-text__text__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          ?hidden=", "\n        >\n          ", "\n        </div>\n      </div>\n    "])), this._getStyleTagTemplate(), this._GUID, !this.label, this.label, !this.requiredIcon, !this.prefix, this.prefix, this._GUID, this.placeholder, this.textAlign, this.value, this.requiredIcon, this.error !== "", this._GUID, this._handleFocusInput, this._handleChangeInput, this.disabled, !this.suffix, this.suffix, this._GUID, !this.error, this.error);
    };
    Text.prototype.updated = function () {
        this._updateContainerWidth();
    };
    Text.prototype._getStyleTagTemplate = function () {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <style>\n        kuc-text,\n        kuc-text *,\n        :lang(en) kuc-text,\n        :lang(en) kuc-text * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-text,\n        :lang(ja) kuc-text * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-text,\n        :lang(zh) kuc-text * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-text {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          vertical-align: top;\n        }\n        kuc-text[hidden] {\n          display: none;\n        }\n        .kuc-text__text {\n          display: inline-block;\n          width: 193px;\n        }\n        .kuc-text__text__label {\n          display: inline-block;\n          margin-top: 4px;\n          margin-bottom: 8px;\n          white-space: nowrap;\n        }\n        .kuc-text__text__label[hidden] {\n          display: none;\n        }\n        .kuc-text__text__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-text__text__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-text__text__input-form {\n          display: table;\n          width: 100%;\n        }\n        .kuc-text__text__input-form__prefix-outer,\n        .kuc-text__text__input-form__input-outer,\n        .kuc-text__text__input-form__suffix-outer {\n          display: table-cell;\n        }\n        .kuc-text__text__input-form__prefix-outer__prefix {\n          padding-right: 4px;\n          white-space: nowrap;\n        }\n        .kuc-text__text__input-form__input-outer {\n          min-width: 26px;\n        }\n        .kuc-text__text__input-form__input-outer__input {\n          width: 100%;\n          height: 40px;\n          padding: 0 8px;\n          border: 1px solid #e3e7e8;\n          box-sizing: border-box;\n          font-size: 14px;\n          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n        }\n        .kuc-text__text__input-form__input-outer__input[textAlign=\"left\"] {\n          text-align: left;\n        }\n        .kuc-text__text__input-form__input-outer__input[textAlign=\"right\"] {\n          text-align: right;\n        }\n        .kuc-text__text__input-form__input-outer__input:focus {\n          outline: none;\n          border: 1px solid #3498db;\n        }\n        .kuc-text__text__input-form__input-outer__input:disabled {\n          color: #888888;\n          background-color: #d4d7d7;\n          box-shadow: none;\n          cursor: not-allowed;\n        }\n        .kuc-text__text__input-form__suffix-outer__suffix {\n          padding-left: 4px;\n          white-space: nowrap;\n        }\n        .kuc-text__text__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-text__text__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-text,\n        kuc-text *,\n        :lang(en) kuc-text,\n        :lang(en) kuc-text * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-text,\n        :lang(ja) kuc-text * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-text,\n        :lang(zh) kuc-text * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-text {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          vertical-align: top;\n        }\n        kuc-text[hidden] {\n          display: none;\n        }\n        .kuc-text__text {\n          display: inline-block;\n          width: 193px;\n        }\n        .kuc-text__text__label {\n          display: inline-block;\n          margin-top: 4px;\n          margin-bottom: 8px;\n          white-space: nowrap;\n        }\n        .kuc-text__text__label[hidden] {\n          display: none;\n        }\n        .kuc-text__text__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-text__text__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-text__text__input-form {\n          display: table;\n          width: 100%;\n        }\n        .kuc-text__text__input-form__prefix-outer,\n        .kuc-text__text__input-form__input-outer,\n        .kuc-text__text__input-form__suffix-outer {\n          display: table-cell;\n        }\n        .kuc-text__text__input-form__prefix-outer__prefix {\n          padding-right: 4px;\n          white-space: nowrap;\n        }\n        .kuc-text__text__input-form__input-outer {\n          min-width: 26px;\n        }\n        .kuc-text__text__input-form__input-outer__input {\n          width: 100%;\n          height: 40px;\n          padding: 0 8px;\n          border: 1px solid #e3e7e8;\n          box-sizing: border-box;\n          font-size: 14px;\n          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n        }\n        .kuc-text__text__input-form__input-outer__input[textAlign=\"left\"] {\n          text-align: left;\n        }\n        .kuc-text__text__input-form__input-outer__input[textAlign=\"right\"] {\n          text-align: right;\n        }\n        .kuc-text__text__input-form__input-outer__input:focus {\n          outline: none;\n          border: 1px solid #3498db;\n        }\n        .kuc-text__text__input-form__input-outer__input:disabled {\n          color: #888888;\n          background-color: #d4d7d7;\n          box-shadow: none;\n          cursor: not-allowed;\n        }\n        .kuc-text__text__input-form__suffix-outer__suffix {\n          padding-left: 4px;\n          white-space: nowrap;\n        }\n        .kuc-text__text__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-text__text__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], Text.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], Text.prototype, "label", void 0);
    __decorate([
        property({ type: String })
    ], Text.prototype, "placeholder", void 0);
    __decorate([
        property({ type: String })
    ], Text.prototype, "prefix", void 0);
    __decorate([
        property({ type: String })
    ], Text.prototype, "suffix", void 0);
    __decorate([
        property({ type: String })
    ], Text.prototype, "textAlign", void 0);
    __decorate([
        property({ type: String })
    ], Text.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], Text.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], Text.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], Text.prototype, "visible", void 0);
    __decorate([
        query(".kuc-text__text")
    ], Text.prototype, "_textContainerElm", void 0);
    __decorate([
        query(".kuc-text__text__input-form")
    ], Text.prototype, "_inputFormElm", void 0);
    __decorate([
        query(".kuc-text__text__label")
    ], Text.prototype, "_labelElm", void 0);
    return Text;
}(LitElement));
export { Text };
if (!window.customElements.get("kuc-text")) {
    window.customElements.define("kuc-text", Text);
}
var templateObject_1, templateObject_2;
