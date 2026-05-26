//
function script15568(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETDRAGGABLE(int0, -1, int1);
    var int4 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int5 = SCALE(int2, 255, int4);
    IF_SETPOSITION(int5, 0, 0, 0, int1);
    int4 = (IF_GETWIDTH(93061277) - IF_GETWIDTH(93061278));
    int5 = SCALE(int2, 255, int4);
    IF_SETPOSITION(int5, 0, 0, 0, 93061278);
    if ((int3 == 1)) {
        varclient_1394 = int2;
    };
    return;
}