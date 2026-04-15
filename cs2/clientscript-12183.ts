//
function script12183(int0: obj, int1: unknown_int, int2: int): void {
    var int3 = enum_getvalue(0, 74, 10742 as cs2enum, int2);
    if ((int3 == -1 as dbrow)) {
        return;
    };
    if ((script12057(int3) == 0)) {
        return;
    };
    if ((script14706(int0, int3) == 0)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    while ((int5 < 9)) {
        switch (int5) {
            case 0: {
                int4 = 4;
                break;
            }
            case 1: {
                int4 = 1;
                break;
            }
            case 2: {
                int4 = 3;
                break;
            }
            case 3: {
                int4 = 5;
                break;
            }
            case 4: {
                int4 = 7;
                break;
            }
            case 5: {
                int4 = 0;
                break;
            }
            case 6: {
                int4 = 2;
                break;
            }
            case 7: {
                int4 = 6;
                break;
            }
            case 8: {
                int4 = 8;
                break;
            }
        };
        if ((((script12064(int0, int4) == 1) && (CC_FIND(comp(1712, 3), int4) == 1)) && (cc_getparam(5529) == -1 as dbrow))) {
            script12176(int3, 1);
            script12172();
            return;
        };
        int5 = (int5 + 1);
    };
    script12172();
    return;
}