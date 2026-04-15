//
function script14060(): string {
    var int0 = enum_getvalue(0, 73, 9029 as cs2enum, varbitplayer_22901);
    if ((int0 == -1 as struct)) {
        return "No Task";
    };
    return struct_getparam(int0, 1348);
}