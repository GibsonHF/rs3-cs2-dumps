//
function script7430(int0: struct, int1: int): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    if ((varplayer_3472 == -1 as obj)) {
        return 0;
    };
    var int2 = enum_getvalue(73, 73, 7225 as cs2enum, int0);
    if ((int2 == -1 as struct)) {
        return 0;
    };
    var int3 = -1 as npc;
    if ((int1 < 9000)) {
        int3 = struct_getparam(int2, 3148);
    } else if (((int1 >= 9000) && (int1 < 24000))) {
        int3 = struct_getparam(int2, 3150);
    } else {
        int3 = struct_getparam(int2, 3152);
    };
    var int4 = npc_getparam(int3, 75);
    if ((int4 == -1 as obj)) {
        return 0;
    };
    if ((varplayer_3472 == int4)) {
        return 1;
    };
    return 0;
}