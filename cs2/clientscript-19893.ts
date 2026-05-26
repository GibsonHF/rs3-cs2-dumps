//
function script19893(int0: number, int1: number): number {
    var int2 = -1;
    var int3 = -1;
    var int4 = struct_getparam(int1, 4851);
    var int5 = 0;
    [int2, int3, int5] = script326(int1);
    if ((struct_getparam(int0, 4153) == 1)) {
        if ((int4 != -1 as obj)) {
            return script734(script6488(item_getparam(int4, 4414)));
        };
    } else if (((int2 != -1) && (struct_getparam(int1, 4853) == 0))) {
        int2 = script19897(int2);
        return script734(script10881(int2));
    };
    return 0;
}