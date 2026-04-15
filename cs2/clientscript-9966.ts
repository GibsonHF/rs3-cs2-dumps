//
function script9966(int0: struct, int1: unknown_int): unknown_int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int2 = script9964(int0);
    var int3 = OC_WEARPOS(int2);
    if ((int3 == -1)) {
        return 0;
    };
    var int4 = 670 as inv;
    if ((int1 == 1)) {
        int4 = 671 as inv;
    };
    var int5 = INV_GETOBJ(int4, OC_WEARPOS(int2));
    if (((int5 == -1 as obj) || (int2 == -1 as obj))) {
        return 0;
    };
    if ((int5 == int2)) {
        if ((int1 == 1)) {
            return 1;
        };
        if ((TESTBIT(varplayer_3529, int3) == 1)) {
            return 1;
        };
    } else if ((script13428(int5, int2) == 1)) {
        return 1;
    };
    return 0;
}