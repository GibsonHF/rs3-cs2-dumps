//
function script12826(int0: unknown_int, int1: int, int2: int): void {
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 2: {
            int3 = comp(1798, 34);
            break;
        }
        case 1: {
            int3 = comp(1798, 83);
            break;
        }
        case 3: {
            int3 = comp(1798, 30);
            break;
        }
    };
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    if ((int1 == int2)) {
        int5 = 276;
    } else {
        int4 = ((276 * 100) / int1);
        int5 = MIN(276, ((int4 * int2) / 100));
        if (((int0 == 2) && (int2 > (int1 / 2)))) {
            int5 = MIN(276, (int5 + 1));
        };
    };
    IF_SETSIZE(int5, 11, 0, 0, int3);
    return;
}