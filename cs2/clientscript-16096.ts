//
function script16096(): number {
    if ((varplayer_183 == 0)) {
        return -1;
    };
    if (((varbitplayer_9072 == -1) || (varbitplayer_9068 == -1))) {
        return -1;
    };
    if ((((varbitplayer_525 > 0) || (varbitplayer_24968 == 1)) || (varbitplayer_44233 == 1))) {
        return -1;
    };
    var int0 = enum_getvalue(0, 26, 1553 as cs2enum, varbitplayer_9072);
    if ((int0 == -1 as cs2enum)) {
        return -1;
    };
    var int1 = enum_getvalue(0, 73, int0, varbitplayer_9068);
    var int2 = -1 as npc;
    if ((int1 != -1 as struct)) {
        int2 = struct_getparam(int1, 659);
        return script16098(int2);
    };
    return -1;
}