//
function script13613(int0: number): void {
    var int1 = enum_getreverseindex(9, 0, 13034, int0, 0);
    if (((int1 < 0) || (int1 > (ENUM_GETOUTPUTCOUNT(11065) - 1)))) {
        return;
    };
    var int2 = enum_getvalue(0, 9, 13762 as cs2enum, int1);
    script14001(int2, 28556, 0, 0, 0, 0);
    varplayer_9620 = 0;
    CC_DELETEALL(121307148);
    IF_SETHIDE(1, 121307148);
    if ((CC_FIND(enum_getvalue(0, 9, 13035 as cs2enum, int1), 0) == 1)) {
        CC_SETVFLIP(0);
    };
    var int3 = 0;
    var int4 = 0;
    while ((int3 < ENUM_GETOUTPUTCOUNT(11065))) {
        int4 = (2 + ((45 + 2) * int3));
        IF_SETPOSITION(0, int4, 1, 0, enum_getvalue(0, 9, 11065 as cs2enum, int3));
        int3 = (int3 + 1);
    };
    script13329((int1 + 1));
    var int5 = enum_getvalue(0, 73, 11155 as cs2enum, int1);
    if ((int5 != -1 as struct)) {
        varplayer_6891 = struct_getparam(int5, 6422);
    } else {
        varplayer_6891 = -1 as cs2enum;
    };
    if ((varplayer_6891 != -1 as cs2enum)) {
        script13334(varplayer_6891, 1);
    } else {
        CC_DELETEALL(121307176);
    };
    IF_SETONOP(callback(script13331, -2147483645), int0);
    return;
}