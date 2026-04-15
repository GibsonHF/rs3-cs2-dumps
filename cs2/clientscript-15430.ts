//
function script15430(int0: int, int1: dbrow): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(760, 60);
            int3 = comp(760, 62);
            int4 = comp(760, 61);
            break;
        }
        case 2: {
            int2 = comp(760, 65);
            int3 = comp(760, 67);
            int4 = comp(760, 66);
            break;
        }
    };
    CC_DELETEALL(int4);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var string0 = "";
    var int5 = dbrow_getfield(int1, 987152, 0);
    var int6 = dbrow_getfield(int1, 987168, 0);
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = -1 as graphic;
    var int10 = 0;
    var int11 = 0;
    [int9, int10, int11] = dbrow_getfield(int1, 987200, 0);
    [int7, int8] = dbrow_getfield(int1, 987184, 0);
    if (((int5 > 1) || (int6 > 0))) {
        IF_SETTEXT("Bonus", int2);
        if ((int5 > 1)) {
            IF_SETTEXT("Minimum Multipliers", int2);
            string0 = `Increase all multipliers under x${inttostring(int5, 10)} on the trail to <col=FF00>x${inttostring(int5, 10)}</col>!`;
        } else if ((int6 > 0)) {
            IF_SETTEXT("Increase Multipliers", int2);
            string0 = `Increase all multipliers on the trail by <col=FF00>${inttostring(int6, 10)}</col>!<br>(Max multiplier: x8)`;
        };
        script8023(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, int10, int11, 0, 0, int9);
    } else if (((int7 != -1 as obj) && (int8 > 0))) {
        IF_SETTEXT("Reward Item", int2);
        if ((int8 > 1)) {
            string0 = `${inttostring(int8, 10)} x ${OC_NAME(int7)}`;
        } else {
            string0 = OC_NAME(int7);
        };
        if ((int9 != -1 as graphic)) {
            script8023(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, int10, int11, 0, 0, int9);
        } else {
            script15941(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, 100, 100, 0, 0);
            CC_SETOBJECT_NONUM(int7, int8);
            CC_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, 0, 0, 3224 as material);
        };
    };
    IF_SETTEXT(string0, int3);
    return;
}