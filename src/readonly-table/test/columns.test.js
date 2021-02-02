var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";
describe("confirm columns default value is not set", function () {
    var container = new ReadOnlyTable();
    it("confirm columns default value is not set", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    return [4 /*yield*/, expect(columnsEl[0].children.length).to.be.equal(0)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("columns constructor set successfully without header prop", function () {
    var container = new ReadOnlyTable({
        columns: [
            {
                visible: true
            },
            {
                visible: true
            },
            {
                visible: false
            }
        ]
    });
    it("columns constructor set successfully without header prop", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 9];
                    columnEl = columnsEl[0].children[i];
                    if (!(i === 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(true)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(false)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal("")];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/];
            }
        });
    }); });
});
describe("columns constructor set successfully without visible prop", function () {
    var expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    var container = new ReadOnlyTable({
        columns: [
            {
                header: {
                    text: expectedHeaderTexts[0]
                }
            },
            {
                header: {
                    text: expectedHeaderTexts[1]
                }
            },
            {
                header: {
                    text: expectedHeaderTexts[2]
                }
            }
        ]
    });
    it("columns constructor set successfully without visible prop", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 5];
                    columnEl = columnsEl[0].children[i];
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal(expectedHeaderTexts[i])];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
describe("columns prop set successfully without header prop", function () {
    var newColums = [
        {
            visible: true
        },
        {
            visible: true
        },
        {
            visible: false
        }
    ];
    var container = new ReadOnlyTable({});
    container.columns = newColums;
    it("columns prop set successfully without header prop", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 9];
                    columnEl = columnsEl[0].children[i];
                    if (!(i === 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(true)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(false)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal("")];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/];
            }
        });
    }); });
});
describe("columns prop set successfully without visible prop", function () {
    var expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    var newColums = [
        {
            header: {
                text: expectedHeaderTexts[0]
            }
        },
        {
            header: {
                text: expectedHeaderTexts[1]
            }
        },
        {
            header: {
                text: expectedHeaderTexts[2]
            }
        }
    ];
    var container = new ReadOnlyTable({});
    container.columns = newColums;
    it("columns prop set successfully without visible prop", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 5];
                    columnEl = columnsEl[0].children[i];
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal(expectedHeaderTexts[i])];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
describe("columns constructor set successfully with full optional props", function () {
    var expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    var container = new ReadOnlyTable({
        columns: [
            {
                header: {
                    text: expectedHeaderTexts[0]
                },
                visible: true
            },
            {
                header: {
                    text: expectedHeaderTexts[1]
                },
                visible: true
            },
            {
                header: {
                    text: expectedHeaderTexts[2]
                },
                visible: false
            }
        ]
    });
    it("columns constructor set successfully without header prop", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 9];
                    columnEl = columnsEl[0].children[i];
                    if (!(i === 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(true)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(false)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal(expectedHeaderTexts[i])];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/];
            }
        });
    }); });
});
describe("columns prop set successfully with full optional props", function () {
    var expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    var newColums = [
        {
            header: {
                text: expectedHeaderTexts[0]
            },
            visible: true
        },
        {
            header: {
                text: expectedHeaderTexts[1]
            },
            visible: true
        },
        {
            header: {
                text: expectedHeaderTexts[2]
            },
            visible: false
        }
    ];
    var container = new ReadOnlyTable({});
    container.columns = newColums;
    it("columns prop set successfully with full optional props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 9];
                    columnEl = columnsEl[0].children[i];
                    if (!(i === 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(true)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, expect(columnEl.hasAttribute("hidden")).to.have.equal(false)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal(expectedHeaderTexts[i])];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 2];
                case 9: return [4 /*yield*/, expect(container.columns).to.be.equal(newColums)];
                case 10:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("columns prop replace successfully", function () {
    var expectedHeaderTexts = ["fruit", "Producing area", "Price"];
    var container = new ReadOnlyTable({
        columns: [
            {
                header: {
                    text: expectedHeaderTexts[2]
                },
                visible: false
            }
        ]
    });
    var newColums = [
        {
            header: {
                text: expectedHeaderTexts[0]
            },
            visible: true
        },
        {
            header: {
                text: expectedHeaderTexts[1]
            },
            visible: true
        }
    ];
    container.columns = newColums;
    it("columns prop replace successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, columnsEl, i, columnEl, value;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    columnsEl = el.querySelector(".kuc-readonly-table__table__header")
                        .children;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < columnsEl[0].children.length)) return [3 /*break*/, 5];
                    columnEl = columnsEl[0].children[i];
                    value = (_a = columnEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    return [4 /*yield*/, expect(value).to.have.equal(expectedHeaderTexts[i])];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, expect(container.columns).to.be.equal(newColums)];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("throw error when set by constructor", function () {
    it("have columns which is not array", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () {
                        // @ts-ignore
                        var container = new ReadOnlyTable({ columns: null });
                    }).to.throw(Error, "'columns' property is invalid")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("throw error when set by prop", function () {
    it("have columns which is not array", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () {
                        var container = new ReadOnlyTable();
                        // @ts-ignore
                        container.columns = null;
                    }).to.throw(Error, "'columns' property is invalid")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
