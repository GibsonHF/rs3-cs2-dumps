//
function script7172(int0: number): void {
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var int4 = ENUM_GETOUTPUTCOUNT(12871);
    while ((int1 < int4)) {
        int2 = script8559(int0);
        if ((int2 != -1)) {
            IF_SETHIDE(1, int2);
        };
        int3 = script8587(int0);
        if ((int3 != -1)) {
            IF_SETHIDE(1, int3);
        };
        int1 = (int1 + 1);
    };
    int2 = script8559(int0);
    int3 = script8587(int0);
    if ((((script8854() == 8) && (int2 != -1)) && (varclient_2231 == int0))) {
        IF_SETHIDE(0, int2);
        IF_SETCOLOUR(16777215, int2);
        IF_SETSIZE(0, 4, 1, 1, int2);
        if ((script6431() == 1)) {
            IF_SETPOSITION(0, 0, 0, 0, int2);
        } else {
            IF_SETPOSITION(0, 0, 0, 2, int2);
        };
    } else if ((((script8854() == 9) && (int3 != -1)) && (varclient_2231 == int0))) {
        IF_SETHIDE(0, int3);
        IF_SETCOLOUR(16777215, int3);
        IF_SETSIZE(0, 0, 1, 1, int3);
        IF_SETPOSITION(0, 0, 0, 0, int3);
    };
    return;
}