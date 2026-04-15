//
function script7421(int0: dbrow, int1: int): unknown_int {
    if (((int1 == 0) || (int1 > 300))) {
        return 0;
    };
    var int2 = 0;
    var string0 = "";
    var int3 = 0;
    var string1 = "";
    var int4 = 0;
    var int5 = 0;
    var string2 = "";
    stack(WORLDLIST_SPECIFIC(int1));
    [int2, string0, int3, string1, int4, int5, string2] = stack();
    if ((TESTBIT(int2, 12) == 1)) {
        return 0;
    };
    if ((((TESTBIT(int2, 30) == 1) && (script16823() == false)) && (STAFFMODLEVEL() < 2))) {
        return 0;
    };
    if ((((TESTBIT(int2, 30) == 0) && (script16823() == true)) && (STAFFMODLEVEL() < 2))) {
        return 0;
    };
    if ((((varbitplayer_58378 == 1) && (int0 != -1 as dbrow)) && (TESTBIT(int2, 24) == 0))) {
        return 0;
    };
    if ((((varbitplayer_58378 == 0) || (int0 == -1 as dbrow)) && (TESTBIT(int2, 24) == 1))) {
        return 0;
    };
    switch (varbitplayer_26925) {
        case 1: {
            if ((TESTBIT(int2, 0) == 0)) {
                return 0;
            };
            break;
        }
        case 2: {
            if ((TESTBIT(int2, 0) == 1)) {
                return 0;
            };
            break;
        }
    };
    switch (varbitplayer_26926) {
        case 1: {
            if ((TESTBIT(int2, 3) == 0)) {
                return 0;
            };
            break;
        }
        case 2: {
            if ((TESTBIT(int2, 3) == 1)) {
                return 0;
            };
            break;
        }
    };
    if (((varbitplayer_54472 == 1) && (TESTBIT(int2, 22) == 1))) {
        return 0;
    };
    if (((varbitplayer_54473 == 1) && (TESTBIT(int2, 23) == 1))) {
        return 0;
    };
    return 1;
}