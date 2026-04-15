//
function script8218(int0: cs2enum): [int, int, int] {
    if ((int0 == -1 as cs2enum)) {
        script12478("cheevo_tally_enum - $cheevo_list is null!!!!");
        return [0, 0, 0];
    };
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    if ((int2 <= 0)) {
        script12478("cheevo_tally_enum - $cheevo_list is empty!!!!");
        return [0, 0, 0];
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as struct;
    while ((int1 < int2)) {
        int6 = enum_getvalue(0, 73, int0, int1);
        if ((int6 != -1 as struct)) {
            if ((script13280(int6) != 0)) {
                int4 = (int4 + 1);
                int3 = (int3 + 1);
                int5 = (int5 + struct_getparam(int6, 6755));
            } else if ((struct_getparam(int6, 6797) == 0)) {
                int4 = (int4 + 1);
            };
        };
        int1 = (int1 + 1);
    };
    return [int3, int4, int5];
}