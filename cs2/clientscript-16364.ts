//
function script16364(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    switch (int0) {
        case 1: {
            int2 = 61276223;
            int3 = 61276224;
            int4 = 61276221;
            break;
        }
        case 2: {
            int2 = 61276230;
            int3 = 61276231;
            int4 = 61276228;
            break;
        }
        case 3: {
            int2 = 61276236;
            int3 = 61276237;
            int4 = 61276234;
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