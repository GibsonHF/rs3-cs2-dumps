//
function script20428(int0: dbrow): [obj, obj, string] {
    var int1 = -1 as obj;
    var int2 = -1 as obj;
    var string0 = "";
    var int3 = dbrow_getfield(int0, 1404944, 0);
    var int4 = dbrow_getfield(int0, 1404960, 0);
    var int5 = script20429(int3);
    if (((STAT_BASE_ACTUAL(int3) >= 99) && (int5 == 0))) {
        int1 = enum_getvalue(17, 33, 14170 as cs2enum, int3);
        int2 = enum_getvalue(17, 33, 14603 as cs2enum, int3);
        if ((script20430() == 1)) {
            int1 = enum_getvalue(17, 33, 14171 as cs2enum, int3);
            int2 = enum_getvalue(17, 33, 14604 as cs2enum, int3);
        };
        int1 = enum_getvalue(33, 33, 9808 as cs2enum, int1);
        string0 = OC_NAME(int2);
    } else if ((int5 == 1)) {
        int1 = enum_getvalue(0, 33, 14172 as cs2enum, int4);
        int2 = enum_getvalue(0, 33, 14624 as cs2enum, int4);
        string0 = OC_NAME(int2);
    };
    return [int1, int2, string0];
}