//
function script8751(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = 1;
    if ((int0 == 1)) {
        int5 = 0;
    };
    while ((int1 < ENUM_GETOUTPUTCOUNT(7717))) {
        int2 = enum_getvalue(0, 0, 7717 as cs2enum, int1);
        int3 = script10405(int2);
        if ((int3 != -1)) {
            script8752(int2, int5);
        };
        int1 = (int1 + 1);
    };
    return;
}