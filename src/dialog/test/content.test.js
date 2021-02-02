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
import { Dialog } from "../index";
describe("confirm content default prop is null", function () {
    var container = new Dialog();
    it("confirm content default prop is null", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(cotentEl.childElementCount).to.be.equals(0)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("constructor: content set string successfully", function () {
    var container = new Dialog({
        content: "this is content"
    });
    it("content constructor set successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(cotentEl.textContent.trim()).to.be.equals("this is content")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("constructor: content set HTMLElement successfully", function () {
    var divElement = document.createElement("div");
    divElement.textContent = "this is content";
    var container = new Dialog({
        content: divElement
    });
    it("content constructor set successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(cotentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, expect((_a = cotentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content")];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("constructor: content set HTMLElement from string successfully", function () {
    var divElement = "<div>this is content</div>";
    var container = new Dialog({
        content: divElement
    });
    it("constructor: content set HTMLElement from string successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, contentEl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    contentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(contentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, expect((_a = contentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content")];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("constructor: content set to null successfully", function () {
    var container = new Dialog({
        // @ts-ignore
        content: null
    });
    it("constructor: content set to null successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect((_a = cotentEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("")];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("property: content set string successfully", function () {
    var container = new Dialog();
    container.content = "this is content";
    it("content prop set successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(cotentEl.textContent.trim()).to.be.equal("this is content")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("property: content set HTMLElement successfully", function () {
    var divElement = document.createElement("div");
    divElement.textContent = "this is content";
    var container = new Dialog();
    container.content = divElement;
    it("property: content set HTMLElement successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(cotentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, expect((_a = cotentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content")];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("property: content set HTMLElement from string successfully", function () {
    var divElement = "<div>this is content</div>";
    var container = new Dialog();
    container.content = divElement;
    it("property: content set HTMLElement from string successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, contentEl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    contentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(contentEl.firstElementChild.tagName.toLowerCase()).to.be.equal("div")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, expect((_a = contentEl.firstElementChild.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("this is content")];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("property: content set to null successfully", function () {
    var container = new Dialog();
    // @ts-ignore
    container.content = null;
    it("property: content set to null successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, contentEl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _b.sent();
                    contentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect((_a = contentEl.textContent) === null || _a === void 0 ? void 0 : _a.trim()).to.be.equal("")];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("content prop replace successfully", function () {
    var container = new Dialog({ content: "this is content" });
    container.content = "replace content";
    it("content prop replace successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
        var el, cotentEl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fixture(container)];
                case 1:
                    el = _a.sent();
                    cotentEl = el.querySelector(".kuc-dialog__dialog__content");
                    return [4 /*yield*/, expect(cotentEl.textContent.trim()).to.be.equal("replace content")];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
