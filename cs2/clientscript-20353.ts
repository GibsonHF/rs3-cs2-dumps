//
function script20353(int0: unknown_int): obj {
    stack(1392656);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    if ((int1 == -1)) {
        return int5;
    };
    while ((int2++ < (DB_GETFIELDCOUNT(int1, 1392704) - 1))) {
        stack(int1);
        stack(1392704);
        stack(int2);
        dbrow_getfield();
        int4 = stack();
        int3 = -1;
        while ((int3++ <= ENUM_GETOUTPUTCOUNT(int4))) {
            int5 = enum_getvalue(0, 33, int4, int3);
            if ((int5 != -1 as obj)) {
                int6 = item_getparam(int5, 4414);
                if ((script10881(int6) == 0)) {
                    return int5;
                };
            };
        };
    };
    return int5;
}