//
function script4384(int0: int, int1: int, int2: unknown_int): [graphic, graphic] {
    var int3 = enum_getvalue(0, 23, 3686 as cs2enum, int0);
    var int4 = enum_getvalue(0, 23, 3686 as cs2enum, int1);
    if (((int2 == 1) && ((varbitclansettings_8809 == 1) || (ACTIVECLANSETTINGS_GETAFFINEDCOUNT() < 5)))) {
        int3 = 5723 as graphic;
        int4 = 5789 as graphic;
    } else {
        if ((int3 == -1 as graphic)) {
            int3 = 5723 as graphic;
        };
        if ((int4 == -1 as graphic)) {
            int4 = 5789 as graphic;
        };
    };
    return [int3, int4];
}