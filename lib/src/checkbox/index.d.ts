import { LitElement, PropertyValues } from "lit-element";
declare type Item = {
    value?: string;
    label?: string;
};
declare type CheckboxProps = {
    className?: string;
    error?: string;
    id?: string;
    itemLayout?: "horizontal" | "vertical";
    label?: string;
    borderVisible?: boolean;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
    items?: Item[];
    value?: string[];
};
export declare class Checkbox extends LitElement {
    error: string;
    itemLayout: "horizontal" | "vertical";
    label: string;
    borderVisible: boolean;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    items: Item[];
    value: string[];
    private _inputEls;
    private _GUID;
    private _labelEl;
    private _selectMenuEl;
    constructor(props?: CheckboxProps);
    private _generateGUID;
    private _updateVisible;
    private _updateContainerWidth;
    private _getNewValue;
    private _handleChangeInput;
    private _handleFocusInput;
    private _handleBlurInput;
    private _dispatchCustomEvent;
    createRenderRoot(): this;
    private _getCheckboxIconSvgTemplate;
    private _getSVGStrokeValue;
    private _getItemTemplate;
    update(changedProperties: PropertyValues): void;
    render(): any;
    updated(): void;
    private _getDuplicatedIndex;
    private _validateItems;
    private _validateValues;
    private _getStyleTagTemplate;
}
export {};
