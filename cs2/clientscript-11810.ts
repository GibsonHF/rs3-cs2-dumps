//
function script11810(int0: unknown_int): void {
    if ((int0 == 1925)) {
        script13901();
    };
    script7964(int0, 0, 0, 0, -1);
    var int1 = 1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = -1;
    while ((int1 <= 14)) {
        int2 = script7974(int0, int1);
        int3 = script7979(int0, int1);
        int4 = script1601(int0, int1);
        int5 = script7978(int0, int1);
        if (((int3 != comp(-1, 65535)) && (IF_FIND(int3) == 1))) {
            CC_SETHIDE(true);
        };
        if (((int4 != comp(-1, 65535)) && (IF_FIND(int4) == 1))) {
            CC_SETTEXT("");
        };
        if (((int5 != comp(-1, 65535)) && (IF_FIND(int5) == 1))) {
            CC_SETONTIMER(callback());
            CC_SETHIDE(1);
        };
        if (((int2 != comp(-1, 65535)) && (IF_FIND(int2) == 1))) {
            cc_setparam(5314, 0);
            cc_setparam(5313, 0);
            if ((cc_getparam(3438) != -1 as struct)) {
                script11818(int0, cc_getparam(3438));
            };
        };
        int1 = (int1 + 1);
    };
    return;
}