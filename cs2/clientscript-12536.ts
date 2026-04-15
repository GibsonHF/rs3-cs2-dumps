//
function script12536(int0: component, int1: component, int2: component): void {
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = 0;
    if ((IF_FIND(int0) == 1)) {
        int3 = cc_getparam(5751);
    };
    if ((int3 == -1 as dbrow)) {
        return;
    };
    var int6 = 1;
    var int7 = 0;
    var int8 = dbrow_getfield(int3, 20704, 0);
    [int4, int5] = dbrow_getfield(int3, 20688, 0);
    var int9 = dbrow_getfield(int3, 20624, 0);
    switch (int8) {
        case 1: {
            int6 = 1;
            break;
        }
        case 2: {
            int6 = varbitplayer_31357;
            break;
        }
        case 3: {
            int6 = varbitplayer_31358;
            break;
        }
        case 4: {
            int6 = varbitplayer_31359;
            break;
        }
    };
    if (((STAT(26 as stat) >= int9) && (int6 > 0))) {
        if ((script5929(int4, int5) == 0)) {
            int7 = 1;
        } else {
            int7 = 2;
        };
    } else {
        int7 = 0;
    };
    if ((IF_FIND(int0) == 1)) {
        cc_setparam(5753, int7);
    };
    CC_DELETEALL(int1);
    CC_CREATE(int1, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    if ((int7 == 0)) {
        CC_SETGRAPHIC(21746 as graphic);
    } else if ((int7 == 1)) {
        CC_SETGRAPHIC(9221 as graphic);
    } else if ((int7 == 2)) {
        CC_SETGRAPHIC(9219 as graphic);
        IF_SETONOP(callback(), int2);
    };
    CC_CREATE(int1, 5, 1);
    CC_SETSIZE(20, 20, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(dbrow_getfield(int3, 20560, 0));
    if ((int7 == 0)) {
        CC_CREATE(int1, 3, 2);
        CC_SETSIZE(20, 20, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETFILL(1);
        CC_SETCOLOUR(script693(128, 128, 128));
        CC_SETTRANS(128);
    };
    return;
}