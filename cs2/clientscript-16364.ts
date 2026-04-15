//
function script16364(int0: unknown_int, int1: dbrow): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(935, 63);
            int3 = comp(935, 64);
            int4 = comp(935, 61);
            break;
        }
        case 2: {
            int2 = comp(935, 70);
            int3 = comp(935, 71);
            int4 = comp(935, 68);
            break;
        }
        case 3: {
            int2 = comp(935, 76);
            int3 = comp(935, 77);
            int4 = comp(935, 74);
            break;
        }
    };
    CC_DELETEALL(int4);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int5 = dbrow_getfield(int1, 675856, 0);
    var int6 = dbrow_getfield(int1, 675872, 0);
    var int7 = dbrow_getfield(int1, 675888, 0);
    var int8 = -1 as obj;
    var int9 = 0;
    [int8, int9] = dbrow_getfield(int1, 675904, 0);
    var string0 = "";
    if (((int5 > 0) && ((int6 > 1) || (int7 > 1)))) {
        IF_SETTEXT("Grotto Modifier", int2);
        script16365(int4, int5, int6, int7);
        if ((int5 > 1)) {
            string0 = `<col=DEA73E>Next ${inttostring(int5, 10)} presents:</col>`;
        } else {
            string0 = "<col=DEA73E>Next present:</col>";
        };
        if ((int6 > 1)) {
            string0 = `${string0}<br>Guaranteed ${script10979(int6)}${script10876(int6)}</col> rarity`;
        };
        if ((int7 > 1)) {
            string0 = `${string0}<br>x${inttostring(int7, 10)} multiplier`;
        };
        IF_SETTEXT(string0, int3);
    } else if (((int8 != -1 as obj) && (int9 > 0))) {
        IF_SETTEXT("Reward Item", int2);
        script16366(int4, int8, int9);
        if ((int9 > 1)) {
            string0 = `${inttostring(int9, 10)} x ${OC_NAME(int8)}`;
        } else {
            string0 = OC_NAME(int8);
        };
        IF_SETTEXT(string0, int3);
    };
    return;
}