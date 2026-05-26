//
function script5483(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = enum_getvalue(33, 0, 5331 as cs2enum, int2);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as obj;
    var string0 = "";
    switch (int2) {
        case 5329: {
            if ((int3 == 1)) {
                IF_SETONINVTRANSMIT(callback(script5483, int0, int1, int2, 0, 93, 94, 2), int0);
            };
            int5 = (INV_TOTAL(94, 7409 as obj) + INV_TOTAL(93, 7409 as obj));
            if ((int5 > 0)) {
                var int2 = 7409 as obj;
            };
            int5 = ((int5 + INV_TOTAL(93, 5329 as obj)) + INV_TOTAL(93, 5330 as obj));
            break;
        }
        case 6797: {
            if ((int3 == 1)) {
                IF_SETONINVTRANSMIT(callback(script5483, int0, int1, int2, 0, 93, 1), int0);
            };
            [int6, int8] = [1, ENUM_GETOUTPUTCOUNT(136)];
            while ((int6 <= int8)) {
                int9 = enum_getvalue(0, 33, 136 as cs2enum, int6);
                if (((int9 != -1 as obj) && (int9 != 6797 as obj))) {
                    int7 = INV_TOTAL(93, int9);
                    if ((OC_CERT(int9) != int9)) {
                        int7 = (int7 + INV_TOTAL(93, OC_CERT(int9)));
                    };
                    if ((int7 > 0)) {
                        [int2, int5] = [int9, (int5 + int7)];
                    };
                };
                int6 = (int6 + 1);
            };
            break;
        }
        case 22444: {
            if ((int3 == 1)) {
                IF_SETONINVTRANSMIT(callback(script5483, int0, int1, int2, 0, 93, 1), int0);
            };
            [int5, int4] = [MIN(INV_TOTAL(93, 22444 as obj), 1), 1];
            break;
        }
        case -1: {
            return;
        }
        default: {
            if ((int3 == 1)) {
                IF_SETONINVTRANSMIT(callback(script5483, int0, int1, int2, 0, 93, 1), int0);
            };
            int5 = INV_TOTAL(93, int2);
            if ((OC_CERT(int2) != int2)) {
                int5 = (int5 + INV_TOTAL(93, OC_CERT(int2)));
            };
            break;
        }
    };
    var int10 = 1;
    if ((int5 > 0)) {
        int10 = 0;
        IF_SETONMOUSEREPEAT(callback(script9564, int2, -2147483645, -2147483643), int1);
        IF_SETTRANS(0, int0);
    } else {
        IF_SETTRANS(175, int0);
        IF_SETONMOUSEREPEAT(callback(), int1);
    };
    script13959(int1, 28755, int10);
    if ((int4 > 1)) {
        IF_SETOBJECT_ALWAYSNUM(int2, int5, int0);
    } else {
        IF_SETOBJECT_NONUM(int2, int5, int0);
    };
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}`, int0);
    return;
}