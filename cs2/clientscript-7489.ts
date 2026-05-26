//
function script7489(int0: number): void {
    var int1 = (ENUM_GETOUTPUTCOUNT(5960 as cs2enum) - 3);
    var int2 = 0;
    int2 = script7490(22, int2);
    int2 = script7490(21, int2);
    int2 = script7490(20, int2);
    int2 = script7490(19, int2);
    var int3 = 0;
    while ((int3 < int1)) {
        if ((int3 == 4)) {
            int2 = script7490(5, int2);
        } else if ((int3 == 5)) {
            int2 = script7490(4, int2);
        } else {
            int2 = script7490(int3, int2);
        };
        int3 = (int3 + 1);
    };
    if (((ENUM_GETOUTPUTCOUNT(enum_getvalue(0, 26, 5959 as cs2enum, int0)) > 7) && (int0 != 2))) {
        IF_SETHIDE(0, 85918036);
        IF_SETSCROLLSIZE(0, MAX(int2, IF_GETHEIGHT(85917842)), 85917842);
        script31(85918036, 85917842, -1, -1, -1, -1, -1, -1);
    } else {
        IF_SETHIDE(1, 85918036);
    };
    script6481(varclient_1964, varclient_1965);
    return;
}