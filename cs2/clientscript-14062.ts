//
function script14062(int0: number): void {
    IF_SETHIDE(1, 107413518);
    var int1 = 9286;
    var int2 = -1 as cs2enum;
    var int3 = -1 as struct;
    var int4 = -1 as npc;
    if ((int0 == 0)) {
        int2 = enum_getvalue(0, 26, 1553 as cs2enum, varbitplayer_9072);
        if ((int2 == -1 as cs2enum)) {
            return;
        };
        int3 = enum_getvalue(0, 73, int2, varbitplayer_9068);
        if ((int3 == -1 as struct)) {
            return;
        };
        int4 = struct_getparam(int3, 659);
    } else {
        int3 = enum_getvalue(0, 73, 9029 as cs2enum, varbitplayer_22901);
        if ((int3 == -1 as struct)) {
            return;
        };
        int4 = struct_getparam(int3, 1347);
    };
    if ((int4 != -1 as npc)) {
        IF_SETHIDE(0, 107413518);
        int1 = script16098(int4);
    };
    IF_SETGRAPHIC(int1, 107413518);
    return;
}