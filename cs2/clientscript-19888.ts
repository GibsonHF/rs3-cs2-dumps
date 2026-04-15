//
function script19888(int0: struct, int1: struct): [unknown_int, unknown_int] {
    if ((int1 == -1 as struct)) {
        return [2, -1];
    };
    if ((int0 == -1 as struct)) {
        var int0 = int1;
    };
    var int2 = script19893(varplayer_5148, int1);
    var int3 = script19894(int0);
    var int4 = script19895(int1);
    var int5 = 0;
    var int6 = -1;
    var int7 = script9095(int1, int4);
    var int8 = struct_getparam(int1, 5878);
    var long0 = INT_TO_LONG(int7);
    var long1 = INT_TO_LONG(int8);
    if ((struct_getparam(varplayer_5148, 4153) == 1)) {
        [long0, long1] = [-1n, -1n];
    } else if (((PLAYERMEMBER() == false) && ((struct_getparam(int1, 5147) > 0) || (struct_getparam(int1, 5879) > 0)))) {
        if ((struct_getparam(int1, 5147) > 0)) {
            long0 = INT_TO_LONG(struct_getparam(int1, 5147));
        };
        if ((struct_getparam(int1, 5879) > 0)) {
            long1 = INT_TO_LONG(struct_getparam(int1, 5879));
        };
    };
    if (branch_not_long[93](long0, -1n)) {
        if (branch_gt_long[97](long0, 0n)) {
            long0 = INT_TO_LONG(MAX(1, SCALE(struct_getparam(varplayer_5148, 7399), 100, int7)));
        };
        if (branch_gt_long[111](long1, 0n)) {
            long1 = INT_TO_LONG(MAX(1, SCALE(struct_getparam(varplayer_5148, 7400), 100, int8)));
        };
    };
    if ((int2 == true)) {
        int5 = 1;
    } else if (((struct_getparam(int1, 6406) == 1) && (MAP_MEMBERS() == 0))) {
        int5 = 4;
    } else if ((int3 == 0)) {
        int5 = 2;
    } else if ((branch_lt_long[155](varplayer_5149, long0) || branch_lt_long[155](varplayer_6437, long1))) {
        if ((struct_getparam(int1, 7140) == 1)) {
            int5 = 5;
        } else if ((struct_getparam(int1, 4645) == 1)) {
            int5 = 7;
        } else {
            int5 = 3;
        };
    };
    if ((int5 != 1)) {
        if ((int4 == 1)) {
            int6 = 6;
        } else if ((((script12477() - struct_getparam(int1, 8662)) < 14) || (script12477() <= struct_getparam(int1, 8726)))) {
            int6 = 8;
        };
    };
    return [int5, int6];
}