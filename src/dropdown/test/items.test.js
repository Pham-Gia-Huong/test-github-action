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
import { Dropdown } from "../index";
describe("items default prop is null", function () {
    var container = new Dropdown();
    it("items default prop is null", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-dropdown__select-menu")
                        .children;
                    if (!itemsEl.children || itemsEl.length !== 3) {
                        expect(true);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("items prop set successfully without label props", function () {
    var expectedValues = ["-----", "orange", "Apple"];
    var newitems = [
        {
            value: expectedValues[0]
        },
        {
            value: expectedValues[1]
        },
        {
            value: expectedValues[2]
        }
    ];
    var container = new Dropdown({ items: newitems });
    it("items prop set successfully without label props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, label;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    itemsEl = el.querySelector(".kuc-dropdown__select-menu")
                        .children;
                    if (!itemsEl.children || itemsEl.length !== 3) {
                        expect(false);
                    }
                    for (i = 0; i < itemsEl.length; i++) {
                        itemEl = itemsEl[i];
                        label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                        expect(label).to.have.equal(expectedValues[i]);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("items prop set successfully without label props", function () {
    var expectedValues = ["-----", "orange", "Apple"];
    var newitems = [
        {
            value: expectedValues[0]
        },
        {
            value: expectedValues[1]
        },
        {
            value: expectedValues[2]
        }
    ];
    var container = new Dropdown();
    container.items = newitems;
    it("items prop set successfully without label props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, label;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    itemsEl = el.querySelector(".kuc-dropdown__select-menu")
                        .children;
                    if (!itemsEl.children || itemsEl.length !== 3) {
                        expect(false);
                    }
                    for (i = 0; i < itemsEl.length; i++) {
                        itemEl = itemsEl[i];
                        label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                        expect(label).to.have.equal(expectedValues[i]);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("items default set successfully with full optional props", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var newitems = [
        {
            label: expectedLabels[0],
            value: expectedValues[0]
        },
        {
            label: expectedLabels[1],
            value: expectedValues[1]
        },
        {
            label: expectedLabels[2],
            value: expectedValues[2]
        }
    ];
    var container = new Dropdown({
        items: newitems
    });
    it("items default set successfully with full optional props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, label;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    itemsEl = el.querySelector(".kuc-dropdown__select-menu")
                        .children;
                    if (!itemsEl.children || itemsEl.length !== 3) {
                        expect(false);
                    }
                    for (i = 0; i < itemsEl.length; i++) {
                        itemEl = itemsEl[i];
                        label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                        expect(label).to.have.equal(expectedLabels[i]);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    expect(container.items).to.be.equal(newitems);
});
describe("items prop set successfully with full optional props", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var newitems = [
        {
            label: expectedLabels[0],
            value: expectedValues[0]
        },
        {
            label: expectedLabels[1],
            value: expectedValues[1]
        },
        {
            label: expectedLabels[2],
            value: expectedValues[2]
        }
    ];
    var container = new Dropdown();
    container.items = newitems;
    it("items prop set successfully with full optional props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, label;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    itemsEl = el.querySelector(".kuc-dropdown__select-menu")
                        .children;
                    if (!itemsEl.children || itemsEl.length !== 3) {
                        expect(false);
                    }
                    for (i = 0; i < itemsEl.length; i++) {
                        itemEl = itemsEl[i];
                        label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                        expect(label).to.have.equal(expectedLabels[i]);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    expect(container.items).to.be.equal(newitems);
});
describe("items prop replace successfully", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
        items: [
            {
                label: expectedLabels[2],
                value: expectedValues[2]
            }
        ]
    });
    var newitems = [
        {
            label: expectedLabels[0],
            value: expectedValues[0]
        },
        {
            label: expectedLabels[1],
            value: expectedValues[1]
        }
    ];
    container.items = newitems;
    it("items prop replace successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, label;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    itemsEl = el.querySelector(".kuc-dropdown__select-menu")
                        .children;
                    if (!itemsEl.children || itemsEl.length !== 2) {
                        expect(false);
                    }
                    for (i = 0; i < itemsEl.length; i++) {
                        itemEl = itemsEl[i];
                        label = (_a = itemEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                        expect(label).to.have.equal(expectedLabels[i]);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    expect(container.items).to.be.equal(newitems);
});
describe("throw error when default props", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    it("items default property is not array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new Dropdown({
                        // @ts-ignore
                        items: null,
                        value: expectedValues[1]
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fixture(container)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    expect(error_1.message).to.equal("'items' property is not array");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it("default value is duplicated", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new Dropdown({
                        items: [
                            {
                                label: expectedLabels[0],
                                value: expectedValues[0]
                            },
                            {
                                label: expectedLabels[1],
                                value: expectedValues[0]
                            }
                        ],
                        value: expectedValues[1]
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fixture(container)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    expect(error_2.message).to.equal("'items[1].value' property is duplicated");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
describe("throw error when item set by props", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    it("items property is not array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new Dropdown({});
                    // @ts-ignore
                    container.items = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fixture(container)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    expect(error_3.message).to.equal("'items' property is not array");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it("duplicated value", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new Dropdown({});
                    container.items = [
                        {
                            value: expectedValues[0]
                        },
                        {
                            value: expectedValues[0]
                        }
                    ];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fixture(container)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    expect(error_4.message).to.equal("'items[1].value' property is duplicated");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
