//
function script2536(int0: number, int1: number, int2: number, int3: number): number {
    if ((int0 == -1)) {
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