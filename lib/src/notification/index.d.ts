import { LitElement } from "lit-element";
declare type NotificationProps = {
    className?: string;
    text?: string;
    type?: "info" | "danger" | "success";
};
export declare class Notification extends LitElement {
    text: string;
    type: "info" | "danger" | "success";
    private _notificationTitleEl;
    constructor(props?: NotificationProps);
    private _handleClickCloseButton;
    private _getCloseButtonColor;
    private _getCloseButtonSvgTemplate;
    createRenderRoot(): this;
    open(): void;
    close(): void;
    firstUpdated(): void;
    render(): any;
    private _getStyleTagTemplate;
}
export {};
