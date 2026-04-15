//
function script20571(int0: unknown_int, int1: int, int2: component, int3: unknown_int): void {
    varplayer_12583 = int1;
    var int4 = (ENUM_GETOUTPUTCOUNT(9902 as cs2enum) - 1);
    while ((int4 >= 0)) {
        var int2 = enum_getvalue(0, 9, 9902 as cs2enum, int4);
        if ((int2 != comp(-1, 65535))) {
            IF_CALLONRESIZE(int2);
        };
        int4 = (int4 - 1);
    };
    IF_CALLONRESIZE(comp(1485, 35));
    return;
}