//
function script15073(int0: component, int1: cs2enum, int2: dbrow): int {
    CC_DELETEALL(int0);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int1 != -1 as cs2enum)) {
        int3 = ENUM_GETOUTPUTCOUNT(int1);
        int4 = 0;
        int5 = 15;
        int6 = 50;
    } else if ((int2 != -1 as dbrow)) {
        int3 = DB_GETFIELDCOUNT(int2, 548928);
        int4 = 1;
        int5 = 60;
        int6 = 150;
    } else {
        return 0;
    };
    var int7 = 0;
    var int8 = -1 as dbrow;
    var int9 = 0;
    while ((int7 < int3)) {
        if ((int4 == 0)) {
            int8 = enum_getvalue(0, 74, int1, int7);
        } else {
            int8 = dbrow_getfield(int2, 548928, int7);
        };
        if (((int8 != -1 as dbrow) && (script5725(int8) == 1))) {
            script15376(int0, int9, int7, int8, int6, int5, int4);
            int9 = (int9 + 1);
        };
        int7 = (int7 + 1);
    };
    return int9;
}