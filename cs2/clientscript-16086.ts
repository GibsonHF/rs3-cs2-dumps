//
function script16086(): string {
    if ((varbitplayer_22902 == 0)) {
        return "null";
    };
    var int0 = enum_getvalue(0, 73, 9029 as cs2enum, varbitplayer_22901);
    if ((int0 == -1 as struct)) {
        return "";
    };
    var int1 = struct_getparam(int0, 1347);
    if ((int1 == -1 as npc)) {
        return "";
    };
    if ((int0 != -1 as struct)) {
        return script16097(int1);
    };
    return "";
}