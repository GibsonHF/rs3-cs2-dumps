//
function script6071(int0: struct): void {
    var int1 = comp(-1, 65535);
    var int2 = ENUM_GETOUTPUTCOUNT(5358 as cs2enum);
    var int3 = -1;
    while ((++int3 < int2)) {
        int1 = enum_getvalue(0, 9, 5358 as cs2enum, int3);
        if ((int1 != comp(-1, 65535))) {
            script14125(int1, int0);
        };
    };
    return;
}