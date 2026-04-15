//
function script17962(int0: struct): npc {
    if ((int0 == -1 as struct)) {
        return -1 as npc;
    };
    var int1 = -1 as npc;
    var int2 = -1 as struct;
    int1 = struct_getparam(int0, 3152);
    if ((int1 == -1 as npc)) {
        int1 = struct_getparam(int0, 8691);
    };
    if ((int1 == -1 as npc)) {
        int1 = struct_getparam(int0, 4692);
    };
    if ((int1 == -1 as npc)) {
        int2 = enum_getvalue(73, 73, 7225 as cs2enum, int0);
        if ((int2 != -1 as struct)) {
            int1 = struct_getparam(int2, 3152);
        };
    };
    return int1;
}