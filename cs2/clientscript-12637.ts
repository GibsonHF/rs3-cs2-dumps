//
function script12637(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = cc_getparam(5841);
    var int7 = cc_getparam(5840);
    switch (int7) {
        case 0:
        case 2:
        case 3: {
            cc_setparam(4421, int0);
            cc_setparam(4422, int1);
            int5 = SCALE(MAX(MIN(enum_getvalue(0, 0, 9054 as cs2enum, MODULO((script12706(-1) + 270), 360)), 99), -99), 100, int6);
            if ((cc_getparam(5944) == true)) {
                int5 = script12626(int5);
            };
            if ((int3 == 2)) {
                var int1 = (int1 - int5);
            } else {
                int1 = (int1 + int5);
            };
            if ((int7 == 3)) {
                int4 = SCALE(MAX(MIN(enum_getvalue(0, 0, 9054 as cs2enum, MODULO(script12706(-1), 360)), 99), -99), 100, int6);
            } else if ((int7 == 2)) {
                int4 = SCALE(MAX(MIN(enum_getvalue(0, 0, 9054 as cs2enum, MODULO((script12706(-1) + 90), 360)), 99), -99), 100, int6);
            } else {
                CC_SETPOSITION(int0, int1, int2, int3);
                return;
            };
            if ((cc_getparam(5943) == true)) {
                int4 = script12626(int4);
            };
            if ((int2 == 2)) {
                var int0 = (int0 - int4);
            } else {
                int0 = (int0 + int4);
            };
            CC_SETPOSITION(int0, int1, int2, int3);
            break;
        }
        case 1: {
            cc_setparam(4421, int0);
            cc_setparam(4422, int1);
            int4 = SCALE(MAX(MIN(enum_getvalue(0, 0, 9054 as cs2enum, MODULO((script12706(-1) + 90), 360)), 99), -99), 100, int6);
            if ((cc_getparam(5943) == true)) {
                int4 = script12626(int4);
            };
            if ((int2 == 2)) {
                int0 = (int0 - int4);
            } else {
                int0 = (int0 + int4);
            };
            CC_SETPOSITION(int0, int1, int2, int3);
            break;
        }
        case 4: {
            cc_setparam(4421, int0);
            cc_setparam(4422, int1);
            int5 = SCALE((MAX(MIN(enum_getvalue(0, 0, 9054 as cs2enum, MODULO((script12706(-1) + 90), 360)), 99), -99) - 99), 100, int6);
            if ((int3 == 2)) {
                int1 = (int1 - int5);
            } else {
                int1 = (int1 + int5);
            };
            int4 = SCALE(MAX(MIN(enum_getvalue(0, 0, 9054 as cs2enum, MODULO(script12706(-1), 360)), 99), -99), 100, int6);
            if ((cc_getparam(5943) == true)) {
                int4 = script12626(int4);
            };
            if ((int4 < 0)) {
                int4 = (int4 / 2);
            };
            if ((int2 == 2)) {
                int0 = (int0 - int4);
            } else {
                int0 = (int0 + int4);
            };
            CC_SETPOSITION(int0, int1, int2, int3);
            break;
        }
    };
    return;
}