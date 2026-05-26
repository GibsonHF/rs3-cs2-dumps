//
function script7474(int0: number): void {
    var int1 = 1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    while ((int1 != 0)) {
        [int2, int3, int4, int1] = script7484(int1, int0);
        if ((int2 != -1)) {
            IF_SETHIDE(1, int2);
            IF_SETTEXT("", int4);
            IF_SETOBJECT(-1, -1, int3);
            stack(-1);
            stack(int3);
            IF_SETGRAPHIC();
            IF_SETONMOUSEREPEAT(callback(), int2);
            IF_CLEAROPS(int2);
            IF_SETONCLICK(callback(), int2);
        };
    };
    return;
}