//[proc,buyprice]
function script2720(int0: obj): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int0 = OC_UNCERT(int0);
    var int1 = enum_getvalue(33, 0, 731 as cs2enum, int0);
    if ((((varplayer_306 == 2) && (int1 != -1)) && (int1 > 0))) {
        return int1;
    };
    int1 = enum_getvalue(33, 0, 3295 as cs2enum, int0);
    if ((((varplayer_306 == 4) && (int1 != -1)) && (int1 > 0))) {
        return int1;
    };
    int1 = enum_getvalue(33, 0, 733 as cs2enum, int0);
    if (((int1 > 0) && (varplayer_304 != 41 as inv))) {
        return int1;
    };
    if (((item_getparam(int0, 258) == 1) || (item_getparam(int0, 259) == 1))) {
        if ((item_getparam(int0, 4244) == 1)) {
            return 120000;
        };
        return 99000;
    };
    if ((script1425(varplayer_304) == 1)) {
        return script1426(int0);
    };
    if ((varplayer_304 == 41 as inv)) {
        return enum_getvalue(33, 0, 11498 as cs2enum, int0);
    };
    int1 = script17369(int0);
    if ((varplayer_306 == 2)) {
        int1 = SCALE(3, 2, int1);
    };
    if ((item_getparam(int0, 7801) > 0)) {
        int1 = (int1 * 10);
    };
    return MAX(int1, 1);
}