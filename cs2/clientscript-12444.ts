//
function script12444(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int6] = GET_MOUSEBUTTONS();
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((int5 == 1)) {
        if ((varclient_4718 != 1)) {
            if ((int0 != int2)) {
                CAM2_SETLOOKATORIENTATION_YROTATION(((int2 - int0) * varclient_4668));
            };
            if ((int1 != int3)) {
                CAM2_SETLOOKATORIENTATION_XROTATION(((int1 - int3) * varclient_4668));
            };
        } else {
            int7 = MAX(MIN((varclient_4668 * (int1 - int3)), 3500), (0 - 3500));
            int8 = MAX(MIN((varclient_4668 * (int0 - int2)), 16284), (0 - 16284));
            script3012(int7, int8);
        };
    };
    IF_SETONMOUSEREPEAT(callback(script10817, -2147483647, -2147483646, int0, int1), 31129607);
    return;
}