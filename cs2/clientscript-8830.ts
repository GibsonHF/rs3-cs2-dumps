//
function script8830(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var int3 = 0;
    switch (MAP_LANG()) {
        case 0: {
            [int2, int3] = script8831(int0, int1);
            break;
        }
        case 2: {
            [int2, int3] = script8832(int0, int1);
            break;
        }
        case 1: {
            [int2, int3] = script8833(int0, int1);
            break;
        }
        case 6: {
            [int2, int3] = script8834(int0, int1);
            break;
        }
        case 3: {
            [int2, int3] = script8835(int0, int1);
            break;
        }
    };
    if (((MAP_LANG() != 0) && (int2 == 0))) {
        [int2, int3] = script8831(int0, int1);
    };
    return [int2, int3];
}