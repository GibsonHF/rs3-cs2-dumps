//
function script16087(): graphic {
    if ((varbitplayer_22902 == 0)) {
        return -1 as graphic;
    };
    var int0 = enum_getvalue(0, 73, 9029 as cs2enum, varbitplayer_22901);
    if ((int0 == -1 as struct)) {
        return -1 as graphic;
    };
    var int1 = struct_getparam(int0, 1347);
    if ((int1 == -1 as npc)) {
        return -1 as graphic;
    };
    if ((int0 != -1 as struct)) {
        return script16098(int1);
    };
    return -1 as graphic;
}