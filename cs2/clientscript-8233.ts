//
function script8233(int0: struct, int1: inv, int2: obj, int3: int): [obj, int] {
    if ((int3 == 0)) {
        script12478("Increment of 0 - would be an infinite loop. Breaking out.");
        return [-1 as obj, -1];
    };
    var int4 = 0;
    var int5 = -1 as obj;
    switch (item_getparam(int2, 3744)) {
        case 0: {
            [int5, int4] = script8234(int0, int1, 4, 11, int3);
            break;
        }
        case 1:
        case 2:
        case 4:
        case 5:
        case 8: {
            [int5, int4] = script8234(int0, int1, 8, 11, int3);
            if ((int5 == -1 as obj)) {
                [int5, int4] = script8234(int0, int1, 12, 17, int3);
            };
            break;
        }
        case 6:
        case 10: {
            [int5, int4] = script8234(int0, int1, 12, 17, int3);
            break;
        }
        case 3:
        case 7: {
            [int5, int4] = script8234(int0, int1, 10, 11, int3);
            break;
        }
        case 9: {
            [int5, int4] = script8234(int0, int1, 13, 17, int3);
            break;
        }
    };
    return [int5, int4];
}