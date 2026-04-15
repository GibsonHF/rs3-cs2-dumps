//
function script13286(int0: struct): graphic {
    if ((int0 == -1 as struct)) {
        return -1 as graphic;
    };
    var int1 = -1 as quest;
    if ((struct_getparam(int0, 1345) > 0)) {
        int1 = enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int0, 1345));
        if ((int1 != -1 as quest)) {
            return script2107(int1);
        };
    };
    if (((script6431() == true) && (struct_getparam(int0, 8070) != -1 as graphic))) {
        return struct_getparam(int0, 8070);
    };
    if (((varbitplayer_27169 == 1) && (struct_getparam(int0, 8071) != -1 as graphic))) {
        return struct_getparam(int0, 8071);
    };
    return struct_getparam(int0, 6412);
}