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
import { RadioButton } from "../index";
describe("confirm items default value is not set", function () {
    var container = new RadioButton();
    it("confirm items default value is not set", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-radio-button__group__select-menu")
                        .children;
                    if (!(!itemsEl.children || itemsEl.length !== 3)) return [3 /*break*/, 3];
                    return [4 /*yield*/, expect(true)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
describe("items constructor set successfully without label prop", function () {
    var expectedValues = ["-----", "orange", "apple"];
    var container = new RadioButton({
        items: [
            {
                value: expectedValues[0]
            },
            {
                value: expectedValues[1]
            },
            {
                value: expectedValues[2]
            }
        ]
    });
    it("items prop set successfully without label prop", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, labelEl, svgEl, isChecked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-radio-button__group__select-menu")
                        .children;
                    if (!(!itemsEl.children || itemsEl.length !== 3)) return [3 /*break*/, 3];
                    return [4 /*yield*/, expect(false)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < itemsEl.length)) return [3 /*break*/, 8];
                    itemEl = itemsEl[i];
                    labelEl = itemEl.children[1];
                    svgEl = labelEl.children[0];
                    isChecked = svgEl.children.length === 2;
                    return [4 /*yield*/, expect(labelEl.innerText).to.be.equal(expectedValues[i])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(isChecked).to.be.equal(false)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    }); });
});
describe("items prop set successfully without label prop", function () {
    var expectedValues = ["-----", "orange", "apple"];
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
    var container = new RadioButton();
    container.items = newitems;
    it("items prop set successfully without label props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, labelEl, svgEl, isChecked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-radio-button__group__select-menu")
                        .children;
                    if (!(!itemsEl.children || itemsEl.length !== 3)) return [3 /*break*/, 3];
                    return [4 /*yield*/, expect(false)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < itemsEl.length)) return [3 /*break*/, 8];
                    itemEl = itemsEl[i];
                    labelEl = itemEl.children[1];
                    svgEl = labelEl.children[0];
                    isChecked = svgEl.children.length === 2;
                    return [4 /*yield*/, expect(labelEl.innerText).to.be.equal(expectedValues[i])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(isChecked).to.be.equal(false)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    }); });
});
describe("items constructor set successfully with full optional props", function () {
    var expectedValues = ["-----", "orange", "apple"];
    var expectedLabels = ["-----", "Orange", "Apple"];
    var container = new RadioButton({
        items: [
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
        ]
    });
    it("items constructor set successfully with full optional props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, labelEl, svgEl, isChecked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-radio-button__group__select-menu")
                        .children;
                    if (!(!itemsEl.children || itemsEl.length !== 3)) return [3 /*break*/, 3];
                    return [4 /*yield*/, expect(false)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < itemsEl.length)) return [3 /*break*/, 8];
                    itemEl = itemsEl[i];
                    labelEl = itemEl.children[1];
                    svgEl = labelEl.children[0];
                    isChecked = svgEl.children.length === 2;
                    return [4 /*yield*/, expect(labelEl.innerText).to.be.equal(expectedLabels[i])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(isChecked).to.be.equal(false)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    }); });
});
describe("items prop set successfully with full optional props", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "apple"];
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
    var container = new RadioButton();
    container.items = newitems;
    it("items prop set successfully with full optional props", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, itemsEl, i, itemEl, labelEl, svgEl, isChecked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-radio-button__group__select-menu")
                        .children;
                    if (!(!itemsEl.children || itemsEl.length !== 3)) return [3 /*break*/, 3];
                    return [4 /*yield*/, expect(false)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < itemsEl.length)) return [3 /*break*/, 8];
                    itemEl = itemsEl[i];
                    labelEl = itemEl.children[1];
                    svgEl = labelEl.children[0];
                    isChecked = svgEl.children.length === 2;
                    return [4 /*yield*/, expect(labelEl.innerText).to.be.equal(expectedLabels[i])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(isChecked).to.be.equal(false)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    }); });
    expect(container.items).to.be.equal(newitems);
});
describe("items prop replace successfully", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "apple"];
    var container = new RadioButton({
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
        var el, itemsEl, i, itemEl, labelEl, svgEl, isChecked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    itemsEl = el.querySelector(".kuc-radio-button__group__select-menu")
                        .children;
                    if (!(!itemsEl.children || itemsEl.length !== 3)) return [3 /*break*/, 3];
                    return [4 /*yield*/, expect(false)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < itemsEl.length)) return [3 /*break*/, 8];
                    itemEl = itemsEl[i];
                    labelEl = itemEl.children[1];
                    svgEl = labelEl.children[0];
                    isChecked = svgEl.children.length === 2;
                    return [4 /*yield*/, expect(labelEl.innerText).to.be.equal(expectedLabels[i])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, expect(isChecked).to.be.equal(false)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    }); });
    expect(container.items).to.be.equal(newitems);
});
describe("throw error when set by constructor", function () {
    var expectedValues = ["-----", "orange", "apple"];
    it("have items which is not array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new RadioButton({ items: null });
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
    it("have duplicated value", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new RadioButton({
                        items: [
                            {
                                value: expectedValues[0]
                            },
                            {
                                value: expectedValues[0]
                            }
                        ]
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
                    expect(error_2.message).to.equal("'items[1].value' is duplicated! You can specify unique one.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
describe("throw error when set by prop", function () {
    var expectedValues = ["-----", "orange", "apple"];
    it("have items which is not array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new RadioButton();
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
    it("have duplicated value", function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = new RadioButton();
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
                    expect(error_4.message).to.equal("'items[1].value' is duplicated! You can specify unique one.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
