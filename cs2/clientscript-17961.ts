//
function script17961(int0: npc, int1: struct): bas {
    if ((int0 == -1 as npc)) {
        return -1 as bas;
    };
    var int2 = -1 as bas;
    var int3 = -1 as struct;
    int2 = struct_getparam(int1, 8692);
    if ((int2 == -1 as bas)) {
        int2 = struct_getparam(int1, 4694);
    };
    if ((int2 == -1 as bas)) {
        int2 = npc_getparam(int0, 3857);
    };
    if ((int2 == -1 as bas)) {
        int3 = enum_getvalue(32, 73, 9016 as cs2enum, int0);
        if ((int3 != -1 as struct)) {
            int2 = struct_getparam(int3, 4694);
        };
    };
    return int2;
}