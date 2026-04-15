//
function script7775(int0: unknown_int, int1: int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, long0: unknown_long, string0: string): [int, int] {
    varclient_1700 = int1;
    var int6 = 29;
    if ((script6431() == true)) {
        int6 = 31;
    };
    var int7 = 202;
    var int8 = 180;
    var int9 = 0;
    var int10 = 0;
    if ((script6431() == true)) {
        int7 = 302;
        int8 = 230;
    };
    var int11 = script15709(int0);
    if ((IF_FIND(int11) == 1)) {
        CC_SETONTIMER(callback());
        CC_SETONTIMER(callback(script1213, script9356(string0)));
        int7 = MIN(int7, (22 + PARAWIDTH(string0, int8, int6)));
        int7 = MAX(int7, (45 + PARAWIDTH(`= ${TOSTRING_LOCALISED(int3, 1)} coins`, int8, int6)));
        int7 = MAX(int7, (45 + PARAWIDTH(`~${TOSTRING_LOCALISED_LONG(long0, 1)} coins`, int8, int6)));
        int9 = (22 + (15 * PARAHEIGHT(string0, int8, int6)));
        if ((int1 == 2)) {
            if (branch_gt_long[96](long0, 0n)) {
                int10 = (int10 + 25);
            } else if (((int4 >= 0) && (int5 >= 0))) {
                int10 = (int10 + 25);
            };
            if ((int3 > 0)) {
                int10 = (int10 + 25);
            };
            if ((int2 >= 0)) {
                int10 = (int10 + 25);
            };
            int9 = (int9 + int10);
        };
        if ((STRING_LENGTH(string0) > 0)) {
            CC_SETSIZE(int7, int9, 0, 0);
        };
        script1212(int11, int0, string0, int7, int9, int1, int10, long0, int2, int3, int4, int5);
        IF_SETSIZE(int7, int9, 0, 0, int11);
    };
    return [int7, int9];
}