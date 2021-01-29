import { LitElement } from "lit-element";
declare type MobileNotificationProps = {
    className?: string;
    text?: string;
};
export declare class MobileNotification extends LitElement {
    text: string;
    private _notificationTitleEl;
    constructor(props?: MobileNotificationProps);
    private _handleClickCloseButton;
    private _getCloseButtonSvgTemplate;
    createRenderRoot(): this;
    open(): void;
    close(): void;
    firstUpdated(): void;
    render(): any;
    private _getStyleTagTemplate;
}
export {};
