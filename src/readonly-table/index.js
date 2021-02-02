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
var ReadOnlyTable = /** @class */ (function (_super) {
    __extends(ReadOnlyTable, _super);
    function ReadOnlyTable(props) {
        var _this = _super.call(this) || this;
        _this.label = "";
        _this.visible = true;
        _this.columns = [];
        _this.data = [];
        if (!props) {
            return _this;
        }
        _this.className =
            props.className !== undefined ? props.className : _this.className;
        _this.id = props.id !== undefined ? props.id : _this.id;
        _this.label = props.label !== undefined ? props.label : _this.label;
        _this.visible = props.visible !== undefined ? props.visible : _this.visible;
        if (!Array.isArray(props.columns) && props.columns !== undefined) {
            throw new Error("'columns' property is invalid");
        }
        _this.columns = props.columns !== undefined ? props.columns : _this.columns;
        if (!Array.isArray(props.data) && props.data !== undefined) {
            throw new Error("'data' property is invalid");
        }
        props.data &&
            props.data.forEach(function (data) {
                if (!Array.isArray(data)) {
                    throw new Error("'data' property is invalid");
                }
            });
        _this.data = props.data !== undefined ? props.data : _this.data;
        return _this;
    }
    ReadOnlyTable.prototype._updateVisible = function () {
        if (!this.visible) {
            this.setAttribute("hidden", "");
        }
        else {
            this.removeAttribute("hidden");
        }
    };
    ReadOnlyTable.prototype.createRenderRoot = function () {
        return this;
    };
    ReadOnlyTable.prototype._getColumnsTemplate = function (column) {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <th\n        class=\"kuc-readonly-table__table__header__cell\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-readonly-table__table__header__cell__label\">\n          ", "</span\n        >\n      </th>\n    "], ["\n      <th\n        class=\"kuc-readonly-table__table__header__cell\"\n        ?hidden=\"", "\"\n      >\n        <span class=\"kuc-readonly-table__table__header__cell__label\">\n          ", "</span\n        >\n      </th>\n    "])), column.visible === false, column.header && column.header.text);
    };
    ReadOnlyTable.prototype._getDataTemplate = function (data, number) {
        var _this = this;
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <tr\n        class=\"kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-", "\"\n      >\n        ", "\n      </tr>\n    "], ["\n      <tr\n        class=\"kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-", "\"\n      >\n        ",
            "\n      </tr>\n    "])), number, data.map(function (dataContent, dataNumber) {
            var isHidden = false;
            if (_this.columns[dataNumber] &&
                _this.columns[dataNumber].visible === false) {
                isHidden = true;
            }
            return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            <td\n              class=\"kuc-readonly-table__table__body__row__cell-data\"\n              ?hidden=\"", "\"\n            >\n              ", "\n            </td>\n          "], ["\n            <td\n              class=\"kuc-readonly-table__table__body__row__cell-data\"\n              ?hidden=\"", "\"\n            >\n              ", "\n            </td>\n          "])), isHidden, dataContent);
        }));
    };
    ReadOnlyTable.prototype.render = function () {
        var _this = this;
        this._updateVisible();
        return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n      <table class=\"kuc-readonly-table__table\" aria-label=\"", "\">\n        <caption class=\"kuc-readonly-table__label\" ?hidden=\"", "\">\n          <span class=\"kuc-readonly-table__table__label__text\"\n            >", "</span\n          >\n        </caption>\n        <thead class=\"kuc-readonly-table__table__header\">\n          <tr>\n            ", "\n          </tr>\n        </thead>\n        <tbody class=\"kuc-readonly-table__table__body\">\n          ", "\n        </tbody>\n      </table>\n    "], ["\n      ", "\n      <table class=\"kuc-readonly-table__table\" aria-label=\"", "\">\n        <caption class=\"kuc-readonly-table__label\" ?hidden=\"", "\">\n          <span class=\"kuc-readonly-table__table__label__text\"\n            >", "</span\n          >\n        </caption>\n        <thead class=\"kuc-readonly-table__table__header\">\n          <tr>\n            ", "\n          </tr>\n        </thead>\n        <tbody class=\"kuc-readonly-table__table__body\">\n          ",
            "\n        </tbody>\n      </table>\n    "])), this._getStyleTagTemplate(), this.label, !this.label, this.label, this.columns.map(function (column) { return _this._getColumnsTemplate(column); }), this.data.map(function (data, number) {
            return _this._getDataTemplate(data, number);
        }));
    };
    ReadOnlyTable.prototype._getStyleTagTemplate = function () {
        return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <style>\n        kuc-readonly-table,\n        kuc-readonly-table *,\n        :lang(en) kuc-readonly-table,\n        :lang(en) kuc-readonly-table * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-readonly-table,\n        :lang(ja) kuc-readonly-table * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-readonly-table,\n        :lang(zh) kuc-readonly-table * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-readonly-table {\n          font-size: 14px;\n          color: #333333;\n          display: block;\n        }\n        kuc-readonly-table[hidden] {\n          display: none;\n        }\n        .kuc-readonly-table__table {\n          border-collapse: collapse;\n        }\n        .kuc-readonly-table__table__header {\n          border-width: 0px 1px;\n          border-color: #3498db;\n          border-style: solid;\n        }\n        .kuc-readonly-table__label {\n          text-align: left;\n          margin-bottom: 4px;\n        }\n        .kuc-readonly-table__label[hideden] {\n          display: none;\n        }\n        .kuc-readonly-table__table__header__cell {\n          background-color: #3498db;\n          color: #ffffff;\n          height: 40px;\n          box-sizing: border-box;\n          text-align: left;\n          min-width: 193px;\n        }\n        .kuc-readonly-table__table__header__cell[hidden] {\n          display: none;\n        }\n        .kuc-readonly-table__table__header__cell__label {\n          padding: 4px 8px;\n          font-weight: 400;\n          font-size: 12px;\n        }\n        .kuc-readonly-table__table__body__row-0\n          > .kuc-readonly-table__table__body__row__cell-data {\n          border-width: 0 1px 1px 1px;\n        }\n        .kuc-readonly-table__table__body__row__cell-data {\n          border-color: #e3e7e8;\n          border-style: solid;\n          border-width: 1px;\n          padding: 4px 8px;\n        }\n        .kuc-readonly-table__table__body__row__cell-data[hidden] {\n          display: none;\n        }\n      </style>\n    "], ["\n      <style>\n        kuc-readonly-table,\n        kuc-readonly-table *,\n        :lang(en) kuc-readonly-table,\n        :lang(en) kuc-readonly-table * {\n          font-family: \"HelveticaNeueW02-45Ligh\", Arial,\n            \"Hiragino Kaku Gothic ProN\", Meiryo, sans-serif;\n        }\n        :lang(ja) kuc-readonly-table,\n        :lang(ja) kuc-readonly-table * {\n          font-family: \"\u30E1\u30A4\u30EA\u30AA\", \"Hiragino Kaku Gothic ProN\", Meiryo,\n            sans-serif;\n        }\n        :lang(zh) kuc-readonly-table,\n        :lang(zh) kuc-readonly-table * {\n          font-family: \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Microsoft YaHei\", \"\u65B0\u5B8B\u4F53\", NSimSun, STHeiti,\n            Hei, \"Heiti SC\", sans-serif;\n        }\n        kuc-readonly-table {\n          font-size: 14px;\n          color: #333333;\n          display: block;\n        }\n        kuc-readonly-table[hidden] {\n          display: none;\n        }\n        .kuc-readonly-table__table {\n          border-collapse: collapse;\n        }\n        .kuc-readonly-table__table__header {\n          border-width: 0px 1px;\n          border-color: #3498db;\n          border-style: solid;\n        }\n        .kuc-readonly-table__label {\n          text-align: left;\n          margin-bottom: 4px;\n        }\n        .kuc-readonly-table__label[hideden] {\n          display: none;\n        }\n        .kuc-readonly-table__table__header__cell {\n          background-color: #3498db;\n          color: #ffffff;\n          height: 40px;\n          box-sizing: border-box;\n          text-align: left;\n          min-width: 193px;\n        }\n        .kuc-readonly-table__table__header__cell[hidden] {\n          display: none;\n        }\n        .kuc-readonly-table__table__header__cell__label {\n          padding: 4px 8px;\n          font-weight: 400;\n          font-size: 12px;\n        }\n        .kuc-readonly-table__table__body__row-0\n          > .kuc-readonly-table__table__body__row__cell-data {\n          border-width: 0 1px 1px 1px;\n        }\n        .kuc-readonly-table__table__body__row__cell-data {\n          border-color: #e3e7e8;\n          border-style: solid;\n          border-width: 1px;\n          padding: 4px 8px;\n        }\n        .kuc-readonly-table__table__body__row__cell-data[hidden] {\n          display: none;\n        }\n      </style>\n    "])));
    };
    __decorate([
        property({ type: String })
    ], ReadOnlyTable.prototype, "label", void 0);
    __decorate([
        property({ type: Boolean })
    ], ReadOnlyTable.prototype, "visible", void 0);
    __decorate([
        property({
            type: Array,
            hasChanged: function (newVal) {
                if (!Array.isArray(newVal)) {
                    throw new Error("'columns' property is invalid");
                }
                return true;
            }
        })
    ], ReadOnlyTable.prototype, "columns", void 0);
    __decorate([
        property({
            type: Array,
            hasChanged: function (newVal) {
                if (!Array.isArray(newVal)) {
                    throw new Error("'data' property is invalid");
                }
                newVal &&
                    newVal.forEach(function (data) {
                        if (!Array.isArray(data)) {
                            throw new Error("'data' property is invalid");
                        }
                    });
                return true;
            }
        })
    ], ReadOnlyTable.prototype, "data", void 0);
    return ReadOnlyTable;
}(LitElement));
export { ReadOnlyTable };
if (!window.customElements.get("kuc-readonly-table")) {
    window.customElements.define("kuc-readonly-table", ReadOnlyTable);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
