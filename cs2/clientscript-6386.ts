//
function script6386(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(3537 as cs2enum);
    var int1 = 0;
    var int2 = 0;
    var int3 = false;
    var int4 = IF_GETWIDTH(comp(1412, 5));
    var int5 = ((int4 - 20) / 2);
    var int6 = 10;
    var string0 = "";
    var int7 = 20;
    if ((script6431() == true)) {
        int7 = 30;
    };
    while ((int1 < int0)) {
        int2 = enum_getvalue(0, 0, 3537 as cs2enum, int1);
        string0 = script3151(int2);
        if (((((STAT_BASE(24 as stat) < script3144(int2)) || (script3136(int2) == 0)) || (script3145(int2) == 0)) || ((MAP_MEMBERS() == 0) && (script3150(int2) == 1)))) {
            int3 = true;
        } else {
            int3 = false;
        };
        script12501(comp(1412, 5), comp(1412, 4), 28556 as struct, (8 + ((int4 / 2) * MODULO(int1, 2))), int6, int5, int7, int1, int3, string0);
        if ((MODULO(++int1, 2) == 0)) {
            int6 = (int6 + (int7 + 3));
        };
    };
    int6 = (int6 + (int7 + 3));
    if ((IF_GETHEIGHT(comp(1412, 3)) < int6)) {
        IF_SETSCROLLSIZE(0, int6, comp(1412, 3));
        script7791(comp(1412, 6), comp(1412, 3));
    };
    return;
}