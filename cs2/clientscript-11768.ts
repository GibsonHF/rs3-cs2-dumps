//
function script11768(int0: unknown_int, int1: dbrow): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(886, 23);
            int3 = comp(886, 24);
            int4 = comp(886, 22);
            break;
        }
        case 2: {
            int2 = comp(886, 27);
            int3 = comp(886, 28);
            int4 = comp(886, 26);
            break;
        }
    };
    CC_DELETEALL(int4);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int5 = dbrow_getfield(int1, 626704, 0);
    var int6 = dbrow_getfield(int1, 626720, 0);
    var int7 = dbrow_getfield(int1, 626736, 0);
    var int8 = -1 as obj;
    var int9 = 0;
    [int8, int9] = dbrow_getfield(int1, 626784, 0);
    var string0 = "";
    if (((int5 > 0) && ((int6 > 1) || (int7 > 1)))) {
        IF_SETTEXT("Pumpkin Modifier", int2);
        script11769(int4, int5, int6, int7);
        if ((int5 > 1)) {
            string0 = `<col=DA8F23>Next ${inttostring(int5, 10)} pumpkins:</col>`;
        } else {
            string0 = "<col=DA8F23>Next pumpkin:</col>";
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
        script11770(int4, int8, int9);
        if ((int9 > 1)) {
            string0 = `${inttostring(int9, 10)} x ${OC_NAME(int8)}`;
        } else {
            string0 = OC_NAME(int8);
        };
        IF_SETTEXT(string0, int3);
    };
    return;
}