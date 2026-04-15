//
function script11105(int0: unknown_int, int1: int, int2: int): void {
    var int3 = 0;
    var int4 = enum_getvalue(0, 9, 2565 as cs2enum, int2);
    if ((int4 == comp(-1, 65535))) {
        return;
    };
    switch (int2) {
        case 1: {
            int3 = 122;
            break;
        }
        case 2: {
            int3 = 167;
            break;
        }
        case 3: {
            int3 = 210;
            break;
        }
        case 4: {
            int3 = 245;
            break;
        }
    };
    varclient_4739 = 0;
    if ((int0 > 200)) {
        IF_SETPOSITION(349, int3, 0, 0, int4);
    } else {
        script11106(int0, int1, int4);
    };
    return;
}