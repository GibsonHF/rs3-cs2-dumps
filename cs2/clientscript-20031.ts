//
function script20031(int0: int, int1: dbrow): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(1340, 103);
            int3 = comp(1340, 105);
            int4 = comp(1340, 104);
            break;
        }
        case 2: {
            int2 = comp(1340, 108);
            int3 = comp(1340, 111);
            int4 = comp(1340, 109);
            break;
        }
    };
    CC_DELETEALL(int4);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var string0 = "";
    var int5 = dbrow_getfield(int1, 1310736, 0);
    var int6 = dbrow_getfield(int1, 1310752, 0);
    var int7 = dbrow_getfield(int1, 1310800, 0);
    var int8 = dbrow_getfield(int1, 1310816, 0);
    var int9 = -1 as obj;
    var int10 = 0;
    var int11 = -1 as graphic;
    var int12 = 0;
    var int13 = 0;
    [int11, int12, int13] = dbrow_getfield(int1, 1310784, 0);
    [int9, int10] = dbrow_getfield(int1, 1310768, 0);
    if (((((int5 > 1) || (int6 > 0)) || (int7 > 1)) || (int8 > 0))) {
        IF_SETHIDE(false, comp(1340, 110));
        IF_SETTEXT("Bonus", int2);
        if ((int5 > 1)) {
            IF_SETTEXT("Minimum Multipliers", int2);
            string0 = `Increase all multipliers on the trail to <col=FF00>x${inttostring(int5, 10)}</col>!`;
        } else if ((int6 > 0)) {
            IF_SETTEXT("Increase Multipliers", int2);
            string0 = `Increase all multipliers on the trail by <col=FF00>${inttostring(int6, 10)}</col>!`;
        } else if ((int7 > 1)) {
            IF_SETTEXT("Set Rarity", int2);
            stack(PUSH_CONSTANT_INT[16]("Increase all rarities on the trail to <col=", script10925(int7)));
            string0 = `${stack()}${inttostring()}>${script10876(int7)}</col> rarity</col>!`;
        } else if ((int8 > 0)) {
            IF_SETTEXT("Increase Rarity", int2);
            string0 = `Increase all rarities on the trail by <col=89CFF0>${inttostring(int8, 10)}</col> ${script4583(int8, "tier!", "tiers!")}`;
        };
        script8023(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, int12, int13, 0, 0, int11);
    } else if (((int9 != -1 as obj) && (int10 > 0))) {
        IF_SETTEXT("Loot", int2);
        if ((int0 == 2)) {
            IF_SETHIDE(true, comp(1340, 110));
        };
        if ((int10 > 1)) {
            string0 = `${inttostring(int10, 10)} x ${OC_NAME(int9)}`;
        } else {
            string0 = OC_NAME(int9);
        };
        if ((int11 != -1 as graphic)) {
            script8023(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, int12, int13, 0, 0, int11);
        } else {
            script15941(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, 100, 100, 0, 0);
            CC_SETOBJECT_NONUM(int9, int10);
            CC_SETMODELLIGHTING(2048, 0, 0, 255, 255, 255, 0, 0, 0, 3224 as material);
        };
    };
    IF_SETTEXT(string0, int3);
    return;
}