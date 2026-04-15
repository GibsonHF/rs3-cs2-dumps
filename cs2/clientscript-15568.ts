//
function script15568(int0: component, int1: component, int2: int, int3: unknown_int): void {
    IF_SETDRAGGABLE(int0, -1, int1);
    var int4 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int5 = SCALE(int2, 255, int4);
    IF_SETPOSITION(int5, 0, 0, 0, int1);
    int4 = (IF_GETWIDTH(comp(1420, 157)) - IF_GETWIDTH(comp(1420, 158)));
    int5 = SCALE(int2, 255, int4);
    IF_SETPOSITION(int5, 0, 0, 0, comp(1420, 158));
    if ((int3 == 1)) {
        varclient_1394 = int2;
    };
    return;
}