//
function script18814(int0: int, int1: dbrow): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(488, 55);
            int3 = comp(488, 57);
            int4 = comp(488, 56);
            break;
        }
        case 2: {
            int2 = comp(488, 61);
            int3 = comp(488, 63);
            int4 = comp(488, 62);
            break;
        }
    };
    CC_DELETEALL(int4);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var string0 = "";
    var int5 = dbrow_getfield(int1, 753680, 0);
    var int6 = dbrow_getfield(int1, 753696, 0);
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = -1 as graphic;
    var int10 = 0;
    var int11 = 0;
    [int9, int10, int11] = dbrow_getfield(int1, 753728, 0);
    [int7, int8] = dbrow_getfield(int1, 753712, 0);
    if (((int5 > 1) || (int6 > 0))) {
        IF_SETTEXT("Rainbow Modifier", int2);
        string0 = script18815(int5, int6);
        script8023(int4, 0, IF_GETNEXTSUBID(int4), 0, 0, 1, 1, int10, int11, 0, 0, int9);
    } else if (((int7 != -1 as obj) && (int8 > 0))) {
        IF_SETTEXT("Reward Item", int2);
        string0 = script18816(int7, int8);
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