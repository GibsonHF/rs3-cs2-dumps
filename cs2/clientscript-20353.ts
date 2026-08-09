//
function script20353(int0: number): number {
    stack(1392656);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    if ((int1 == -1)) {
        return int5;
    };
    stack(int2);
    int2 = (int2 + 1);
    while (BRANCH_LESS_THAN((DB_GETFIELDCOUNT(int1, 1392704) - 1))) {
        int4 = dbrow_getfield(int1, 1392704, int2);
        int3 = -1;
        stack(int3);
        int3 = (int3 + 1);
        while (BRANCH_LESS_THAN_OR_EQUALS(ENUM_GETOUTPUTCOUNT(int4))) {
            int5 = enum_getvalue(0, 33, int4, int3);
            if ((int5 != -1)) {
                int6 = item_getparam(int5, 4414);
                if ((script10881(int6) == 0)) {
                    return int5;
                };
            };
        };
    };
    return int5;
}