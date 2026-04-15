//
function script6374(int0: int, int1: int): void {
    var int2 = MODULO(CLIENTCLOCK(), 36);
    var int3 = enum_getvalue(0, 9, 13328 as cs2enum, int1);
    var int4 = enum_getvalue(0, 9, 13329 as cs2enum, int1);
    var int5 = -1;
    if (((int2 > 18) && (enum_getvalue(0, 0, 5924 as cs2enum, int2) < 8))) {
        IF_SETHIDE(true, int3);
        IF_SETHIDE(false, int4);
    } else {
        IF_SETHIDE(false, int3);
        IF_SETHIDE(true, int4);
    };
    var int6 = IF_GETNEXTSUBID(int3);
    var int7 = 0;
    while ((int7 <= int6)) {
        if ((CC_FIND(int3, int7) == 1)) {
            CC_SETTRANS(int0);
        };
        if ((CC_FIND(int4, int7) == 1)) {
            CC_SETTRANS(int0);
        };
        int7 = (int7 + 1);
    };
    return;
}