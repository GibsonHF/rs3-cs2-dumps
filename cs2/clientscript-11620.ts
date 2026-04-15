//
function script11620(int0: component): void {
    IF_SETDRAGGABLE(comp(-1, 65535), -1, int0);
    IF_SETONDRAG(callback(), int0);
    IF_SETONDRAGCOMPLETE(callback(), int0);
    IF_SETMOUSEOVERCURSOR(-1, int0);
    return;
}