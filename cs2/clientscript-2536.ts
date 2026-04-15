//
function script2536(int0: obj, int1: obj, int2: unknown_int, int3: unknown_int): unknown_int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int4 = 0;
    if ((script2535(int0, int1) == 1)) {
        int4 = 1;
    } else {
        if (((int2 == 1) && (int3 == 0))) {
            script12724(`<col=AE0000>This ore box can only store level ${inttostring(item_getparam(int0, 2645), 10)} ores and below.`, 2, 1);
        };
        return 0;
    };
    if ((enum_getreversecount(33, 17159 as cs2enum, int1) < 1)) {
        return 0;
    };
    return int4;
}