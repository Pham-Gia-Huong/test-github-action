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
describe("visible default prop is true", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
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
    it("visible default prop is true", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    // eslint-disable-next-line no-unused-expressions
                    expect(el).to.be.displayed;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("visible prop set to false successfully", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
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
        ],
        visible: false
    });
    it("visible prop set to false successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    // eslint-disable-next-line no-unused-expressions
                    expect(el).not.to.be.displayed;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("visible prop set to true successfully", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
        label: "Fruit",
        requiredIcon: false,
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
        ],
        visible: false
    });
    container.visible = true;
    it("visible prop set to true successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    // eslint-disable-next-line no-unused-expressions
                    expect(el).to.be.displayed;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("visible prop set to false successfully", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
        label: "Fruit",
        requiredIcon: false,
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
        ],
        visible: true,
        className: "visible_test"
    });
    container.visible = false;
    it("visible prop set to false successfully'", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    // eslint-disable-next-line no-unused-expressions
                    expect(el).not.to.be.displayed;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("visible default prop set to null", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
        label: "Fruit",
        requiredIcon: false,
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
        ],
        // @ts-ignore
        visible: null
    });
    it("visible default prop set to null", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    // eslint-disable-next-line no-unused-expressions
                    expect(el).not.to.be.displayed;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("visible prop set to null", function () {
    var expectedLabels = ["-----", "Orange", "Apple"];
    var expectedValues = ["-----", "orange", "Apple"];
    var container = new Dropdown({
        label: "Fruit",
        requiredIcon: false,
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
    // @ts-ignore
    container.visible = null;
    it("visible prop set to null", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    // eslint-disable-next-line no-unused-expressions
                    expect(el).not.to.be.displayed;
                    return [2 /*return*/];
            }
        });
    }); });
});
