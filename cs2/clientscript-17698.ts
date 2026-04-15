//
function script17698(int0: struct, int1: unknown_int): string {
    var int2 = struct_getparam(int0, 2796);
    if (((int0 == 28430 as struct) || (int0 == 11748 as struct))) {
        int2 = script17463(script15098(INV_GETOBJ(94 as inv, 3), int0));
    };
    var int3 = int2;
    switch (int0) {
        case 19253: {
            if ((varbitplayer_30341 > 0)) {
                int2 = (int2 - SCALE(int3, 100, (5 * varbitplayer_30341)));
            };
            break;
        }
    };
    return script17699(int2, int1);
}