//
function script7474(int0: unknown_int): void {
    var int1 = 1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    while ((int1 != 0)) {
        [int2, int3, int4, int1] = script7484(int1, int0);
        if ((int2 != comp(-1, 65535))) {
            IF_SETHIDE(true, int2);
            IF_SETTEXT("", int4);
            IF_SETOBJECT(-1 as obj, -1, int3);
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