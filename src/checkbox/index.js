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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { LitElement, html, property, queryAll, svg, query } from "lit-element";
import { v4 as uuid } from "uuid";
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.itemLayout = "horizontal";
        _this.label = "";
        _this.borderVisible = true;
        _this.disabled = false;
        _this.requiredIcon = false;
        _this.visible = true;
        _this.items = [];
        _this.value = [];
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
        _this.value = props.value !== undefined ? props.value : _this.value;
        return _this;
    }
    Checkbox.prototype._generateGUID = function () {
        return uuid();
    };
    Checkbox.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    Checkbox.prototype._updateContainerWidth = function () {
        var width = this._labelEl.getBoundingClientRect().width;
        var selectMenuWidth = this._selectMenuEl.getBoundingClientRect().width;
        if (width < selectMenuWidth) {
            width = selectMenuWidth;
        }
        this.style.width = width + "px";
    };
    Checkbox.prototype._getNewValue = function (value) {
        if (this.value.every(function (val) { return val !== value; })) {
            return __spreadArrays(this.value, [value]);
        }
        return this.value.filter(function (val) { return val !== value; });
    };
    Checkbox.prototype._handleChangeInput = function (event) {
        event.stopPropagation();
        var inputEl = event.target;
        var value = inputEl.value;
        var oldValue = this.value;
        var newValue = this._getNewValue(value);
        this.value = newValue;
        var detail = { value: newValue, oldValue: oldValue };
        this._dispatchCustomEvent("change", detail);
    };
    Checkbox.prototype._handleFocusInput = function (event) {
        var inputEl = event.target;
        var menuEl = inputEl.parentNode;
        menuEl.setAttribute("focused", "");
    };
    Checkbox.prototype._handleBlurInput = function (event) {
        var inputEl = event.target;
        var menuEl = inputEl.parentNode;
        menuEl.removeAttribute("focused");
    };
    Checkbox.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    };
    Checkbox.prototype.createRenderRoot = function () {
        return this;
    };
    Checkbox.prototype._getCheckboxIconSvgTemplate = function (disabled, checked) {
        return svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <svg\n      class=\"kuc-checkbox__group__select-menu__item__label__icon\"\n      width='21'\n      height='21'\n      viewBox='0 0 21 21'\n      fill='none'\n      xmlns='http://www.w3.org/2000/svg'\n    >\n      <rect\n        x='1'\n        y='1'\n        width='19'\n        height='19'\n        rx='1'\n        fill='white'\n        stroke='", "'\n        stroke-width='2'/>\n      ", "\n    </svg>\n  "], ["\n    <svg\n      class=\"kuc-checkbox__group__select-menu__item__label__icon\"\n      width='21'\n      height='21'\n      viewBox='0 0 21 21'\n      fill='none'\n      xmlns='http://www.w3.org/2000/svg'\n    >\n      <rect\n        x='1'\n        y='1'\n        width='19'\n        height='19'\n        rx='1'\n        fill='white'\n        stroke='", "'\n        stroke-width='2'/>\n      ",
            "\n    </svg>\n  "])), this._getSVGStrokeValue(disabled, checked), checked
            ? svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<path\n            fill-rule='evenodd'\n            clip-rule='evenodd'\n            d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z'\n            fill='", "'/>"], ["<path\n            fill-rule='evenodd'\n            clip-rule='evenodd'\n            d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z'\n            fill='", "'/>"])), disabled ? "#d8d8d8" : "#3498db") : "");
    };
    Checkbox.prototype._getSVGStrokeValue = function (disabled, checked) {
        if (disabled)
            return "#d8d8d8";
        if (checked)
            return "#3498db";
        return "#d8d8d8";
    };
    Checkbox.prototype._getItemTemplate = function (item, index) {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <div\n        class=\"kuc-checkbox__group__select-menu__item\"\n        itemLayout=\"", "\"\n      >\n        <input\n          type=\"checkbox\"\n          aria-describedby=\"", "-error\"\n          aria-required=", "\n          id=\"", "-item-", "\"\n          class=\"kuc-checkbox__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=", "\n          ?disabled=\"", "\"\n          @change=\"", "\"\n          @focus=\"", "\"\n          @blur=\"", "\"\n        />\n        <label\n          for=\"", "-item-", "\"\n          class=\"kuc-checkbox__group__select-menu__item__label\"\n          >", "", "\n        </label>\n      </div>\n    "], ["\n      <div\n        class=\"kuc-checkbox__group__select-menu__item\"\n        itemLayout=\"", "\"\n      >\n        <input\n          type=\"checkbox\"\n          aria-describedby=\"", "-error\"\n          aria-required=", "\n          id=\"", "-item-", "\"\n          class=\"kuc-checkbox__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=", "\n          ?disabled=\"", "\"\n          @change=\"", "\"\n          @focus=\"", "\"\n          @blur=\"", "\"\n        />\n        <label\n          for=\"", "-item-", "\"\n          class=\"kuc-checkbox__group__select-menu__item__label\"\n          >",
            "", "\n        </label>\n      </div>\n    "])), this.itemLayout, this._GUID, this.requiredIcon, this._GUID, index, this._GUID, item.value !== undefined ? item.value : "", this.disabled, this._handleChangeInput, this._handleFocusInput, this._handleBlurInput, this._GUID, index, this._getCheckboxIconSvgTemplate(this.disabled, item.value !== undefined
            ? this.value.some(function (val) { return val === item.value; })
            : false), item.label === undefined ? item.value : item.label);
    };
    Checkbox.prototype.update = function (changedProperties) {
        if (changedProperties.has("items"))
            this._validateItems();
        if (changedProperties.has("value"))
            this._validateValues();
        _super.prototype.update.call(this, changedProperties);
    };
    Checkbox.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n      <fieldset class=\"kuc-checkbox__group\">\n        <legend class=\"kuc-checkbox__group__label\" ?hidden=\"", "\">\n          <span class=\"kuc-checkbox__group__label__text\">", "</span\n          ><!--\n          --><span\n            class=\"kuc-checkbox__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </legend>\n        <div\n          class=\"kuc-checkbox__group__select-menu\"\n          ?borderVisible=", "\n          itemLayout=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-checkbox__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </fieldset>\n    "], ["\n      ", "\n      <fieldset class=\"kuc-checkbox__group\">\n        <legend class=\"kuc-checkbox__group__label\" ?hidden=\"", "\">\n          <span class=\"kuc-checkbox__group__label__text\">", "</span\n          ><!--\n          --><span\n            class=\"kuc-checkbox__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </legend>\n        <div\n          class=\"kuc-checkbox__group__select-menu\"\n          ?borderVisible=", "\n          itemLayout=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-checkbox__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </fieldset>\n    "])), this._getStyleTagTemplate(), !this.label, this.label, !this.requiredIcon, this.borderVisible, this.itemLayout, this.items.map(function (item, index) { return _this._getItemTemplate(item, index); }), this._GUID, !this.error, this.error);
    };
    Checkbox.prototype.updated = function () {
        var _this = this;
        this._inputEls.forEach(function (inputEl) {
            inputEl.checked = _this.value.indexOf(inputEl.value) > -1;
        });
        this._updateContainerWidth();
    };
    Checkbox.prototype._getDuplicatedIndex = function (values) {
        for (var index = 0; index < values.length; index++) {
            var value = values[index];
            if (value !== undefined && values.indexOf(value) !== index)
                return index;
        }
        return -1;
    };
    Checkbox.prototype._validateItems = function () {
        if (!Array.isArray(this.items)) {
            throw new Error("'items' property is not array");
        }
        var itemsValue = this.items.map(function (item) { return item.value || ""; });
        var index = this._getDuplicatedIndex(itemsValue);
        if (index > -1)
            throw new Error("'items[" + index + "].value' is duplicated! You can specify unique one.");
    };
    Checkbox.prototype._validateValues = function () {
        if (!Array.isArray(this.value)) {
            throw new Error("'value' property is not array");
        }
        var index = this._getDuplicatedIndex(this.value);
        if (index > -1)
            throw new Error("'value[" + index + "]' is duplicated! You can specify unique one.");
    };
    Checkbox.prototype._getStyleTagTemplate = function () {
        return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <style>\n        kuc-checkbox,\n        kuc-checkbox *,\n        :lang(en) kuc-checkbox,\n        :lang(en) kuc-checkbox * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-checkbox,\n        :lang(ja) kuc-checkbox * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-checkbox,\n        :lang(zh) kuc-checkbox * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-checkbox {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          vertical-align: top;\n          width: 239px;\n        }\n        kuc-checkbox[hidden] {\n          display: none;\n        }\n        .kuc-checkbox__group {\n          border: none;\n          padding: 0px;\n          height: auto;\n          display: inline-block;\n          width: 100%;\n          margin: 0px;\n        }\n        .kuc-checkbox__group__select-menu {\n          white-space: nowrap;\n        }\n        .kuc-checkbox__group__label {\n          display: inline-block;\n          padding: 4px 0 8px 0;\n          white-space: nowrap;\n        }\n        .kuc-checkbox__group__label[hidden] {\n          display: none;\n        }\n        .kuc-checkbox__group__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-checkbox__group__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-checkbox__group__select-menu[borderVisible] {\n          border-color: #e3e7e8;\n          border-width: 1px;\n          border-style: solid;\n          padding: 4px 0 0 4px;\n        }\n        .kuc-checkbox__group__select-menu__item {\n          margin-bottom: 4px;\n          margin-right: 16px;\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          display: inline-block;\n          height: 24px;\n          line-height: 24px;\n        }\n        .kuc-checkbox__group__select-menu__item[itemLayout=\"vertical\"] {\n          display: block;\n        }\n        .kuc-checkbox__group__select-menu__item[focused] {\n          border: 1px solid #3498db;\n        }\n        .kuc-checkbox__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n        }\n        .kuc-checkbox__group__select-menu__item__input:hover\n          + .kuc-checkbox__group__select-menu__item__label {\n          color: #666666;\n        }\n        .kuc-checkbox__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          left: -30px;\n          box-sizing: border-box;\n          margin-top: -11px;\n          width: 21px;\n          height: 21px;\n          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n          content: \"\";\n        }\n        .kuc-checkbox__group__select-menu__item__input[disabled]\n          + .kuc-checkbox__group__select-menu__item__label {\n          color: #888888;\n          cursor: not-allowed;\n        }\n        .kuc-checkbox__group__select-menu__item__label {\n          cursor: pointer;\n          position: relative;\n          margin-left: 32px;\n          display: inline-block;\n          vertical-align: middle;\n          white-space: nowrap;\n        }\n        .kuc-checkbox__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin: 8px 0;\n          word-break: break-all;\n        }\n        .kuc-checkbox__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-checkbox,\n        kuc-checkbox *,\n        :lang(en) kuc-checkbox,\n        :lang(en) kuc-checkbox * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-checkbox,\n        :lang(ja) kuc-checkbox * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-checkbox,\n        :lang(zh) kuc-checkbox * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-checkbox {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          vertical-align: top;\n          width: 239px;\n        }\n        kuc-checkbox[hidden] {\n          display: none;\n        }\n        .kuc-checkbox__group {\n          border: none;\n          padding: 0px;\n          height: auto;\n          display: inline-block;\n          width: 100%;\n          margin: 0px;\n        }\n        .kuc-checkbox__group__select-menu {\n          white-space: nowrap;\n        }\n        .kuc-checkbox__group__label {\n          display: inline-block;\n          padding: 4px 0 8px 0;\n          white-space: nowrap;\n        }\n        .kuc-checkbox__group__label[hidden] {\n          display: none;\n        }\n        .kuc-checkbox__group__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-checkbox__group__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-checkbox__group__select-menu[borderVisible] {\n          border-color: #e3e7e8;\n          border-width: 1px;\n          border-style: solid;\n          padding: 4px 0 0 4px;\n        }\n        .kuc-checkbox__group__select-menu__item {\n          margin-bottom: 4px;\n          margin-right: 16px;\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          display: inline-block;\n          height: 24px;\n          line-height: 24px;\n        }\n        .kuc-checkbox__group__select-menu__item[itemLayout=\"vertical\"] {\n          display: block;\n        }\n        .kuc-checkbox__group__select-menu__item[focused] {\n          border: 1px solid #3498db;\n        }\n        .kuc-checkbox__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n        }\n        .kuc-checkbox__group__select-menu__item__input:hover\n          + .kuc-checkbox__group__select-menu__item__label {\n          color: #666666;\n        }\n        .kuc-checkbox__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          left: -30px;\n          box-sizing: border-box;\n          margin-top: -11px;\n          width: 21px;\n          height: 21px;\n          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n          content: \"\";\n        }\n        .kuc-checkbox__group__select-menu__item__input[disabled]\n          + .kuc-checkbox__group__select-menu__item__label {\n          color: #888888;\n          cursor: not-allowed;\n        }\n        .kuc-checkbox__group__select-menu__item__label {\n          cursor: pointer;\n          position: relative;\n          margin-left: 32px;\n          display: inline-block;\n          vertical-align: middle;\n          white-space: nowrap;\n        }\n        .kuc-checkbox__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin: 8px 0;\n          word-break: break-all;\n        }\n        .kuc-checkbox__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], Checkbox.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], Checkbox.prototype, "itemLayout", void 0);
    __decorate([
        property({ type: String })
    ], Checkbox.prototype, "label", void 0);
    __decorate([
        property({ type: Boolean })
    ], Checkbox.prototype, "borderVisible", void 0);
    __decorate([
        property({ type: Boolean })
    ], Checkbox.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], Checkbox.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], Checkbox.prototype, "visible", void 0);
    __decorate([
        property({ type: Array })
    ], Checkbox.prototype, "items", void 0);
    __decorate([
        property({ type: Array })
    ], Checkbox.prototype, "value", void 0);
    __decorate([
        queryAll(".kuc-checkbox__group__select-menu__item__input")
    ], Checkbox.prototype, "_inputEls", void 0);
    __decorate([
        query(".kuc-checkbox__group__label")
    ], Checkbox.prototype, "_labelEl", void 0);
    __decorate([
        query(".kuc-checkbox__group__select-menu")
    ], Checkbox.prototype, "_selectMenuEl", void 0);
    return Checkbox;
}(LitElement));
export { Checkbox };
if (!window.customElements.get("kuc-checkbox")) {
    window.customElements.define("kuc-checkbox", Checkbox);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
