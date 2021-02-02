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
import { LitElement, html, property, svg, queryAll } from "lit-element";
import { v4 as uuid } from "uuid";
var MobileRadioButton = /** @class */ (function (_super) {
    __extends(MobileRadioButton, _super);
    function MobileRadioButton(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.label = "";
        _this.value = "";
        _this.borderVisible = true;
        _this.disabled = false;
        _this.requiredIcon = false;
        _this.visible = true;
        _this.items = [];
        _this._GUID = _this._generateGUID();
        if (!props) {
            return _this;
        }
        _this.className =
            props.className !== undefined ? props.className : _this.className;
        _this.error = props.error !== undefined ? props.error : _this.error;
        _this.id = props.id !== undefined ? props.id : _this.id;
        _this.label = props.label !== undefined ? props.label : _this.label;
        _this.value = props.value !== undefined ? props.value : _this.value;
        _this.borderVisible =
            props.borderVisible !== undefined
                ? props.borderVisible
                : _this.borderVisible;
        _this.disabled =
            props.disabled !== undefined ? props.disabled : _this.disabled;
        _this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : _this.requiredIcon;
        _this.visible = props.visible !== undefined ? props.visible : _this.visible;
        _this.items = props.items !== undefined ? props.items : _this.items;
        return _this;
    }
    MobileRadioButton.prototype._generateGUID = function () {
        return uuid();
    };
    MobileRadioButton.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    MobileRadioButton.prototype._handleChangeInput = function (event) {
        event.stopPropagation();
        var inputEl = event.target;
        var value = inputEl.value;
        var detail = { value: value, oldValue: this.value };
        this.value = value;
        this._dispatchCustomEvent("change", detail);
    };
    MobileRadioButton.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    };
    MobileRadioButton.prototype.createRenderRoot = function () {
        return this;
    };
    MobileRadioButton.prototype._getRadioIconSvgTemplate = function (disabled, checked) {
        return svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <svg\n      class=\"kuc-mobile-radio-button__group__select-menu__item__label__icon\"\n      width='21'\n      height='21'\n      viewBox='0 0 21 21'\n      fill='none'\n      xmlns='http://www.w3.org/2000/svg'\n    >\n    <defs>\n      <radialGradient id=\"shadow\">\n        <stop offset=\"0%\" style=\"stop-color:#5B5B5B;stop-opacity:0\" />\n        <stop offset=\"30%\" style=\"stop-color:#5B5B5B;stop-opacity:0\" />\n        <stop offset=\"80%\" style=\"stop-color:#5B5B5B;stop-opacity:0.1\" />\n        <stop offset=\"90%\" style=\"stop-color:#5B5B5B;stop-opacity:0.15\" />\n        <stop offset=\"100%\" style=\"stop-color:#5B5B5B;stop-opacity:0.2\" />\n      </radialGradient>\n    </defs>\n      <circle\n        fill=\"url(#shadow)\"\n        cx='10.5'\n        cy='10.5'\n        r='10.15'\n        stroke='#bbbbbb' stroke-width='1'/>\n      ", "\n    </svg>\n  "], ["\n    <svg\n      class=\"kuc-mobile-radio-button__group__select-menu__item__label__icon\"\n      width='21'\n      height='21'\n      viewBox='0 0 21 21'\n      fill='none'\n      xmlns='http://www.w3.org/2000/svg'\n    >\n    <defs>\n      <radialGradient id=\"shadow\">\n        <stop offset=\"0%\" style=\"stop-color:#5B5B5B;stop-opacity:0\" />\n        <stop offset=\"30%\" style=\"stop-color:#5B5B5B;stop-opacity:0\" />\n        <stop offset=\"80%\" style=\"stop-color:#5B5B5B;stop-opacity:0.1\" />\n        <stop offset=\"90%\" style=\"stop-color:#5B5B5B;stop-opacity:0.15\" />\n        <stop offset=\"100%\" style=\"stop-color:#5B5B5B;stop-opacity:0.2\" />\n      </radialGradient>\n    </defs>\n      <circle\n        fill=\"url(#shadow)\"\n        cx='10.5'\n        cy='10.5'\n        r='10.15'\n        stroke='#bbbbbb' stroke-width='1'/>\n      ",
            "\n    </svg>\n  "])), checked
            ? svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<circle cx='10.5' cy='10.5' r='6.5' fill='", "'/>"], ["<circle cx='10.5' cy='10.5' r='6.5' fill='", "'/>"])), "#5B5B5B") : "");
    };
    MobileRadioButton.prototype._getItemTemplate = function (item, index) {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <div class=\"kuc-mobile-radio-button__group__select-menu__item\">\n        <input\n          type=\"radio\"\n          aria-describedby=\"", "-error\"\n          id=\"", "-item-", "\"\n          class=\"kuc-mobile-radio-button__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=\"", "\"\n          aria-invalid=\"", "\"\n          aria-required=", "\n          ?disabled=\"", "\"\n          @change=\"", "\"\n        />\n        <label\n          class=\"kuc-mobile-radio-button__group__select-menu__item__label\"\n          for=\"", "-item-", "\"\n          >", "\n          <div\n            class=\"kuc-mobile-radio-button__group__select-menu__item__label__value\"\n          >\n            ", "\n          </div>\n        </label>\n      </div>\n    "], ["\n      <div class=\"kuc-mobile-radio-button__group__select-menu__item\">\n        <input\n          type=\"radio\"\n          aria-describedby=\"", "-error\"\n          id=\"", "-item-", "\"\n          class=\"kuc-mobile-radio-button__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=\"", "\"\n          aria-invalid=\"", "\"\n          aria-required=", "\n          ?disabled=\"", "\"\n          @change=\"", "\"\n        />\n        <label\n          class=\"kuc-mobile-radio-button__group__select-menu__item__label\"\n          for=\"", "-item-", "\"\n          >",
            "\n          <div\n            class=\"kuc-mobile-radio-button__group__select-menu__item__label__value\"\n          >\n            ", "\n          </div>\n        </label>\n      </div>\n    "])), this._GUID, this._GUID, index, this._GUID, item.value !== undefined ? item.value : "", this.error !== "", this.requiredIcon, this.disabled, this._handleChangeInput, this._GUID, index, this._getRadioIconSvgTemplate(this.disabled, item.value !== undefined ? this.value === item.value : false), item.label === undefined ? item.value : item.label);
    };
    MobileRadioButton.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n      <div class=\"kuc-mobile-radio-button__group\">\n        <div\n          class=\"kuc-mobile-radio-button__group__label\"\n          ?hidden=\"", "\"\n        >\n          <span class=\"kuc-mobile-radio-button__group__label__text\"\n            ><!--\n            -->", "</span\n          ><!--\n            --><span\n            class=\"kuc-mobile-radio-button__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </div>\n        <div\n          class=\"kuc-mobile-radio-button__group__select-menu\"\n          ?borderVisible=", "\n          ?disabled=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-mobile-radio-button__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </div>\n    "], ["\n      ", "\n      <div class=\"kuc-mobile-radio-button__group\">\n        <div\n          class=\"kuc-mobile-radio-button__group__label\"\n          ?hidden=\"", "\"\n        >\n          <span class=\"kuc-mobile-radio-button__group__label__text\"\n            ><!--\n            -->", "</span\n          ><!--\n            --><span\n            class=\"kuc-mobile-radio-button__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </div>\n        <div\n          class=\"kuc-mobile-radio-button__group__select-menu\"\n          ?borderVisible=", "\n          ?disabled=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-mobile-radio-button__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </div>\n    "])), this._getStyleTagTemplate(), !this.label, this.label, !this.requiredIcon, this.borderVisible, this.disabled, this.items.map(function (item, index) { return _this._getItemTemplate(item, index); }), this._GUID, !this.error, this.error);
    };
    MobileRadioButton.prototype.updated = function () {
        var _this = this;
        this._inputEls.forEach(function (inputEl, idx) {
            inputEl.checked = _this.value === inputEl.value;
        });
    };
    MobileRadioButton.prototype._getStyleTagTemplate = function () {
        return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <style>\n        kuc-mobile-radio-button,\n        kuc-mobile-radio-button * {\n          font-size: 13px;\n          color: #333333;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n\n        :lang(zh) kuc-mobile-radio-button,\n        :lang(zh) kuc-mobile-radio-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n\n        kuc-mobile-radio-button {\n          width: 100%;\n          display: inline-block;\n        }\n\n        kuc-mobile-radio-button[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-radio-button__group {\n          border: none;\n          height: auto;\n          display: inline-block;\n          width: 100%;\n        }\n\n        .kuc-mobile-radio-button__group__label {\n          display: inline-block;\n          padding: 4px 0px;\n          white-space: nowrap;\n          text-shadow: 0 1px 0 #fff;\n          font-weight: bold;\n        }\n\n        .kuc-mobile-radio-button__group__label__text {\n          color: #888888;\n          font-size: 86%;\n        }\n\n        .kuc-mobile-radio-button__group__label[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-radio-button__group__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n\n        .kuc-mobile-radio-button__group__label__required-icon[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu {\n          margin-right: 0.5em;\n          margin-left: 0.5em;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[bordervisible] {\n          border-color: #b3b3b3;\n          border-width: 1px;\n          border-style: solid;\n          border-radius: 0.4em;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item {\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          height: 45px;\n          display: block;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[bordervisible]\n          .kuc-mobile-radio-button__group__select-menu__item {\n          border-bottom: 1px solid #b3b3b3;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[bordervisible]\n          .kuc-mobile-radio-button__group__select-menu__item:last-child {\n          border-bottom: 0px;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          box-sizing: border-box;\n          margin-top: -11px;\n          width: 21px;\n          height: 21px;\n          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n          content: \"\";\n          border-radius: 9px;\n          left: 8px;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__label__value {\n          height: 45px;\n          line-height: 45px;\n          padding-left: 35px;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[disabled] {\n          background-color: #d5d7d9;\n          color: #999999;\n          -webkit-text-fill-color: #999999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__label {\n          position: absolute;\n          white-space: nowrap;\n          width: 100%;\n          top: 50%;\n          transform: translateY(-50%);\n          height: 100%;\n          padding: 0px;\n        }\n\n        .kuc-mobile-radio-button__error {\n          line-height: 1.5;\n          border: 1px solid #e5db68;\n          background-color: #fdffc9;\n          margin-top: 0.3em;\n          padding: 0.4em 1em;\n          border-radius: 0.4em;\n          margin-left: 0.5em;\n        }\n\n        .kuc-mobile-radio-button__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-mobile-radio-button,\n        kuc-mobile-radio-button * {\n          font-size: 13px;\n          color: #333333;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n\n        :lang(zh) kuc-mobile-radio-button,\n        :lang(zh) kuc-mobile-radio-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n\n        kuc-mobile-radio-button {\n          width: 100%;\n          display: inline-block;\n        }\n\n        kuc-mobile-radio-button[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-radio-button__group {\n          border: none;\n          height: auto;\n          display: inline-block;\n          width: 100%;\n        }\n\n        .kuc-mobile-radio-button__group__label {\n          display: inline-block;\n          padding: 4px 0px;\n          white-space: nowrap;\n          text-shadow: 0 1px 0 #fff;\n          font-weight: bold;\n        }\n\n        .kuc-mobile-radio-button__group__label__text {\n          color: #888888;\n          font-size: 86%;\n        }\n\n        .kuc-mobile-radio-button__group__label[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-radio-button__group__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n\n        .kuc-mobile-radio-button__group__label__required-icon[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu {\n          margin-right: 0.5em;\n          margin-left: 0.5em;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[bordervisible] {\n          border-color: #b3b3b3;\n          border-width: 1px;\n          border-style: solid;\n          border-radius: 0.4em;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item {\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          height: 45px;\n          display: block;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[bordervisible]\n          .kuc-mobile-radio-button__group__select-menu__item {\n          border-bottom: 1px solid #b3b3b3;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[bordervisible]\n          .kuc-mobile-radio-button__group__select-menu__item:last-child {\n          border-bottom: 0px;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          box-sizing: border-box;\n          margin-top: -11px;\n          width: 21px;\n          height: 21px;\n          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n          content: \"\";\n          border-radius: 9px;\n          left: 8px;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__label__value {\n          height: 45px;\n          line-height: 45px;\n          padding-left: 35px;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu[disabled] {\n          background-color: #d5d7d9;\n          color: #999999;\n          -webkit-text-fill-color: #999999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n\n        .kuc-mobile-radio-button__group__select-menu__item__label {\n          position: absolute;\n          white-space: nowrap;\n          width: 100%;\n          top: 50%;\n          transform: translateY(-50%);\n          height: 100%;\n          padding: 0px;\n        }\n\n        .kuc-mobile-radio-button__error {\n          line-height: 1.5;\n          border: 1px solid #e5db68;\n          background-color: #fdffc9;\n          margin-top: 0.3em;\n          padding: 0.4em 1em;\n          border-radius: 0.4em;\n          margin-left: 0.5em;\n        }\n\n        .kuc-mobile-radio-button__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], MobileRadioButton.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], MobileRadioButton.prototype, "label", void 0);
    __decorate([
        property({ type: String })
    ], MobileRadioButton.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileRadioButton.prototype, "borderVisible", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileRadioButton.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileRadioButton.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileRadioButton.prototype, "visible", void 0);
    __decorate([
        property({
            type: Array,
            hasChanged: function (newVal, _oldVal) {
                if (!Array.isArray(newVal)) {
                    throw new Error("'items' property is not array");
                }
                var checkedList = [];
                newVal.forEach(function (item, index) {
                    var value = item.value === undefined ? "" : item.value;
                    if (checkedList.indexOf(value) > -1) {
                        throw new Error("'items[" + index + "].value' is duplicated! You can specify unique one.");
                    }
                    checkedList.push(value);
                });
                return true;
            }
        })
    ], MobileRadioButton.prototype, "items", void 0);
    __decorate([
        queryAll(".kuc-mobile-radio-button__group__select-menu__item__input")
    ], MobileRadioButton.prototype, "_inputEls", void 0);
    return MobileRadioButton;
}(LitElement));
export { MobileRadioButton };
if (!window.customElements.get("kuc-mobile-radio-button")) {
    window.customElements.define("kuc-mobile-radio-button", MobileRadioButton);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
