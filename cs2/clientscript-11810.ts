//
function script11810(int0: number): void {
    if ((int0 == 1925)) {
        script13901();
    };
    script7964(int0, 0, 0, 0, -1);
    var int1 = 1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    while ((int1 <= 14)) {
        int2 = script7974(int0, int1);
        int3 = script7979(int0, int1);
        int4 = script1601(int0, int1);
        int5 = script7978(int0, int1);
        if (((int3 != -1) && (IF_FIND(int3) == 1))) {
            CC_SETHIDE(1);
        };
        if (((int4 != -1) && (IF_FIND(int4) == 1))) {
            CC_SETTEXT("");
        };
        if (((int5 != -1) && (IF_FIND(int5) == 1))) {
            CC_SETONTIMER(callback());
            CC_SETHIDE(1);
        };
        if (((int2 != -1) && (IF_FIND(int2) == 1))) {
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