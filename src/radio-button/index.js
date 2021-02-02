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
import { LitElement, html, property, svg, query, queryAll } from "lit-element";
import { v4 as uuid } from "uuid";
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.itemLayout = "horizontal";
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
        _this.itemLayout =
            props.itemLayout !== undefined ? props.itemLayout : _this.itemLayout;
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
    RadioButton.prototype._generateGUID = function () {
        return uuid();
    };
    RadioButton.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    RadioButton.prototype._updateContainerWidth = function () {
        var labelWidth = this._labelEl.getBoundingClientRect().width;
        var selectMenuWidth = this._selectMenuEl.getBoundingClientRect().width;
        if (labelWidth < selectMenuWidth) {
            labelWidth = selectMenuWidth;
        }
        this._selectMenuEl.style.width = labelWidth + "px";
        this.style.width = labelWidth + "px";
    };
    RadioButton.prototype._handleChangeInput = function (event) {
        event.stopPropagation();
        var inputEl = event.target;
        var value = inputEl.value;
        var detail = { value: value, oldValue: this.value };
        this.value = value;
        this._dispatchCustomEvent("change", detail);
    };
    RadioButton.prototype._handleFocusInput = function (event) {
        var inputEl = event.target;
        var menuEl = inputEl.parentNode;
        menuEl.setAttribute("focused", "");
    };
    RadioButton.prototype._handleBlurInput = function (event) {
        var inputEl = event.target;
        var menuEl = inputEl.parentNode;
        menuEl.removeAttribute("focused");
    };
    RadioButton.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    };
    RadioButton.prototype.createRenderRoot = function () {
        return this;
    };
    RadioButton.prototype._getRadioIconSvgTemplate = function (disabled, checked) {
        return svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <svg\n      class=\"kuc-radio-button__group__select-menu__item__label__icon\"\n      width='21'\n      height='21'\n      viewBox='0 0 21 21'\n      fill='none'\n      xmlns='http://www.w3.org/2000/svg'\n    >\n      <circle\n        cx='10.5'\n        cy='10.5'\n        r='10'\n        fill='white'\n        stroke='#e3e7e8' stroke-width='1'/>\n      ", "\n    </svg>\n  "], ["\n    <svg\n      class=\"kuc-radio-button__group__select-menu__item__label__icon\"\n      width='21'\n      height='21'\n      viewBox='0 0 21 21'\n      fill='none'\n      xmlns='http://www.w3.org/2000/svg'\n    >\n      <circle\n        cx='10.5'\n        cy='10.5'\n        r='10'\n        fill='white'\n        stroke='#e3e7e8' stroke-width='1'/>\n      ",
            "\n    </svg>\n  "])), checked
            ? svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<circle cx='10.5' cy='10.5' r='6.5' fill='", "'/>"], ["<circle cx='10.5' cy='10.5' r='6.5' fill='",
                "'/>"])), disabled ? "#e3e7e8" : "#3498db") : "");
    };
    RadioButton.prototype._getItemTemplate = function (item, index) {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <div\n        class=\"kuc-radio-button__group__select-menu__item\"\n        itemLayout=\"", "\"\n      >\n        <input\n          type=\"radio\"\n          aria-describedby=\"", "-error\"\n          id=\"", "-item-", "\"\n          class=\"kuc-radio-button__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=\"", "\"\n          aria-required=", "\n          ?disabled=\"", "\"\n          @change=\"", "\"\n          @focus=\"", "\"\n          @blur=\"", "\"\n        />\n        <label\n          class=\"kuc-radio-button__group__select-menu__item__label\"\n          for=\"", "-item-", "\"\n          >", "", "\n        </label>\n      </div>\n    "], ["\n      <div\n        class=\"kuc-radio-button__group__select-menu__item\"\n        itemLayout=\"", "\"\n      >\n        <input\n          type=\"radio\"\n          aria-describedby=\"", "-error\"\n          id=\"", "-item-", "\"\n          class=\"kuc-radio-button__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=\"", "\"\n          aria-required=", "\n          ?disabled=\"", "\"\n          @change=\"", "\"\n          @focus=\"", "\"\n          @blur=\"", "\"\n        />\n        <label\n          class=\"kuc-radio-button__group__select-menu__item__label\"\n          for=\"", "-item-", "\"\n          >",
            "", "\n        </label>\n      </div>\n    "])), this.itemLayout, this._GUID, this._GUID, index, this._GUID, item.value !== undefined ? item.value : "", this.requiredIcon, this.disabled, this._handleChangeInput, this._handleFocusInput, this._handleBlurInput, this._GUID, index, this._getRadioIconSvgTemplate(this.disabled, item.value !== undefined ? this.value === item.value : false), item.label === undefined ? item.value : item.label);
    };
    RadioButton.prototype.update = function (changedProperties) {
        if (changedProperties.has("items"))
            this._validateItems();
        _super.prototype.update.call(this, changedProperties);
    };
    RadioButton.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n      <fieldset class=\"kuc-radio-button__group\">\n        <legend class=\"kuc-radio-button__group__label\" ?hidden=\"", "\">\n          <span class=\"kuc-radio-button__group__label__text\">", "</span\n          ><!--\n            --><span\n            class=\"kuc-radio-button__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </legend>\n        <div\n          class=\"kuc-radio-button__group__select-menu\"\n          ?borderVisible=", "\n          itemLayout=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-radio-button__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </fieldset>\n    "], ["\n      ", "\n      <fieldset class=\"kuc-radio-button__group\">\n        <legend class=\"kuc-radio-button__group__label\" ?hidden=\"", "\">\n          <span class=\"kuc-radio-button__group__label__text\">", "</span\n          ><!--\n            --><span\n            class=\"kuc-radio-button__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </legend>\n        <div\n          class=\"kuc-radio-button__group__select-menu\"\n          ?borderVisible=", "\n          itemLayout=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-radio-button__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </fieldset>\n    "])), this._getStyleTagTemplate(), !this.label, this.label, !this.requiredIcon, this.borderVisible, this.itemLayout, this.items.map(function (item, index) { return _this._getItemTemplate(item, index); }), this._GUID, !this.error, this.error);
    };
    RadioButton.prototype.updated = function () {
        var _this = this;
        this._inputEls.forEach(function (inputEl, idx) {
            inputEl.checked = _this.value === inputEl.value;
        });
        this._updateContainerWidth();
    };
    RadioButton.prototype._validateItems = function () {
        if (!Array.isArray(this.items)) {
            throw new Error("'items' property is not array");
        }
        var itemsValue = this.items.map(function (item) { return item.value; });
        itemsValue.forEach(function (value, index, self) {
            if (value !== undefined && self.indexOf(value) !== index) {
                throw new Error("'items[" + index + "].value' is duplicated! You can specify unique one.");
            }
        });
    };
    RadioButton.prototype._getStyleTagTemplate = function () {
        return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <style>\n        kuc-radio-button,\n        kuc-radio-button *,\n        :lang(en) kuc-radio-button,\n        :lang(en) kuc-radio-button * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-radio-button,\n        :lang(ja) kuc-radio-button * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-radio-button,\n        :lang(zh) kuc-radio-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-radio-button {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          min-width: 239px;\n        }\n\n        kuc-radio-button[hidden] {\n          display: none;\n        }\n\n        .kuc-radio-button__group {\n          border: none;\n          padding: 0px;\n          height: auto;\n          display: inline-block;\n          margin-inline-start: 0px;\n          margin-inline-end: 0px;\n          width: 100%;\n        }\n\n        .kuc-radio-button__group__label {\n          display: inline-block;\n          padding: 4px 0 8px 0;\n          white-space: nowrap;\n        }\n\n        .kuc-radio-button__group__label[hidden] {\n          display: none;\n        }\n\n        .kuc-radio-button__group__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n\n        .kuc-radio-button__group__label__required-icon[hidden] {\n          display: none;\n        }\n\n        .kuc-radio-button__group__select-menu {\n          display: inline-block;\n          min-width: 239px;\n        }\n\n        .kuc-radio-button__group__select-menu[bordervisible] {\n          border-color: #e3e7e8;\n          border-width: 1px;\n          border-style: solid;\n          padding-top: 4px;\n          box-sizing: border-box;\n        }\n\n        .kuc-radio-button__group__select-menu__item {\n          margin-left: 4px;\n          margin-bottom: 4px;\n          margin-right: 16px;\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          display: inline-block;\n          height: 24px;\n          line-height: 24px;\n        }\n\n        .kuc-radio-button__group__select-menu__item[itemlayout=\"vertical\"] {\n          display: block;\n        }\n\n        .kuc-radio-button__group__select-menu__item[focused] {\n          border: 1px solid #3498db;\n        }\n\n        .kuc-radio-button__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n        }\n\n        .kuc-radio-button__group__select-menu__item__input:hover\n          + .kuc-radio-button__group__select-menu__item__label {\n          color: #666666;\n        }\n\n        .kuc-radio-button__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          left: -30px;\n          box-sizing: border-box;\n          margin-top: -11px;\n          width: 21px;\n          height: 21px;\n          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n          content: \"\";\n          border-radius: 9px;\n        }\n\n        .kuc-radio-button__group__select-menu__item__input[disabled]\n          + .kuc-radio-button__group__select-menu__item__label {\n          color: #888888;\n          cursor: not-allowed;\n        }\n\n        .kuc-radio-button__group__select-menu__item__label {\n          cursor: pointer;\n          position: relative;\n          margin-left: 32px;\n          display: inline-block;\n          vertical-align: middle;\n          white-space: nowrap;\n        }\n\n        .kuc-radio-button__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin: 8px 0;\n          word-break: break-all;\n        }\n\n        .kuc-radio-button__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-radio-button,\n        kuc-radio-button *,\n        :lang(en) kuc-radio-button,\n        :lang(en) kuc-radio-button * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-radio-button,\n        :lang(ja) kuc-radio-button * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-radio-button,\n        :lang(zh) kuc-radio-button * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-radio-button {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          min-width: 239px;\n        }\n\n        kuc-radio-button[hidden] {\n          display: none;\n        }\n\n        .kuc-radio-button__group {\n          border: none;\n          padding: 0px;\n          height: auto;\n          display: inline-block;\n          margin-inline-start: 0px;\n          margin-inline-end: 0px;\n          width: 100%;\n        }\n\n        .kuc-radio-button__group__label {\n          display: inline-block;\n          padding: 4px 0 8px 0;\n          white-space: nowrap;\n        }\n\n        .kuc-radio-button__group__label[hidden] {\n          display: none;\n        }\n\n        .kuc-radio-button__group__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n\n        .kuc-radio-button__group__label__required-icon[hidden] {\n          display: none;\n        }\n\n        .kuc-radio-button__group__select-menu {\n          display: inline-block;\n          min-width: 239px;\n        }\n\n        .kuc-radio-button__group__select-menu[bordervisible] {\n          border-color: #e3e7e8;\n          border-width: 1px;\n          border-style: solid;\n          padding-top: 4px;\n          box-sizing: border-box;\n        }\n\n        .kuc-radio-button__group__select-menu__item {\n          margin-left: 4px;\n          margin-bottom: 4px;\n          margin-right: 16px;\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          display: inline-block;\n          height: 24px;\n          line-height: 24px;\n        }\n\n        .kuc-radio-button__group__select-menu__item[itemlayout=\"vertical\"] {\n          display: block;\n        }\n\n        .kuc-radio-button__group__select-menu__item[focused] {\n          border: 1px solid #3498db;\n        }\n\n        .kuc-radio-button__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n        }\n\n        .kuc-radio-button__group__select-menu__item__input:hover\n          + .kuc-radio-button__group__select-menu__item__label {\n          color: #666666;\n        }\n\n        .kuc-radio-button__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          left: -30px;\n          box-sizing: border-box;\n          margin-top: -11px;\n          width: 21px;\n          height: 21px;\n          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n          content: \"\";\n          border-radius: 9px;\n        }\n\n        .kuc-radio-button__group__select-menu__item__input[disabled]\n          + .kuc-radio-button__group__select-menu__item__label {\n          color: #888888;\n          cursor: not-allowed;\n        }\n\n        .kuc-radio-button__group__select-menu__item__label {\n          cursor: pointer;\n          position: relative;\n          margin-left: 32px;\n          display: inline-block;\n          vertical-align: middle;\n          white-space: nowrap;\n        }\n\n        .kuc-radio-button__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin: 8px 0;\n          word-break: break-all;\n        }\n\n        .kuc-radio-button__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], RadioButton.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], RadioButton.prototype, "itemLayout", void 0);
    __decorate([
        property({ type: String })
    ], RadioButton.prototype, "label", void 0);
    __decorate([
        property({ type: String })
    ], RadioButton.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], RadioButton.prototype, "borderVisible", void 0);
    __decorate([
        property({ type: Boolean })
    ], RadioButton.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], RadioButton.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], RadioButton.prototype, "visible", void 0);
    __decorate([
        property({ type: Array })
    ], RadioButton.prototype, "items", void 0);
    __decorate([
        query(".kuc-radio-button__group__label")
    ], RadioButton.prototype, "_labelEl", void 0);
    __decorate([
        query(".kuc-radio-button__group__select-menu")
    ], RadioButton.prototype, "_selectMenuEl", void 0);
    __decorate([
        queryAll(".kuc-radio-button__group__select-menu__item__input")
    ], RadioButton.prototype, "_inputEls", void 0);
    return RadioButton;
}(LitElement));
export { RadioButton };
if (!window.customElements.get("kuc-radio-button")) {
    window.customElements.define("kuc-radio-button", RadioButton);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
