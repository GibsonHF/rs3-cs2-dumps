//
function script11620(int0: number): void {
    IF_SETDRAGGABLE(-1, -1, int0);
    IF_SETONDRAG(callback(), int0);
    IF_SETONDRAGCOMPLETE(callback(), int0);
    IF_SETMOUSEOVERCURSOR(-1, int0);
    return;
}