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
import { LitElement, html, property, queryAll, query, svg } from "lit-element";
import { v4 as uuid } from "uuid";
var MultiChoice = /** @class */ (function (_super) {
    __extends(MultiChoice, _super);
    function MultiChoice(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.label = "";
        _this.disabled = false;
        _this.requiredIcon = false;
        _this.visible = true;
        _this.items = [];
        _this.value = [];
        _this._GUID = _this._generateGUID();
        if (!props) {
            return _this;
        }
        _this._initProps(props);
        return _this;
    }
    MultiChoice.prototype.update = function (changedProperties) {
        if (changedProperties.has("items"))
            this._validateItems();
        if (changedProperties.has("value"))
            this._validateValues();
        _super.prototype.update.call(this, changedProperties);
    };
    MultiChoice.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <div\n        class=\"kuc-multi-choice__label\"\n        id=\"", "-label\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-multi-choice__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-multi-choice__label__required-icon\"\n          ?hidden=\"", "\"\n          >*</span\n        >\n      </div>\n      <div\n        class=\"kuc-multi-choice__menu\"\n        role=\"menu\"\n        aria-describedby=\"", "-error\"\n        aria-labelledby=\"", "-label\"\n        ?disabled=\"", "\"\n        tabindex=\"", "\"\n        @keydown=", "\n      >\n        ", "\n      </div>\n      <div\n        class=\"kuc-multi-choice__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        aria-live=\"assertive\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n    "], ["\n      ", "\n      <div\n        class=\"kuc-multi-choice__label\"\n        id=\"", "-label\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-multi-choice__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-multi-choice__label__required-icon\"\n          ?hidden=\"", "\"\n          >*</span\n        >\n      </div>\n      <div\n        class=\"kuc-multi-choice__menu\"\n        role=\"menu\"\n        aria-describedby=\"", "-error\"\n        aria-labelledby=\"", "-label\"\n        ?disabled=\"", "\"\n        tabindex=\"", "\"\n        @keydown=", "\n      >\n        ",
            "\n      </div>\n      <div\n        class=\"kuc-multi-choice__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        aria-live=\"assertive\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n    "])), this._getStyleTagTemplate(), this._GUID, !this.label, this.label, !this.requiredIcon, this._GUID, this._GUID, this.disabled, this.disabled ? "-1" : "0", this._handleKeyDownMultiChoice, this.items.map(function (item, number) {
            return _this._getMenuItemTemplate(item, number);
        }), this._GUID, !this.error, this.error);
    };
    MultiChoice.prototype.createRenderRoot = function () {
        return this;
    };
    MultiChoice.prototype._initProps = function (props) {
        this.className =
            props.className !== undefined ? props.className : this.className;
        this.error = props.error !== undefined ? props.error : this.error;
        this.id = props.id !== undefined ? props.id : this.id;
        this.label = props.label !== undefined ? props.label : this.label;
        this.value = props.value !== undefined ? props.value : this.value;
        this.disabled =
            props.disabled !== undefined ? props.disabled : this.disabled;
        this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
        this.visible = props.visible !== undefined ? props.visible : this.visible;
        this.items = props.items !== undefined ? props.items : this.items;
    };
    MultiChoice.prototype._generateGUID = function () {
        return uuid();
    };
    MultiChoice.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    MultiChoice.prototype._updateContainerWidth = function () {
        var width = this._labelEl.getBoundingClientRect().width;
        var menuWidth = this._menuEl.getBoundingClientRect().width;
        if (width < menuWidth) {
            width = menuWidth;
        }
        this.style.width = width + "px";
    };
    MultiChoice.prototype.updated = function () {
        this._updateContainerWidth();
    };
    MultiChoice.prototype._handleMousedownMultiChoiceItem = function (event) {
        if (this.disabled) {
            return;
        }
        var itemEl = event.target;
        var value = itemEl.getAttribute("value");
        this._handleChangeValue(value);
    };
    MultiChoice.prototype._handleMouseOverMultiChoiceItem = function (event) {
        if (this.disabled) {
            return;
        }
        this._itemsEl.forEach(function (itemEl) {
            if (itemEl.classList.contains("kuc-multi-choice__menu__highlight")) {
                itemEl.classList.remove("kuc-multi-choice__menu__highlight");
            }
        });
        var itemEl = event.currentTarget;
        itemEl.classList.add("kuc-multi-choice__menu__highlight");
        this._setActiveDescendant(itemEl.id);
    };
    MultiChoice.prototype._handleMouseLeaveMultiChoiceItem = function (event) {
        if (this.disabled) {
            return;
        }
        var itemEl = event.currentTarget;
        itemEl.classList.remove("kuc-multi-choice__menu__highlight");
        this._setActiveDescendant();
    };
    MultiChoice.prototype._handleKeyDownMultiChoice = function (event) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var highLightNumber = 0;
        switch (event.key) {
            case "Up": // IE/Edge specific value
            case "ArrowUp": {
                this._itemsEl.forEach(function (itemEl, number) {
                    if (itemEl.classList.contains("kuc-multi-choice__menu__highlight")) {
                        itemEl.classList.remove("kuc-multi-choice__menu__highlight");
                        highLightNumber = number - 1;
                    }
                });
                highLightNumber =
                    highLightNumber <= -1 ? this._itemsEl.length - 1 : highLightNumber;
                var currentItemEl = this._itemsEl[highLightNumber];
                currentItemEl.classList.add("kuc-multi-choice__menu__highlight");
                this._setActiveDescendant(currentItemEl.id);
                break;
            }
            case "Down": // IE/Edge specific value
            case "ArrowDown": {
                this._itemsEl.forEach(function (itemEl, number) {
                    if (itemEl.classList.contains("kuc-multi-choice__menu__highlight")) {
                        itemEl.classList.remove("kuc-multi-choice__menu__highlight");
                        highLightNumber = number + 1;
                    }
                });
                highLightNumber =
                    highLightNumber >= this._itemsEl.length ? 0 : highLightNumber;
                var currentItemEl = this._itemsEl[highLightNumber];
                currentItemEl.classList.add("kuc-multi-choice__menu__highlight");
                this._setActiveDescendant(currentItemEl.id);
                break;
            }
            case "Spacebar": // IE/Edge specific value
            case " ": {
                this._itemsEl.forEach(function (itemEl) {
                    if (itemEl.classList.contains("kuc-multi-choice__menu__highlight")) {
                        var value = itemEl.getAttribute("value");
                        _this._handleChangeValue(value);
                    }
                });
                break;
            }
            default:
                break;
        }
    };
    MultiChoice.prototype._getMultiChoiceCheckedIconSvgTemplate = function (disabled, checked) {
        return svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      ", ""], ["\n      ",
            ""])), checked
            ? svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<svg\n          class='kuc-multi-choice__menu__item__icon'\n          width='11'\n          height='9'\n          viewBox='0 0 11 9'\n          fill='none'\n          xmlns='http://www.w3.org/2000/svg'\n        >\n          <path\n            fill-rule='evenodd'\n            clip-rule='evenodd'\n            d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z'\n            fill='", "'\n          />\n        </svg>"], ["<svg\n          class='kuc-multi-choice__menu__item__icon'\n          width='11'\n          height='9'\n          viewBox='0 0 11 9'\n          fill='none'\n          xmlns='http://www.w3.org/2000/svg'\n        >\n          <path\n            fill-rule='evenodd'\n            clip-rule='evenodd'\n            d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z'\n            fill='", "'\n          />\n        </svg>"])), disabled ? "#d8d8d8" : "#3498db") : "");
    };
    MultiChoice.prototype._getMenuItemTemplate = function (item, index) {
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      <div\n        class=\"kuc-multi-choice__menu__item\"\n        role=\"menuitemcheckbox\"\n        aria-checked=", "\n        aria-required=", "\n        value=", "\n        id=\"", "-menuitem-", "\"\n        @mousedown=", "\n        @mouseover=", "\n        @mouseleave=", "\n      >\n        ", "\n        ", "\n      </div>\n    "], ["\n      <div\n        class=\"kuc-multi-choice__menu__item\"\n        role=\"menuitemcheckbox\"\n        aria-checked=", "\n        aria-required=", "\n        value=", "\n        id=\"", "-menuitem-", "\"\n        @mousedown=", "\n        @mouseover=", "\n        @mouseleave=", "\n      >\n        ",
            "\n        ", "\n      </div>\n    "])), this.value.some(function (val) { return val === item.value; }), this.requiredIcon, item.value !== undefined ? item.value : "", this._GUID, index, this._handleMousedownMultiChoiceItem, this._handleMouseOverMultiChoiceItem, this._handleMouseLeaveMultiChoiceItem, this._getMultiChoiceCheckedIconSvgTemplate(this.disabled, item.value !== undefined
            ? this.value.some(function (val) { return val === item.value; })
            : false), item.label === undefined ? item.value : item.label);
    };
    MultiChoice.prototype._getDuplicatedIndex = function (values) {
        for (var index = 0; index < values.length; index++) {
            var value = values[index];
            if (value !== undefined && values.indexOf(value) !== index)
                return index;
        }
        return -1;
    };
    MultiChoice.prototype._validateItems = function () {
        if (!Array.isArray(this.items)) {
            throw new Error("'items' property is not array");
        }
        var itemsValue = this.items.map(function (item) { return item.value || ""; });
        var index = this._getDuplicatedIndex(itemsValue);
        if (index > -1)
            throw new Error("'items[" + index + "].value' property is duplicated");
    };
    MultiChoice.prototype._validateValues = function () {
        if (!Array.isArray(this.value)) {
            throw new Error("'value' property is not array");
        }
        var index = this._getDuplicatedIndex(this.value);
        if (index > -1)
            throw new Error("'value[" + index + "]' property is duplicated");
    };
    MultiChoice.prototype._getStyleTagTemplate = function () {
        return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <style>\n        kuc-multi-choice,\n        kuc-multi-choice *,\n        :lang(en) kuc-multi-choice,\n        :lang(en) kuc-multi-choice * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-multi-choice,\n        :lang(ja) kuc-multi-choice * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-multi-choice,\n        :lang(zh) kuc-multi-choice * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-multi-choice {\n          display: inline-block;\n          font-size: 14px;\n          color: #333;\n          width: 180px;\n        }\n        kuc-multi-choice[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__label {\n          margin-top: 4px;\n          margin-bottom: 8px;\n          display: inline-block;\n          white-space: nowrap;\n        }\n        .kuc-multi-choice__label[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-multi-choice__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-multi-choice__error[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__menu {\n          position: relative;\n          background: #ffffff;\n          border: 1px solid #e3e7e8;\n          box-sizing: border-box;\n          box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;\n          padding: 6px 0;\n          overflow-y: auto;\n          overflow-x: hidden;\n          max-height: 134px;\n          display: table;\n          width: 100%;\n        }\n        .kuc-multi-choice__menu:not([disabled]):focus {\n          outline: none;\n          border: 1px solid #3498db;\n        }\n        .kuc-multi-choice__menu[disabled] {\n          background-color: #dbdcdd;\n          box-shadow: none;\n          cursor: not-allowed;\n          color: #888;\n          outline: none;\n        }\n        .kuc-multi-choice__menu__item {\n          padding: 4px 16px;\n          margin-bottom: 2px;\n          line-height: 1;\n          position: relative;\n          white-space: nowrap;\n        }\n        .kuc-multi-choice__menu__item__icon {\n          position: absolute;\n          top: 50%;\n          left: 16px;\n          margin-top: -6px;\n          pointer-events: none;\n        }\n        .kuc-multi-choice__menu__item[aria-checked=\"true\"] {\n          color: #3498db;\n          padding-left: 32px;\n        }\n        .kuc-multi-choice__menu[disabled]\n          .kuc-multi-choice__menu__item[aria-checked=\"true\"] {\n          color: #888;\n        }\n        .kuc-multi-choice__menu__highlight[role=\"menuitemcheckbox\"] {\n          background-color: #e2f2fe;\n          cursor: pointer;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-multi-choice,\n        kuc-multi-choice *,\n        :lang(en) kuc-multi-choice,\n        :lang(en) kuc-multi-choice * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-multi-choice,\n        :lang(ja) kuc-multi-choice * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-multi-choice,\n        :lang(zh) kuc-multi-choice * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-multi-choice {\n          display: inline-block;\n          font-size: 14px;\n          color: #333;\n          width: 180px;\n        }\n        kuc-multi-choice[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__label {\n          margin-top: 4px;\n          margin-bottom: 8px;\n          display: inline-block;\n          white-space: nowrap;\n        }\n        .kuc-multi-choice__label[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-multi-choice__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-multi-choice__error[hidden] {\n          display: none;\n        }\n        .kuc-multi-choice__menu {\n          position: relative;\n          background: #ffffff;\n          border: 1px solid #e3e7e8;\n          box-sizing: border-box;\n          box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;\n          padding: 6px 0;\n          overflow-y: auto;\n          overflow-x: hidden;\n          max-height: 134px;\n          display: table;\n          width: 100%;\n        }\n        .kuc-multi-choice__menu:not([disabled]):focus {\n          outline: none;\n          border: 1px solid #3498db;\n        }\n        .kuc-multi-choice__menu[disabled] {\n          background-color: #dbdcdd;\n          box-shadow: none;\n          cursor: not-allowed;\n          color: #888;\n          outline: none;\n        }\n        .kuc-multi-choice__menu__item {\n          padding: 4px 16px;\n          margin-bottom: 2px;\n          line-height: 1;\n          position: relative;\n          white-space: nowrap;\n        }\n        .kuc-multi-choice__menu__item__icon {\n          position: absolute;\n          top: 50%;\n          left: 16px;\n          margin-top: -6px;\n          pointer-events: none;\n        }\n        .kuc-multi-choice__menu__item[aria-checked=\"true\"] {\n          color: #3498db;\n          padding-left: 32px;\n        }\n        .kuc-multi-choice__menu[disabled]\n          .kuc-multi-choice__menu__item[aria-checked=\"true\"] {\n          color: #888;\n        }\n        .kuc-multi-choice__menu__highlight[role=\"menuitemcheckbox\"] {\n          background-color: #e2f2fe;\n          cursor: pointer;\n        }\n      </style>\n    "])));
    };
    MultiChoice.prototype._setActiveDescendant = function (value) {
        value !== undefined && this._menuEl !== null
            ? this._menuEl.setAttribute("aria-activedescendant", value)
            : this._menuEl.removeAttribute("aria-activedescendant");
    };
    MultiChoice.prototype._handleChangeValue = function (value) {
        var oldValue = this.value;
        var newValue = this._getNewValue(value);
        if (newValue !== oldValue) {
            this.value = newValue;
            this._dispatchCustomEvent("change", {
                oldValue: oldValue,
                value: newValue
            });
        }
    };
    MultiChoice.prototype._getNewValue = function (value) {
        if (this.value.every(function (val) { return val !== value; })) {
            return __spreadArrays(this.value, [value]);
        }
        return this.value.filter(function (val) { return val !== value; });
    };
    MultiChoice.prototype._dispatchCustomEvent = function (eventName, detail) {
        var customEvent = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(customEvent);
    };
    __decorate([
        property({ type: String })
    ], MultiChoice.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], MultiChoice.prototype, "label", void 0);
    __decorate([
        property({ type: Boolean })
    ], MultiChoice.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], MultiChoice.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], MultiChoice.prototype, "visible", void 0);
    __decorate([
        property({ type: Array })
    ], MultiChoice.prototype, "items", void 0);
    __decorate([
        property({ type: Array })
    ], MultiChoice.prototype, "value", void 0);
    __decorate([
        query(".kuc-multi-choice__menu")
    ], MultiChoice.prototype, "_menuEl", void 0);
    __decorate([
        query(".kuc-multi-choice__label")
    ], MultiChoice.prototype, "_labelEl", void 0);
    __decorate([
        queryAll(".kuc-multi-choice__menu__item")
    ], MultiChoice.prototype, "_itemsEl", void 0);
    return MultiChoice;
}(LitElement));
export { MultiChoice };
if (!window.customElements.get("kuc-multi-choice")) {
    window.customElements.define("kuc-multi-choice", MultiChoice);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
