//
function script13288(int0: cs2enum): [int, int, int] {
    if ((int0 == -1 as cs2enum)) {
        script12478("cheevo_tally_all_enum - $cheevo_all_enum is null!!!!");
        return [0, 0, 0];
    };
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = -1 as cs2enum;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 26, int0, int1);
        if ((int3 != -1 as cs2enum)) {
            [int4, int5, int9] = script13289(int3);
            int6 = (int6 + int4);
            int7 = (int7 + int5);
            int8 = (int8 + int9);
        };
        int1 = (int1 + 1);
    };
    return [int6, int7, int8];
}