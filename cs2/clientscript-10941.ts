//
function script10941(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    while ((int0 < 12)) {
        int2 = enum_getvalue(0, 9, 9622 as cs2enum, int0);
        int6 = 0;
        if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, 2) == 1))) {
            int3 = IF_GETPARENTLAYER(int2);
            IF_SETHIDE(int6, int3);
            if ((int6 == 0)) {
                int4 = enum_getvalue(0, 9, 9623 as cs2enum, int0);
                script10934(int4, int1);
                IF_SETPOSITION(0, int5, 0, 0, int3);
                int5 = ((IF_GETY(int3) + IF_GETHEIGHT(int3)) + 3);
                int1 = (int1 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    if (((int1 == 0) && (IF_GETHIDE(59441338) == 1))) {
        IF_SETHIDE(0, 59441339);
    } else {
        IF_SETHIDE(1, 59441339);
    };
    script10944(int5, 59441299, 59441336);
    return;
}