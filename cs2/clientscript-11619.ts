//
function script11619(int0: component, int1: component): void {
    IF_SETDRAGGABLE(IF_GETLAYER(int0), -1, int0);
    IF_SETONDRAG(callback(script8479, int0, int1, -1), int0);
    IF_SETONDRAGCOMPLETE(callback(script8480, int0, int1, -1), int0);
    IF_SETMOUSEOVERCURSOR(189, int0);
    return;
}