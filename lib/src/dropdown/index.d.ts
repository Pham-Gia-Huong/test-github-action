import { LitElement, PropertyValues } from "lit-element";
declare type Item = {
    label?: string;
    value?: string;
};
declare type DropdownProps = {
    className?: string;
    error?: string;
    id?: string;
    label?: string;
    value?: string;
    disabled?: boolean;
    requiredIcon?: boolean;
    visible?: boolean;
    items?: Item[];
};
export declare class Dropdown extends LitElement {
    error: string;
    label: string;
    value: string;
    disabled: boolean;
    requiredIcon: boolean;
    visible: boolean;
    items: Item[];
    private _selectorVisible;
    private _itemsEl;
    private _buttonEl;
    private _labelEl;
    private _GUID;
    constructor(props?: DropdownProps);
    private _generateGUID;
    private _getSelectedLabel;
    private _updateVisible;
    private _dispatchCustomEvent;
    private _handleClickDropdownToggle;
    private _handleBlurDropdownToggle;
    private _handleUpdateValue;
    private _handleMousedownDropdownItem;
    private _handleMouseOverDropdownItem;
    private _handleMouseLeaveDropdownItem;
    private _handleKeyDownDropdownToggle;
    private _getToggleIconSvgTemplate;
    private _getDropdownIconSvgTemplate;
    private _getItemTemplate;
    createRenderRoot(): this;
    update(changedProperties: PropertyValues): void;
    render(): any;
    updated(): void;
    private _updateContainerWidth;
    private _getStyleTagTemplate;
    private _setActiveDescendant;
    private _removeActiveDescendant;
    private _validateItems;
}
export {};
