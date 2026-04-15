//
function script10405(int0: int): struct {
    var int1 = enum_getvalue(0, 73, 7716 as cs2enum, int0);
    if (((int0 == 17) && (varplayer_11967 != -1 as struct))) {
        int1 = varplayer_11967;
    };
    if ((int1 == -1 as struct)) {
        return -1 as struct;
    };
    if (((struct_getparam(int1, 8098) != -1 as struct) && (script6431() == true))) {
        int1 = struct_getparam(int1, 8098);
    };
    return int1;
}