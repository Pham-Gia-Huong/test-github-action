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
import { LitElement, html, property, queryAll, svg } from "lit-element";
var MobileCheckbox = /** @class */ (function (_super) {
    __extends(MobileCheckbox, _super);
    function MobileCheckbox(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
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
    MobileCheckbox.prototype._generateGUID = function () {
        return (new Date().getTime().toString(16) +
            Math.floor(Math.random() * 0x1000).toString(16));
    };
    MobileCheckbox.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    MobileCheckbox.prototype._getNewValue = function (value) {
        if (this.value.every(function (val) { return val !== value; })) {
            return __spreadArrays(this.value, [value]);
        }
        return this.value.filter(function (val) { return val !== value; });
    };
    MobileCheckbox.prototype._handleChangeInput = function (event) {
        event.stopPropagation();
        var inputEl = event.target;
        var oldValue = this.value;
        var newValue = this._getNewValue(inputEl.value);
        this.value = newValue;
        var detail = { value: newValue, oldValue: oldValue };
        this._dispatchCustomEvent("change", detail);
    };
    MobileCheckbox.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    };
    MobileCheckbox.prototype.createRenderRoot = function () {
        return this;
    };
    MobileCheckbox.prototype._getCheckboxIconSvgTemplate = function (checked) {
        return svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n     <svg \n       class=\"kuc-mobile-checkbox__group__select-menu__item__label__icon\"\n       xmlns=\"http://www.w3.org/2000/svg\"  \n       id=\"Layer_1\" \n       x=\"0px\" \n       y=\"0px\" \n       width=\"44px\" \n       height=\"34px\" \n       viewBox=\"0 0 44 34\" \n       enable-background=\"new 0 0 44 34\" \n       xml:space=\"preserve\"> \n       <image id=\"image0\" width=\"44\" height=\"34\" x=\"0\" y=\"0\" href='", "'/>\n    </svg>\n     "], ["\n     <svg \n       class=\"kuc-mobile-checkbox__group__select-menu__item__label__icon\"\n       xmlns=\"http://www.w3.org/2000/svg\"  \n       id=\"Layer_1\" \n       x=\"0px\" \n       y=\"0px\" \n       width=\"44px\" \n       height=\"34px\" \n       viewBox=\"0 0 44 34\" \n       enable-background=\"new 0 0 44 34\" \n       xml:space=\"preserve\"> \n       <image id=\"image0\" width=\"44\" height=\"34\" x=\"0\" y=\"0\" href='",
            "'/>\n    </svg>\n     "])), this._getSVGStrokeValue(checked));
    };
    MobileCheckbox.prototype._getSVGStrokeValue = function (checked) {
        if (checked) {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC";
        }
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC";
    };
    MobileCheckbox.prototype._getItemTemplate = function (item, index) {
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <label\n        for=\"", "-item-", "\"\n        class=\"kuc-mobile-checkbox__group__select-menu__item\"\n        ?borderVisible=", "\n      >\n        <input\n          type=\"checkbox\"\n          id=\"", "-item-", "\"\n          class=\"kuc-mobile-checkbox__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=", "\n          aria-describedby=\"", "-error}\"\n          aria-required=", "\n          aria-invalid=\"", "\"\n          ?disabled=\"", "\"\n          @change=\"", "\"\n        />\n        <div class=\"kuc-mobile-checkbox__group__select-menu__item__label\">\n          ", "", "\n        </div>\n      </label>\n    "], ["\n      <label\n        for=\"", "-item-", "\"\n        class=\"kuc-mobile-checkbox__group__select-menu__item\"\n        ?borderVisible=", "\n      >\n        <input\n          type=\"checkbox\"\n          id=\"", "-item-", "\"\n          class=\"kuc-mobile-checkbox__group__select-menu__item__input\"\n          name=\"", "-group\"\n          value=", "\n          aria-describedby=\"", "-error}\"\n          aria-required=", "\n          aria-invalid=\"", "\"\n          ?disabled=\"", "\"\n          @change=\"", "\"\n        />\n        <div class=\"kuc-mobile-checkbox__group__select-menu__item__label\">\n          ",
            "", "\n        </div>\n      </label>\n    "])), this._GUID, index, this.borderVisible, this._GUID, index, this._GUID, item.value !== undefined ? item.value : "", this._GUID, this.requiredIcon, !this.error, this.disabled, this._handleChangeInput, this._getCheckboxIconSvgTemplate(item.value !== undefined
            ? this.value.some(function (val) { return val === item.value; })
            : false), item.label === undefined ? item.value : item.label);
    };
    MobileCheckbox.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      ", "\n      <fieldset class=\"kuc-mobile-checkbox__group\">\n        <legend\n          class=\"kuc-mobile-checkbox__group__label\"\n          ?hidden=\"", "\"\n        >\n          <span class=\"kuc-mobile-checkbox__group__label__text\"\n            >", "</span\n          ><!--\n          --><span\n            class=\"kuc-mobile-checkbox__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </legend>\n        <div\n          class=\"kuc-mobile-checkbox__group__select-menu ", "\"\n          ?borderVisible=", "\n          ?disabled=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-mobile-checkbox__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </fieldset>\n    "], ["\n      ", "\n      <fieldset class=\"kuc-mobile-checkbox__group\">\n        <legend\n          class=\"kuc-mobile-checkbox__group__label\"\n          ?hidden=\"", "\"\n        >\n          <span class=\"kuc-mobile-checkbox__group__label__text\"\n            >", "</span\n          ><!--\n          --><span\n            class=\"kuc-mobile-checkbox__group__label__required-icon\"\n            ?hidden=\"", "\"\n            >*</span\n          >\n        </legend>\n        <div\n          class=\"kuc-mobile-checkbox__group__select-menu ",
            "\"\n          ?borderVisible=", "\n          ?disabled=\"", "\"\n        >\n          ", "\n        </div>\n        <div\n          class=\"kuc-mobile-checkbox__error\"\n          id=\"", "-error\"\n          role=\"alert\"\n          aria-live=\"assertive\"\n          ?hidden=\"", "\"\n        >\n          ", "\n        </div>\n      </fieldset>\n    "])), this._getStyleTagTemplate(), !this.label, this.label, !this.requiredIcon, this.requiredIcon
            ? "kuc-mobile-checkbox__group__select-menu--required"
            : "", this.borderVisible, this.disabled, this.items.map(function (item, index) { return _this._getItemTemplate(item, index); }), this._GUID, !this.error, this.error);
    };
    MobileCheckbox.prototype.updated = function () {
        var _this = this;
        this._inputEls.forEach(function (inputEl) {
            inputEl.checked = _this.value.indexOf(inputEl.value) > -1;
        });
    };
    MobileCheckbox.prototype._getStyleTagTemplate = function () {
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      <style>\n        kuc-mobile-checkbox,\n        kuc-mobile-checkbox * {\n          color: #333333;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n\n        :lang(zh) kuc-mobile-checkbox,\n        :lang(zh) kuc-mobile-checkbox * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n\n        kuc-mobile-checkbox {\n          width: 100%;\n          display: inline-block;\n        }\n\n        kuc-mobile-checkbox[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-checkbox__group {\n          border: none;\n          padding: 0.5em 0.5em 1em;\n          height: auto;\n          display: inline-block;\n          width: 100%;\n          box-sizing: border-box;\n        }\n\n        .kuc-mobile-checkbox__group__label {\n          display: inline-block;\n          padding: 5px 0px 0px 0px;\n          white-space: nowrap;\n        }\n\n        .kuc-mobile-checkbox__group__label[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-checkbox__group__label__text {\n          text-shadow: 0 1px 0 #fff;\n          color: #888888;\n          font-size: 86%;\n          font-weight: bold;\n        }\n\n        .kuc-mobile-checkbox__group__label__required-icon {\n          position: relative;\n          left: 3px;\n          color: #d01212;\n        }\n\n        .kuc-mobile-checkbox__group__label__required-icon[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu[bordervisible] {\n          border-color: #b3b3b3;\n          border-width: 1px;\n          border-style: solid;\n          border-radius: 8px;\n          margin: -4px 0px 0px 0px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu[disabled] {\n          background-color: #d5d7d9;\n          color: #999999;\n          -webkit-text-fill-color: #999999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu--required[bordervisible] {\n          border-color: #cf4a38;\n          border-width: 1px;\n          border-style: solid;\n          border-radius: 8px;\n          margin: -4px 0px 0px 0px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item[bordervisible] {\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          height: 30px;\n          display: block;\n          border-bottom: 1px solid #b3b3b3;\n          padding: 8px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item {\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          height: 30px;\n          display: block;\n          padding: 8px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item:last-child {\n          border-bottom: 0px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__input[disabled]\n          + .kuc-mobile-checkbox__group__select-menu__item__label {\n          background-color: #d5d7d9;\n          color: #999999;\n          -webkit-text-fill-color: #999999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__label {\n          position: relative;\n          margin: -7px 0px 0px 34px;\n          display: inline-block;\n          vertical-align: middle;\n          white-space: nowrap;\n          padding: 11px 13px 13px 0px;\n          font-size: 14.04px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          left: -30px;\n          margin-top: -13px;\n          box-sizing: border-box;\n          width: 22px;\n          height: 22px;\n          background-size: 22px 17px;\n          content: \"\";\n        }\n\n        .kuc-mobile-checkbox__error {\n          line-height: 1.5;\n          border: 1px solid #e5db68;\n          background-color: #fdffc9;\n          margin-top: 0.3em;\n          padding: 0.4em 1em;\n          border-radius: 0.4em;\n          font-size: 13px;\n          color: #000000;\n        }\n\n        .kuc-mobile-checkbox__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-mobile-checkbox,\n        kuc-mobile-checkbox * {\n          color: #333333;\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, \"Hiragino Kaku Gothic ProN\",\n            \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"Lucida Grande\",\n            \"Lucida Sans Unicode\", Arial, Verdana, sans-serif;\n        }\n\n        :lang(zh) kuc-mobile-checkbox,\n        :lang(zh) kuc-mobile-checkbox * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", \"Lucida Grande\", \"Lucida Sans Unicode\", Arial,\n            Verdana, sans-serif;\n        }\n\n        kuc-mobile-checkbox {\n          width: 100%;\n          display: inline-block;\n        }\n\n        kuc-mobile-checkbox[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-checkbox__group {\n          border: none;\n          padding: 0.5em 0.5em 1em;\n          height: auto;\n          display: inline-block;\n          width: 100%;\n          box-sizing: border-box;\n        }\n\n        .kuc-mobile-checkbox__group__label {\n          display: inline-block;\n          padding: 5px 0px 0px 0px;\n          white-space: nowrap;\n        }\n\n        .kuc-mobile-checkbox__group__label[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-checkbox__group__label__text {\n          text-shadow: 0 1px 0 #fff;\n          color: #888888;\n          font-size: 86%;\n          font-weight: bold;\n        }\n\n        .kuc-mobile-checkbox__group__label__required-icon {\n          position: relative;\n          left: 3px;\n          color: #d01212;\n        }\n\n        .kuc-mobile-checkbox__group__label__required-icon[hidden] {\n          display: none;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu[bordervisible] {\n          border-color: #b3b3b3;\n          border-width: 1px;\n          border-style: solid;\n          border-radius: 8px;\n          margin: -4px 0px 0px 0px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu[disabled] {\n          background-color: #d5d7d9;\n          color: #999999;\n          -webkit-text-fill-color: #999999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu--required[bordervisible] {\n          border-color: #cf4a38;\n          border-width: 1px;\n          border-style: solid;\n          border-radius: 8px;\n          margin: -4px 0px 0px 0px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item[bordervisible] {\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          height: 30px;\n          display: block;\n          border-bottom: 1px solid #b3b3b3;\n          padding: 8px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item {\n          padding: 4px;\n          border: 1px solid transparent;\n          position: relative;\n          white-space: normal;\n          word-wrap: normal;\n          height: 30px;\n          display: block;\n          padding: 8px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item:last-child {\n          border-bottom: 0px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__input {\n          position: absolute;\n          opacity: 0;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__input[disabled]\n          + .kuc-mobile-checkbox__group__select-menu__item__label {\n          background-color: #d5d7d9;\n          color: #999999;\n          -webkit-text-fill-color: #999999;\n          background-color: #d5d7d9;\n          opacity: 1;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__label {\n          position: relative;\n          margin: -7px 0px 0px 34px;\n          display: inline-block;\n          vertical-align: middle;\n          white-space: nowrap;\n          padding: 11px 13px 13px 0px;\n          font-size: 14.04px;\n        }\n\n        .kuc-mobile-checkbox__group__select-menu__item__label__icon {\n          position: absolute;\n          top: 50%;\n          left: -30px;\n          margin-top: -13px;\n          box-sizing: border-box;\n          width: 22px;\n          height: 22px;\n          background-size: 22px 17px;\n          content: \"\";\n        }\n\n        .kuc-mobile-checkbox__error {\n          line-height: 1.5;\n          border: 1px solid #e5db68;\n          background-color: #fdffc9;\n          margin-top: 0.3em;\n          padding: 0.4em 1em;\n          border-radius: 0.4em;\n          font-size: 13px;\n          color: #000000;\n        }\n\n        .kuc-mobile-checkbox__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], MobileCheckbox.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], MobileCheckbox.prototype, "label", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileCheckbox.prototype, "borderVisible", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileCheckbox.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileCheckbox.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], MobileCheckbox.prototype, "visible", void 0);
    __decorate([
        property({
            type: Array,
            hasChanged: function (newVal, _oldVal) {
                if (!Array.isArray(newVal)) {
                    throw new Error("'items' property is not array");
                }
                var checkedList = [];
                newVal.forEach(function (item, index) {
                    if (checkedList.indexOf(item.value === undefined ? "" : item.value) > -1) {
                        throw new Error("'items[" + index + "].value' is duplicated! You can specify unique one.");
                    }
                    checkedList.push(item.value === undefined ? "" : item.value);
                });
                return true;
            }
        })
    ], MobileCheckbox.prototype, "items", void 0);
    __decorate([
        property({
            type: Array,
            hasChanged: function (newVal, _oldVal) {
                if (!Array.isArray(newVal)) {
                    throw new Error("'value' property is not array");
                }
                var checkedList = [];
                newVal.forEach(function (value, index) {
                    if (checkedList.indexOf(value === undefined ? "" : value) > -1) {
                        throw new Error("'value[" + index + "]' is duplicated! You can specify unique one.");
                    }
                    checkedList.push(value === undefined ? "" : value);
                });
                return true;
            }
        })
    ], MobileCheckbox.prototype, "value", void 0);
    __decorate([
        queryAll(".kuc-mobile-checkbox__group__select-menu__item__input")
    ], MobileCheckbox.prototype, "_inputEls", void 0);
    return MobileCheckbox;
}(LitElement));
export { MobileCheckbox };
if (!window.customElements.get("kuc-mobile-checkbox")) {
    window.customElements.define("kuc-mobile-checkbox", MobileCheckbox);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
