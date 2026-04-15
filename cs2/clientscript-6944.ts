//
function script6944(int0: unknown_int, int1: int): void {
    var int2 = script7799(int0, comp(34, 12));
    var int3 = script7799(int0, comp(34, 5));
    var int4 = script7799(int0, comp(34, 6));
    if ((IF_GETHIDE(int4) == false)) {
        if ((int1 < IF_GETHEIGHT(int2))) {
            IF_SETSCROLLSIZE(0, 0, int2);
            IF_SETSCROLLPOS(0, 0, int2);
            IF_SETHIDE(true, int4);
            IF_SETSIZE(8, 8, 1, 1, int3);
        } else {
            IF_SETSCROLLSIZE(0, (int1 + 10), int2);
            IF_SETHIDE(false, int4);
            script72(int4, int2, IF_GETSCROLLY(int2));
            IF_SETSIZE(24, 8, 1, 1, int3);
        };
    } else if ((int1 >= IF_GETHEIGHT(int2))) {
        IF_SETSCROLLSIZE(0, (int1 + 10), int2);
        IF_SETHIDE(false, int4);
        script7791(int4, int2);
        IF_SETSIZE(24, 8, 1, 1, int3);
    };
    return;
}