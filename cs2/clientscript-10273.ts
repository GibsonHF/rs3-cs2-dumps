//
function script10273(int0: int): string {
    if (((varplayergroup_16 == -1) || (varplayergroup_16 == 999999))) {
        return "";
    };
    var int1 = enum_getvalue(0, 73, 888 as cs2enum, varplayergroup_16);
    if ((int1 == -1 as struct)) {
        return "";
    };
    var int2 = struct_getparam(int1, 4508);
    if ((int2 == -1 as cs2enum)) {
        return "";
    };
    return enum_getvalue(0, 36, int2, int0);
}