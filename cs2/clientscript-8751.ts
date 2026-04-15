//
function script8751(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = -1;
    var int5 = true;
    if ((int0 == 1)) {
        int5 = false;
    };
    while ((int1 < ENUM_GETOUTPUTCOUNT(7717 as cs2enum))) {
        int2 = enum_getvalue(0, 0, 7717 as cs2enum, int1);
        int3 = script10405(int2);
        if ((int3 != -1 as struct)) {
            script8752(int2, int5);
        };
        int1 = (int1 + 1);
    };
    return;
}