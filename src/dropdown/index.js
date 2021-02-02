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
import { LitElement, html, property, internalProperty, queryAll, query, svg } from "lit-element";
import { v4 as uuid } from "uuid";
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.label = "";
        _this.value = "";
        _this.disabled = false;
        _this.requiredIcon = false;
        _this.visible = true;
        _this.items = [];
        _this._selectorVisible = false;
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
        _this.disabled =
            props.disabled !== undefined ? props.disabled : _this.disabled;
        _this.requiredIcon =
            props.requiredIcon !== undefined ? props.requiredIcon : _this.requiredIcon;
        _this.visible = props.visible !== undefined ? props.visible : _this.visible;
        _this.items = props.items !== undefined ? props.items : _this.items;
        return _this;
    }
    Dropdown.prototype._generateGUID = function () {
        return uuid();
    };
    Dropdown.prototype._getSelectedLabel = function () {
        var _this = this;
        var selectedItemLabel = "";
        this.items.forEach(function (item) {
            if (item.value === _this.value) {
                selectedItemLabel = item.label === undefined ? item.value : item.label;
            }
        });
        return selectedItemLabel;
    };
    Dropdown.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    Dropdown.prototype._dispatchCustomEvent = function (eventName, detail) {
        var changeEvent = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(changeEvent);
    };
    Dropdown.prototype._handleClickDropdownToggle = function (event) {
        if (!this._selectorVisible) {
            this._itemsEl.forEach(function (itemEl) {
                if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
                    itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
                }
                if (itemEl.getAttribute("aria-checked") === "true") {
                    itemEl.classList.add("kuc-dropdown__select-menu__highlight");
                }
            });
        }
        this._selectorVisible = !this._selectorVisible;
        this._removeActiveDescendant();
    };
    Dropdown.prototype._handleBlurDropdownToggle = function (event) {
        this._selectorVisible = false;
        this._removeActiveDescendant();
    };
    Dropdown.prototype._handleUpdateValue = function (value) {
        if (this.value === value)
            return;
        var detail = { oldValue: this.value, value: value };
        this.value = value;
        this._dispatchCustomEvent("change", detail);
    };
    Dropdown.prototype._handleMousedownDropdownItem = function (event) {
        var itemEl = event.target;
        this._selectorVisible = false;
        var value = itemEl.getAttribute("value");
        this._handleUpdateValue(value);
    };
    Dropdown.prototype._handleMouseOverDropdownItem = function (event) {
        this._itemsEl.forEach(function (itemEl) {
            if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
                itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
            }
        });
        var itemEl = event.currentTarget;
        itemEl.classList.add("kuc-dropdown__select-menu__highlight");
        this._setActiveDescendant(itemEl.id);
    };
    Dropdown.prototype._handleMouseLeaveDropdownItem = function (event) {
        var itemEl = event.currentTarget;
        itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
        this._removeActiveDescendant();
    };
    Dropdown.prototype._handleKeyDownDropdownToggle = function (event) {
        var _this = this;
        if (!this._selectorVisible) {
            this._itemsEl.forEach(function (itemEl) {
                if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
                    itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
                }
                if (itemEl.getAttribute("aria-checked") === "true") {
                    itemEl.classList.add("kuc-dropdown__select-menu__highlight");
                }
            });
        }
        else {
            var highLightNumber_1 = 0;
            switch (event.key) {
                case "Up": // IE/Edge specific value
                case "ArrowUp": {
                    this._itemsEl.forEach(function (itemEl, number) {
                        if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
                            itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
                            highLightNumber_1 = number - 1;
                        }
                    });
                    highLightNumber_1 =
                        highLightNumber_1 <= -1 ? this._itemsEl.length - 1 : highLightNumber_1;
                    this._itemsEl[highLightNumber_1].classList.add("kuc-dropdown__select-menu__highlight");
                    this._setActiveDescendant(this._itemsEl[highLightNumber_1].id);
                    break;
                }
                case "Down": // IE/Edge specific value
                case "ArrowDown": {
                    this._itemsEl.forEach(function (itemEl, number) {
                        if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
                            itemEl.classList.remove("kuc-dropdown__select-menu__highlight");
                            highLightNumber_1 = number + 1;
                        }
                    });
                    highLightNumber_1 =
                        highLightNumber_1 >= this._itemsEl.length ? 0 : highLightNumber_1;
                    this._itemsEl[highLightNumber_1].classList.add("kuc-dropdown__select-menu__highlight");
                    this._setActiveDescendant(this._itemsEl[highLightNumber_1].id);
                    break;
                }
                case "Enter": {
                    this._itemsEl.forEach(function (itemEl) {
                        if (itemEl.classList.contains("kuc-dropdown__select-menu__highlight")) {
                            var value = itemEl.getAttribute("value");
                            _this._handleUpdateValue(value);
                        }
                    });
                    break;
                }
                default:
                    break;
            }
        }
    };
    Dropdown.prototype._getToggleIconSvgTemplate = function () {
        return svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <svg\n        width='36'\n        height='36'\n        viewBox='0 0 36 36'\n        fill='none'\n        xmlns='http://www.w3.org/2000/svg'\n      >\n        <path\n          fill-rule='evenodd'\n          clip-rule='evenodd'\n          d='M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z'\n          fill='#3498DB'/>\n      </svg>\n    "], ["\n      <svg\n        width='36'\n        height='36'\n        viewBox='0 0 36 36'\n        fill='none'\n        xmlns='http://www.w3.org/2000/svg'\n      >\n        <path\n          fill-rule='evenodd'\n          clip-rule='evenodd'\n          d='M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z'\n          fill='#3498DB'/>\n      </svg>\n    "])));
    };
    Dropdown.prototype._getDropdownIconSvgTemplate = function (checked) {
        return svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      ", ""], ["\n      ",
            ""])), checked
            ? svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<svg\n          class='kuc-dropdown__select-menu__item__icon'\n          width='11'\n          height='9'\n          viewBox='0 0 11 9'\n          fill='none'\n          xmlns='http://www.w3.org/2000/svg'\n        >\n          <path\n            fill-rule='evenodd'\n            clip-rule='evenodd'\n            d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z'\n            fill='#3498DB'/>\n        </svg>"], ["<svg\n          class='kuc-dropdown__select-menu__item__icon'\n          width='11'\n          height='9'\n          viewBox='0 0 11 9'\n          fill='none'\n          xmlns='http://www.w3.org/2000/svg'\n        >\n          <path\n            fill-rule='evenodd'\n            clip-rule='evenodd'\n            d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z'\n            fill='#3498DB'/>\n        </svg>"]))) : "");
    };
    Dropdown.prototype._getItemTemplate = function (item, index) {
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      <li\n        class=\"kuc-dropdown__select-menu__item\"\n        role=\"menuitem\"\n        tabindex=", "\n        aria-checked=", "\n        value=", "\n        id=\"", "-menuitem-", "\"\n        @mousedown=\"", "\"\n        @mouseover=\"", "\"\n        @mouseleave=\"", "\"\n      >\n        ", "\n        ", "\n      </li>\n    "], ["\n      <li\n        class=\"kuc-dropdown__select-menu__item\"\n        role=\"menuitem\"\n        tabindex=", "\n        aria-checked=", "\n        value=", "\n        id=\"", "-menuitem-", "\"\n        @mousedown=\"", "\"\n        @mouseover=\"", "\"\n        @mouseleave=\"", "\"\n      >\n        ", "\n        ", "\n      </li>\n    "])), item.value === this.value ? "0" : "-1", item.value === this.value ? "true" : "false", item.value !== undefined ? item.value : "", this._GUID, index, this._handleMousedownDropdownItem, this._handleMouseOverDropdownItem, this._handleMouseLeaveDropdownItem, this._getDropdownIconSvgTemplate(item.value === this.value), item.label === undefined ? item.value : item.label);
    };
    Dropdown.prototype.createRenderRoot = function () {
        return this;
    };
    Dropdown.prototype.update = function (changedProperties) {
        if (changedProperties.has("items")) {
            this._validateItems();
        }
        _super.prototype.update.call(this, changedProperties);
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", "\n      <div\n        class=\"kuc-dropdown__label\"\n        id=\"", "-label\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-dropdown__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-dropdown__label__required-icon\"\n          ?hidden=\"", "\"\n          >*</span\n        >\n      </div>\n      <button\n        class=\"kuc-dropdown__toggle\"\n        id=\"", "-toggle\"\n        type=\"button\"\n        aria-haspopup=\"true\"\n        aria-labelledby=\"", "-label ", "-toggle\"\n        aria-describedby=\"", "-error\"\n        aria-required=", "\n        ?disabled=\"", "\"\n        @click=\"", "\"\n        @blur=\"", "\"\n        @keydown=\"", "\"\n      >\n        <span class=\"kuc-dropdown__toggle__selected-item-label\"\n          >", "</span\n        >\n        <span class=\"kuc-dropdown__toggle__icon\">\n          ", "\n        </span>\n      </button>\n      <ul\n        class=\"kuc-dropdown__select-menu\"\n        role=\"menu\"\n        aria-hidden=\"", "\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </ul>\n      <div\n        class=\"kuc-dropdown__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        aria-live=\"assertive\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n    "], ["\n      ", "\n      <div\n        class=\"kuc-dropdown__label\"\n        id=\"", "-label\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-dropdown__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-dropdown__label__required-icon\"\n          ?hidden=\"", "\"\n          >*</span\n        >\n      </div>\n      <button\n        class=\"kuc-dropdown__toggle\"\n        id=\"", "-toggle\"\n        type=\"button\"\n        aria-haspopup=\"true\"\n        aria-labelledby=\"", "-label ", "-toggle\"\n        aria-describedby=\"", "-error\"\n        aria-required=", "\n        ?disabled=\"", "\"\n        @click=\"", "\"\n        @blur=\"", "\"\n        @keydown=\"", "\"\n      >\n        <span class=\"kuc-dropdown__toggle__selected-item-label\"\n          >", "</span\n        >\n        <span class=\"kuc-dropdown__toggle__icon\">\n          ", "\n        </span>\n      </button>\n      <ul\n        class=\"kuc-dropdown__select-menu\"\n        role=\"menu\"\n        aria-hidden=\"", "\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </ul>\n      <div\n        class=\"kuc-dropdown__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        aria-live=\"assertive\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n    "])), this._getStyleTagTemplate(), this._GUID, !this.label, this.label, !this.requiredIcon, this._GUID, this._GUID, this._GUID, this._GUID, this.requiredIcon, this.disabled, this._handleClickDropdownToggle, this._handleBlurDropdownToggle, this._handleKeyDownDropdownToggle, this._getSelectedLabel(), this._getToggleIconSvgTemplate(), !this._selectorVisible, !this._selectorVisible, this.items.map(function (item, number) { return _this._getItemTemplate(item, number); }), this._GUID, !this.error, this.error);
    };
    Dropdown.prototype.updated = function () {
        this._updateContainerWidth();
    };
    Dropdown.prototype._updateContainerWidth = function () {
        var toggleWidth = this._buttonEl.getBoundingClientRect().width;
        var labelWidth = this._labelEl.getBoundingClientRect().width;
        if (toggleWidth < labelWidth) {
            toggleWidth = labelWidth;
        }
        this.style.width = toggleWidth + "px";
    };
    Dropdown.prototype._getStyleTagTemplate = function () {
        return html(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      <style>\n        kuc-dropdown,\n        kuc-dropdown *,\n        :lang(en) kuc-dropdown,\n        :lang(en) kuc-dropdown * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-dropdown,\n        :lang(ja) kuc-dropdown * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-dropdown,\n        :lang(zh) kuc-dropdown * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-dropdown {\n          display: inline-block;\n          font-size: 14px;\n          color: #333333;\n          vertical-align: top;\n          width: 180px;\n        }\n        kuc-dropdown[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__label {\n          margin-top: 4px;\n          margin-bottom: 8px;\n          display: inline-block;\n          white-space: nowrap;\n        }\n        .kuc-dropdown__label[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-dropdown__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__toggle {\n          height: 40px;\n          box-sizing: border-box;\n          box-shadow: 1px 1px 1px #ffffff inset;\n          border: 1px solid #e3e7e8;\n          color: #3498db;\n          background-color: #f7f9fa;\n          padding: 0 0 0 24px;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 100%;\n        }\n        .kuc-dropdown__toggle:focus {\n          outline: none;\n          border: 1px solid #3498db;\n        }\n        .kuc-dropdown__toggle:disabled {\n          background-color: #d4d7d7;\n          box-shadow: none;\n          cursor: not-allowed;\n          color: #888888;\n        }\n        .kuc-dropdown__toggle__selected-item-label {\n          font-size: 14px;\n          text-align: left;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .kuc-dropdown__toggle__icon {\n          flex: none;\n          width: 38px;\n          height: 38px;\n        }\n        .kuc-dropdown__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-dropdown__error[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__select-menu {\n          position: absolute;\n          min-width: 280px;\n          margin: 0;\n          padding: 8px 0;\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n          background-color: #ffffff;\n          z-index: 2000;\n          list-style: none;\n        }\n        .kuc-dropdown__select-menu[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__select-menu__item {\n          padding: 8px 16px 8px 24px;\n          line-height: 1;\n          position: relative;\n        }\n        .kuc-dropdown__select-menu__item__icon {\n          position: absolute;\n          top: 50%;\n          left: 6px;\n          margin-top: -5px;\n        }\n        .kuc-dropdown__select-menu__item[aria-checked=\"true\"] {\n          color: #3498db;\n        }\n        .kuc-dropdown__select-menu__highlight[role=\"menuitem\"] {\n          background-color: #e2f2fe;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-dropdown,\n        kuc-dropdown *,\n        :lang(en) kuc-dropdown,\n        :lang(en) kuc-dropdown * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-dropdown,\n        :lang(ja) kuc-dropdown * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-dropdown,\n        :lang(zh) kuc-dropdown * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-dropdown {\n          display: inline-block;\n          font-size: 14px;\n          color: #333333;\n          vertical-align: top;\n          width: 180px;\n        }\n        kuc-dropdown[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__label {\n          margin-top: 4px;\n          margin-bottom: 8px;\n          display: inline-block;\n          white-space: nowrap;\n        }\n        .kuc-dropdown__label[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-dropdown__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__toggle {\n          height: 40px;\n          box-sizing: border-box;\n          box-shadow: 1px 1px 1px #ffffff inset;\n          border: 1px solid #e3e7e8;\n          color: #3498db;\n          background-color: #f7f9fa;\n          padding: 0 0 0 24px;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 100%;\n        }\n        .kuc-dropdown__toggle:focus {\n          outline: none;\n          border: 1px solid #3498db;\n        }\n        .kuc-dropdown__toggle:disabled {\n          background-color: #d4d7d7;\n          box-shadow: none;\n          cursor: not-allowed;\n          color: #888888;\n        }\n        .kuc-dropdown__toggle__selected-item-label {\n          font-size: 14px;\n          text-align: left;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .kuc-dropdown__toggle__icon {\n          flex: none;\n          width: 38px;\n          height: 38px;\n        }\n        .kuc-dropdown__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-dropdown__error[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__select-menu {\n          position: absolute;\n          min-width: 280px;\n          margin: 0;\n          padding: 8px 0;\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n          background-color: #ffffff;\n          z-index: 2000;\n          list-style: none;\n        }\n        .kuc-dropdown__select-menu[hidden] {\n          display: none;\n        }\n        .kuc-dropdown__select-menu__item {\n          padding: 8px 16px 8px 24px;\n          line-height: 1;\n          position: relative;\n        }\n        .kuc-dropdown__select-menu__item__icon {\n          position: absolute;\n          top: 50%;\n          left: 6px;\n          margin-top: -5px;\n        }\n        .kuc-dropdown__select-menu__item[aria-checked=\"true\"] {\n          color: #3498db;\n        }\n        .kuc-dropdown__select-menu__highlight[role=\"menuitem\"] {\n          background-color: #e2f2fe;\n        }\n      </style>\n    "])));
    };
    Dropdown.prototype._setActiveDescendant = function (value) {
        if (value !== undefined && this._buttonEl !== null) {
            this._buttonEl.setAttribute("aria-activedescendant", value);
        }
    };
    Dropdown.prototype._removeActiveDescendant = function () {
        this._buttonEl.removeAttribute("aria-activedescendant");
    };
    Dropdown.prototype._validateItems = function () {
        if (!Array.isArray(this.items)) {
            throw new Error("'items' property is not array");
        }
        var itemsValue = this.items.map(function (item) { return item.value; });
        itemsValue.forEach(function (value, number, self) {
            if (value !== undefined && self.indexOf(value) !== number) {
                throw new Error("'items[" + number + "].value' property is duplicated");
            }
        });
    };
    __decorate([
        property({ type: String })
    ], Dropdown.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], Dropdown.prototype, "label", void 0);
    __decorate([
        property({ type: String })
    ], Dropdown.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], Dropdown.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], Dropdown.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], Dropdown.prototype, "visible", void 0);
    __decorate([
        property({ type: Array })
    ], Dropdown.prototype, "items", void 0);
    __decorate([
        internalProperty()
    ], Dropdown.prototype, "_selectorVisible", void 0);
    __decorate([
        queryAll(".kuc-dropdown__select-menu__item")
    ], Dropdown.prototype, "_itemsEl", void 0);
    __decorate([
        query("button.kuc-dropdown__toggle")
    ], Dropdown.prototype, "_buttonEl", void 0);
    __decorate([
        query(".kuc-dropdown__label")
    ], Dropdown.prototype, "_labelEl", void 0);
    return Dropdown;
}(LitElement));
export { Dropdown };
if (!window.customElements.get("kuc-dropdown")) {
    window.customElements.define("kuc-dropdown", Dropdown);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
