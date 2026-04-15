//
function script16853(int0: obj): obj {
    var int1 = enum_getvalue(33, 74, 15588 as cs2enum, int0);
    if ((int1 == -1 as dbrow)) {
        return int0;
    };
    var int2 = (DB_GETFIELDCOUNT(int1, 258048) - 1);
    var int3 = -1 as stat;
    var int4 = 0;
    var int5 = 0;
    var int6 = script4356();
    while ((int2 >= 0)) {
        int4 = dbrow_getfield(int1, 258064, int2);
        if (((int4 == 1) || (int6 == 1))) {
            var int0 = dbrow_getfield(int1, 258048, int2);
            int3 = item_getparam(int0, 749);
            int5 = item_getparam(int0, 750);
            if (((int3 != -1 as stat) && (STAT_BASE(int3) >= int5))) {
                return int0;
            };
        };
        int2 = (int2 - 1);
    };
    return int0;
}