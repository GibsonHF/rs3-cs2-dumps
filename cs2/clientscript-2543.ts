//
function script2543(int0: obj, int1: obj): obj {
    var int2 = enum_getvalue(33, 74, 2531 as cs2enum, int0);
    var string0 = "";
    var int3 = -1 as cs2enum;
    var int4 = DB_GETFIELDCOUNT(int2, 458752);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = -1 as obj;
    while ((int6 < int4)) {
        stack(dbrow_getfield(int2, 458752, int6));
        [string0, int3] = stack();
        int5 = ENUM_GETOUTPUTCOUNT(int3);
        while ((int7 < int5)) {
            int8 = enum_getvalue(0, 33, int3, int7);
            if (((int6 == 0) && (int7 == 0))) {
                int9 = int8;
            };
            if (((item_getparam(int8, 686) != -1 as struct) && (item_getparam(int8, 686) == item_getparam(int1, 686)))) {
                return int8;
            };
            if ((OC_CATEGORY(int1) == OC_CATEGORY(int8))) {
                return int8;
            };
            int7 = (int7 + 1);
        };
        int7 = 0;
        int6 = (int6 + 1);
    };
    return int9;
}