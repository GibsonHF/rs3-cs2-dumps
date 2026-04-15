//
function script7820(int0: component, int1: cs2enum): void {
    var int2 = 0;
    var int3 = -1 as struct;
    while ((CC_FIND(int0, int2) == 1)) {
        int3 = enum_getvalue(0, 73, int1, int2);
        int3 = script9101(int3);
        script7821(int3, int0, int2);
        int2 = (int2 + 1);
    };
    return;
}