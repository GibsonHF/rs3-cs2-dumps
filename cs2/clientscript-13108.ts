//
function script13108(int0: struct, int1: unknown_int): int {
    if ((int0 == -1 as struct)) {
        return -1;
    };
    var int2 = -1 as dbrow;
    if ((struct_getparam(int0, 2531) == 2)) {
        int2 = script15769(int0);
        if (((int2 == -1 as dbrow) && (int0 != 35691 as struct))) {
            script12478(`Non-null $item_struct lacks a dbrow - ${struct_getparam(int0, 2533)}`);
            return -1;
        };
        return dbrow_getfield(int2, 667648, 0);
    };
    var int3 = -1;
    var int4 = -1;
    var int5 = -1 as cs2enum;
    var int6 = 0;
    var int7 = -1;
    while ((++int3 <= 6)) {
        if (((int1 == 1) || (script13106(script13156(), int3) == 1))) {
            int4 = -1;
            while ((++int4 <= 21)) {
                int5 = enum_getvalue(0, 26, 5958 as cs2enum, int3);
                int4 = 21;
                if ((int5 != -1 as cs2enum)) {
                    int6 = ENUM_GETOUTPUTCOUNT(int5);
                    if ((enum_getreversecount(73, int5, int0) == 0)) {
                        int7 = (int7 + int6);
                    } else {
                        return ((int7 + 1) + enum_getreverseindex(73, 0, int5, int0, 0));
                    };
                };
            };
        };
    };
    if ((int0 == 35691 as struct)) {
        return int7;
    };
    return -1;
}