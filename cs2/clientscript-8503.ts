//
function script8503(int0: component, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = 0;
    var int5 = IF_GETWIDTH(int0);
    var int6 = enum_getvalue(0, 25, 1649 as cs2enum, script3873());
    var int7 = script11432(int6);
    var int8 = 2;
    var int9 = script6431();
    if (((int9 == true) && (varbitplayer_29940 == 0))) {
        int8 = 0;
    };
    while ((CC_FIND(int0, int1) == 1)) {
        CC_SETPOSITION(0, int2, 0, int8);
        int3 = (PARAHEIGHT(CC_GETTEXT(), int5, CC_GETFONTMETRICS()) * int7);
        int4 = MAX(PARAWIDTH(CC_GETTEXT(), int5, CC_GETFONTMETRICS()), 0);
        CC_SETSIZE(int4, int3, 0, 0);
        var int2 = (int2 + CC_GETHEIGHT());
        if ((int9 == true)) {
            int2 = (int2 + 4);
        };
        var int1 = (int1 + 1);
    };
    return int2;
}