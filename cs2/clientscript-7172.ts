//
function script7172(int0: int): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = ENUM_GETOUTPUTCOUNT(12871 as cs2enum);
    while ((int1 < int4)) {
        int2 = script8559(int0);
        if ((int2 != comp(-1, 65535))) {
            IF_SETHIDE(true, int2);
        };
        int3 = script8587(int0);
        if ((int3 != comp(-1, 65535))) {
            IF_SETHIDE(true, int3);
        };
        int1 = (int1 + 1);
    };
    int2 = script8559(int0);
    int3 = script8587(int0);
    if ((((script8854() == 8) && (int2 != comp(-1, 65535))) && (varclient_2231 == int0))) {
        IF_SETHIDE(false, int2);
        IF_SETCOLOUR(16777215, int2);
        IF_SETSIZE(0, 4, 1, 1, int2);
        if ((script6431() == true)) {
            IF_SETPOSITION(0, 0, 0, 0, int2);
        } else {
            IF_SETPOSITION(0, 0, 0, 2, int2);
        };
    } else if ((((script8854() == 9) && (int3 != comp(-1, 65535))) && (varclient_2231 == int0))) {
        IF_SETHIDE(false, int3);
        IF_SETCOLOUR(16777215, int3);
        IF_SETSIZE(0, 0, 1, 1, int3);
        IF_SETPOSITION(0, 0, 0, 0, int3);
    };
    return;
}