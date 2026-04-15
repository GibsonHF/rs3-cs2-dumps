//[proc,loginscreen_musicvol]
function script1216(int0: component, int1: component): void {
    IF_SETDRAGGABLE(int0, -1, int1);
    var int2 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int3 = SCALE(CLIENTOPTION_GET(23), 255, int2);
    IF_SETPOSITION(int3, 0, 0, 0, int1);
    return;
}