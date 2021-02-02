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
import { LitElement, html, property, query, svg } from "lit-element";
import { v4 as uuid } from "uuid";
var TextAreaLayout = {
    MIN_WIDTH: 299,
    MIN_HEIGHT: 125
};
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this) || this;
        _this.error = "";
        _this.label = "";
        _this.placeholder = "";
        _this.value = "";
        _this.disabled = false;
        _this.requiredIcon = false;
        _this.visible = true;
        _this._onResize = false;
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
    TextArea.prototype._generateGUID = function () {
        return uuid();
    };
    TextArea.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    TextArea.prototype._handleFocusTextarea = function (event) {
        var detail = { value: this.value };
        this._dispatchCustomEvent("focus", detail);
    };
    TextArea.prototype._handleChangeTextarea = function (event) {
        event.stopPropagation();
        var targetEl = event.target;
        var detail = { value: "", oldValue: this.value };
        this.value = targetEl.value;
        detail.value = this.value;
        this._dispatchCustomEvent("change", detail);
    };
    TextArea.prototype._handleResizeMouseDown = function () {
        this._onResize = true;
    };
    TextArea.prototype._handleResizeMouseUp = function () {
        this._onResize = false;
    };
    TextArea.prototype._handleResizeMouseMove = function (event) {
        if (!this._onResize)
            return;
        var textAreaRect = this._textarea.getBoundingClientRect();
        var textAreaWidth = event.clientX - textAreaRect.left;
        var textAreaHeight = event.clientY - textAreaRect.top;
        if (textAreaWidth < TextAreaLayout.MIN_WIDTH)
            textAreaWidth = TextAreaLayout.MIN_WIDTH;
        if (textAreaHeight < TextAreaLayout.MIN_HEIGHT)
            textAreaHeight = TextAreaLayout.MIN_HEIGHT;
        this.style.width = textAreaWidth + "px";
        this._textarea.style.height = textAreaHeight + "px";
    };
    TextArea.prototype._dispatchCustomEvent = function (eventName, detail) {
        var event = new CustomEvent(eventName, {
            detail: detail,
            bubbles: true,
            composed: true
        });
        return this.dispatchEvent(event);
    };
    TextArea.prototype.createRenderRoot = function () {
        return this;
    };
    TextArea.prototype.render = function () {
        this._updateVisible();
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n      <label\n        class=\"kuc-textarea__label\"\n        for=\"", "-label\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-textarea__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-textarea__label__required-icon\"\n          ?hidden=\"", "\"\n          >*</span\n        >\n      </label>\n      <textarea\n        id=\"", "-label\"\n        class=\"kuc-textarea__textarea\"\n        placeholder=\"", "\"\n        .value=", "\n        aria-describedby=\"", "-error\"\n        aria-required=", "\n        aria-invalid=\"", "\"\n        @change=\"", "\"\n        @focus=\"", "\"\n        ?disabled=\"", "\"\n      >\n      </textarea>\n      <div\n        class=\"kuc-textarea__resizer\"\n        @mousedown=\"", "\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n      <div\n        class=\"kuc-textarea__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n    "], ["\n      ", "\n      <label\n        class=\"kuc-textarea__label\"\n        for=\"", "-label\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-textarea__label__text\">", "</span\n        ><!--\n        --><span\n          class=\"kuc-textarea__label__required-icon\"\n          ?hidden=\"", "\"\n          >*</span\n        >\n      </label>\n      <textarea\n        id=\"", "-label\"\n        class=\"kuc-textarea__textarea\"\n        placeholder=\"", "\"\n        .value=", "\n        aria-describedby=\"", "-error\"\n        aria-required=", "\n        aria-invalid=\"", "\"\n        @change=\"", "\"\n        @focus=\"", "\"\n        ?disabled=\"", "\"\n      >\n      </textarea>\n      <div\n        class=\"kuc-textarea__resizer\"\n        @mousedown=\"", "\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n      <div\n        class=\"kuc-textarea__error\"\n        id=\"", "-error\"\n        role=\"alert\"\n        ?hidden=\"", "\"\n      >\n        ", "\n      </div>\n    "])), this._getStyleTagTemplate(), this._GUID, !this.label, this.label, !this.requiredIcon, this._GUID, this.placeholder, this.value, this._GUID, this.requiredIcon, !this.error, this._handleChangeTextarea, this._handleFocusTextarea, this.disabled, this._handleResizeMouseDown, this.disabled, this._getResizerButtonSvgTemplate(), this._GUID, !this.error, this.error);
    };
    TextArea.prototype._getResizerButtonSvgTemplate = function () {
        return svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    <svg height=\"16\" width=\"16\">\n      <g fill=\"none\" stroke=\"#b6b6b6\" stroke-width=\"2\">\n        <line x1=\"14\" x2=\"16\" y1=\"15\" y2=\"15\" />\n        <line x1=\"14\" x2=\"16\" y1=\"11\" y2=\"11\" />\n        <line x1=\"14\" x2=\"16\" y1=\"7\" y2=\"7\" />\n        <line x1=\"10\" x2=\"12\" y1=\"15\" y2=\"15\" />\n        <line x1=\"6\" x2=\"8\" y1=\"15\" y2=\"15\" />\n        <line x1=\"10\" x2=\"12\" y1=\"11\" y2=\"11\" />\n      </g>\n    </svg>\n    "], ["\n    <svg height=\"16\" width=\"16\">\n      <g fill=\"none\" stroke=\"#b6b6b6\" stroke-width=\"2\">\n        <line x1=\"14\" x2=\"16\" y1=\"15\" y2=\"15\" />\n        <line x1=\"14\" x2=\"16\" y1=\"11\" y2=\"11\" />\n        <line x1=\"14\" x2=\"16\" y1=\"7\" y2=\"7\" />\n        <line x1=\"10\" x2=\"12\" y1=\"15\" y2=\"15\" />\n        <line x1=\"6\" x2=\"8\" y1=\"15\" y2=\"15\" />\n        <line x1=\"10\" x2=\"12\" y1=\"11\" y2=\"11\" />\n      </g>\n    </svg>\n    "])));
    };
    TextArea.prototype.firstUpdated = function () {
        var _this = this;
        document.addEventListener("mousemove", function (event) {
            return _this._handleResizeMouseMove(event);
        });
        document.addEventListener("mouseup", function () { return _this._handleResizeMouseUp(); });
    };
    TextArea.prototype._getStyleTagTemplate = function () {
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <style>\n        kuc-textarea,\n        kuc-textarea *,\n        :lang(en) kuc-textarea,\n        :lang(en) kuc-textarea * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-textarea,\n        :lang(ja) kuc-textarea * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-textarea,\n        :lang(zh) kuc-textarea * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-textarea {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          vertical-align: top;\n          width: 299px;\n        }\n        kuc-textarea[hidden] {\n          display: none;\n        }\n        .kuc-textarea__label {\n          display: inline-block;\n          margin-top: 4px;\n          margin-bottom: 8px;\n        }\n        .kuc-textarea__label[hidden] {\n          display: none;\n        }\n        .kuc-textarea__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-textarea__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-textarea__textarea {\n          display: block;\n          border: 1px solid #e3e7e8;\n          box-sizing: border-box;\n          font-size: 14px;\n          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n          min-width: 299px;\n          min-height: 125px;\n          padding: 8px;\n          resize: none;\n          width: 100%;\n        }\n        .kuc-textarea__textarea:focus {\n          outline: none;\n          border-color: #3498db;\n          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n          border: 1px solid #3498db;\n          background-color: #ffffff;\n          color: #333333;\n        }\n        .kuc-textarea__textarea:disabled {\n          color: #888888;\n          background-color: #d4d7d7;\n          box-shadow: none;\n          cursor: not-allowed;\n          resize: none;\n        }\n        .kuc-textarea__resizer {\n          position: relative;\n          width: 16px;\n          height: 16px;\n          cursor: se-resize;\n          float: right;\n          margin: -16px 0px;\n        }\n        .kuc-textarea__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-textarea__error[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-textarea,\n        kuc-textarea *,\n        :lang(en) kuc-textarea,\n        :lang(en) kuc-textarea * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-textarea,\n        :lang(ja) kuc-textarea * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-textarea,\n        :lang(zh) kuc-textarea * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-textarea {\n          font-size: 14px;\n          color: #333333;\n          display: inline-block;\n          vertical-align: top;\n          width: 299px;\n        }\n        kuc-textarea[hidden] {\n          display: none;\n        }\n        .kuc-textarea__label {\n          display: inline-block;\n          margin-top: 4px;\n          margin-bottom: 8px;\n        }\n        .kuc-textarea__label[hidden] {\n          display: none;\n        }\n        .kuc-textarea__label__required-icon {\n          font-size: 20px;\n          vertical-align: -3px;\n          color: #e74c3c;\n          margin-left: 4px;\n          line-height: 1;\n        }\n        .kuc-textarea__label__required-icon[hidden] {\n          display: none;\n        }\n        .kuc-textarea__textarea {\n          display: block;\n          border: 1px solid #e3e7e8;\n          box-sizing: border-box;\n          font-size: 14px;\n          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n          min-width: 299px;\n          min-height: 125px;\n          padding: 8px;\n          resize: none;\n          width: 100%;\n        }\n        .kuc-textarea__textarea:focus {\n          outline: none;\n          border-color: #3498db;\n          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n          border: 1px solid #3498db;\n          background-color: #ffffff;\n          color: #333333;\n        }\n        .kuc-textarea__textarea:disabled {\n          color: #888888;\n          background-color: #d4d7d7;\n          box-shadow: none;\n          cursor: not-allowed;\n          resize: none;\n        }\n        .kuc-textarea__resizer {\n          position: relative;\n          width: 16px;\n          height: 16px;\n          cursor: se-resize;\n          float: right;\n          margin: -16px 0px;\n        }\n        .kuc-textarea__error {\n          line-height: 1.5;\n          padding: 4px 18px;\n          box-sizing: border-box;\n          background-color: #e74c3c;\n          color: #ffffff;\n          margin-top: 8px;\n          word-break: break-all;\n        }\n        .kuc-textarea__error[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], TextArea.prototype, "error", void 0);
    __decorate([
        property({ type: String })
    ], TextArea.prototype, "label", void 0);
    __decorate([
        property({ type: String })
    ], TextArea.prototype, "placeholder", void 0);
    __decorate([
        property({ type: String })
    ], TextArea.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], TextArea.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], TextArea.prototype, "requiredIcon", void 0);
    __decorate([
        property({ type: Boolean })
    ], TextArea.prototype, "visible", void 0);
    __decorate([
        query(".kuc-textarea__label")
    ], TextArea.prototype, "_label", void 0);
    __decorate([
        query(".kuc-textarea__textarea")
    ], TextArea.prototype, "_textarea", void 0);
    return TextArea;
}(LitElement));
export { TextArea };
if (!window.customElements.get("kuc-textarea")) {
    window.customElements.define("kuc-textarea", TextArea);
}
var templateObject_1, templateObject_2, templateObject_3;
