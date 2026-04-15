//
function script9880(int0: unknown_int, int1: int): void {
    var int2 = INV_GETOBJ(94 as inv, 3);
    var int3 = 1;
    var int4 = 0;
    if ((item_getparam(int2, 2825) == 1)) {
        int3 = 1;
    } else if ((item_getparam(int2, 2826) == 1)) {
        int3 = 2;
    } else if ((item_getparam(int2, 2827) == 1)) {
        int3 = 3;
    } else if ((item_getparam(int2, 8898) == 1)) {
        int3 = 4;
    };
    if (((int3 > 1) && (int1 == 2))) {
        var int1 = 1;
    };
    switch (int3) {
        case 1: {
            if ((TESTBIT(varbitplayer_1906, int1) == 1)) {
                int4 = 1;
            };
            break;
        }
        case 2: {
            if ((TESTBIT(varbitplayer_1907, int1) == 1)) {
                int4 = 1;
            };
            break;
        }
        case 3: {
            if ((TESTBIT(varbitplayer_1908, int1) == 1)) {
                int4 = 1;
            };
            break;
        }
        case 4: {
            if ((TESTBIT(varbitplayer_53220, int1) == 1)) {
                int4 = 1;
            };
            break;
        }
    };
    if ((int4 == 1)) {
        stack(654);
        stack(int0);
        IF_SETGRAPHIC();
    } else {
        stack(653);
        stack(int0);
        IF_SETGRAPHIC();
    };
    IF_SETONMOUSEOVER(callback(script9881, int0, int4, 1), int0);
    IF_SETONMOUSELEAVE(callback(script9881, int0, int4, 0), int0);
    return;
}