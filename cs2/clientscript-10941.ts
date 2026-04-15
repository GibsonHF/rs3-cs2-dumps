//
function script10941(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = false;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    while ((int0 < 12)) {
        int2 = enum_getvalue(0, 9, 9622 as cs2enum, int0);
        int6 = false;
        if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, 2) == 1))) {
            int3 = IF_GETPARENTLAYER(int2);
            IF_SETHIDE(int6, int3);
            if ((int6 == false)) {
                int4 = enum_getvalue(0, 9, 9623 as cs2enum, int0);
                script10934(int4, int1);
                IF_SETPOSITION(0, int5, 0, 0, int3);
                int5 = ((IF_GETY(int3) + IF_GETHEIGHT(int3)) + 3);
                int1 = (int1 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    if (((int1 == 0) && (IF_GETHIDE(comp(907, 186)) == true))) {
        IF_SETHIDE(false, comp(907, 187));
    } else {
        IF_SETHIDE(true, comp(907, 187));
    };
    script10944(int5, comp(907, 147), comp(907, 184));
    return;
}