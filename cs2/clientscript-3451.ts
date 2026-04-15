//
function script3451(int0: int, int1: int, int2: int, int3: unknown_int): void {
    script10014(35497 as struct, 28557 as struct, 28706 as struct);
    script10083(2, 0, int0, comp(1513, 96), comp(1513, 97), int1, int2, int3);
    if ((FULLSCREEN_MODECOUNT() > 0)) {
        script10014(35499 as struct, 28557 as struct, 28707 as struct);
        script10083(3, -1, int0, comp(1513, 106), comp(1513, 107), int1, int2, int3);
    } else {
        IF_SETHIDE(true, comp(1513, 19));
    };
    if ((varclient_178 < 0)) {
        varclient_178 = MAX(unk11117(), 0);
    };
    if ((varclient_178 >= FULLSCREEN_MODECOUNT())) {
        varclient_178 = 0;
    };
    script10428(comp(1513, 21), comp(1513, 22), 13254 as cs2enum, -1, "", varclient_178, 0);
    script7794(comp(1513, 8), 21361 as struct);
    IF_SETHIDE(false, comp(1513, 32));
    IF_SETHIDE(false, comp(1513, 34));
    var int4 = (IF_GETWIDTH(comp(1513, 24)) / 7);
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 25));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 27));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 29));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 31));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 32));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 34));
    IF_SETSIZE((int4 - 2), 24, 0, 0, comp(1513, 35));
    IF_SETPOSITION((int4 * 1), 0, 0, 0, comp(1513, 27));
    IF_SETPOSITION((int4 * 2), 0, 0, 0, comp(1513, 29));
    IF_SETPOSITION((int4 * 3), 0, 0, 0, comp(1513, 31));
    IF_SETPOSITION((int4 * 4), 0, 0, 0, comp(1513, 32));
    IF_SETPOSITION((int4 * 5), 0, 0, 0, comp(1513, 34));
    IF_SETPOSITION((int4 * 6), 0, 0, 0, comp(1513, 35));
    script10013(comp(1513, 53), comp(1513, 54), comp(1513, 55), comp(1513, 56), comp(1513, 57), comp(1513, 58), comp(1513, 60));
    script10079(int3, 1, comp(1513, 26), comp(1513, 56), comp(1513, 57), comp(1513, 60), "MIN", -1);
    script10013(comp(1513, 61), comp(1513, 62), comp(1513, 63), comp(1513, 64), comp(1513, 65), comp(1513, 66), comp(1513, 68));
    script10079(int3, 2, comp(1513, 28), comp(1513, 64), comp(1513, 65), comp(1513, 68), "LOW", -1);
    script10013(comp(1513, 69), comp(1513, 70), comp(1513, 71), comp(1513, 72), comp(1513, 73), comp(1513, 74), comp(1513, 76));
    script10079(int3, 3, comp(1513, 30), comp(1513, 72), comp(1513, 73), comp(1513, 76), "MID", -1);
    script10013(comp(1513, 77), comp(1513, 78), comp(1513, 79), comp(1513, 80), comp(1513, 81), comp(1513, 82), comp(1513, 84));
    script10079(int3, 4, comp(1513, 33), comp(1513, 80), comp(1513, 81), comp(1513, 84), "HIGH", -1);
    script10013(comp(1513, 115), comp(1513, 116), comp(1513, 117), comp(1513, 118), comp(1513, 119), comp(1513, 120), comp(1513, 122));
    script10079(int3, 5, comp(1513, 114), comp(1513, 118), comp(1513, 119), comp(1513, 122), "ULTRA", -1);
    script10013(comp(1513, 126), comp(1513, 127), comp(1513, 128), comp(1513, 129), comp(1513, 130), comp(1513, 131), comp(1513, 133));
    script10079(int3, 6, comp(1513, 125), comp(1513, 129), comp(1513, 130), comp(1513, 133), "ULTRA+", -1);
    script10013(comp(1513, 85), comp(1513, 86), comp(1513, 87), comp(1513, 88), comp(1513, 89), comp(1513, 90), comp(1513, 92));
    script10079(int3, 0, comp(1513, 36), comp(1513, 88), comp(1513, 89), comp(1513, 92), "CUSTOM", -1);
    script7794(comp(1513, 15), 21361 as struct);
    script13969(comp(1513, 17), comp(-1, 65535), 28554 as struct, "Re-run Auto Setup");
    IF_SETONCLICK(callback(script3383, int3), comp(1513, 17));
    return;
}