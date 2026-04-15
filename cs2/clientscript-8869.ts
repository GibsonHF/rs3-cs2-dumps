//
function script8869(): void {
    script8306();
    script2462();
    var int0 = (ENUM_GETOUTPUTCOUNT(6236 as cs2enum) - 1);
    var int1 = -1;
    var int2 = -1 as struct;
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    while ((int0 >= 0)) {
        int1 = enum_getvalue(0, 0, 6236 as cs2enum, int0);
        if ((script9932(int1) == 1)) {
            int2 = script10405(int1);
        } else {
            int2 = -1 as struct;
        };
        if ((int2 != -1 as struct)) {
            int3 = struct_getparam(int2, 3503);
            if ((int3 != comp(-1, 65535))) {
                IF_SETHIDE(true, int3);
            };
        };
        int0 = (int0 - 1);
    };
    return;
}