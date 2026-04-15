//
function script770(int0: unknown_int, int1: int, int2: int): void {
    var int3 = IF_GETWIDTH(comp(673, 0));
    var int4 = IF_GETHEIGHT(comp(673, 0));
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    if ((int0 == 0)) {
        if ((int1 < 0)) {
            int11 = 1;
        } else if ((int1 > int3)) {
            int11 = 2;
        } else if ((int2 < 0)) {
            int11 = 3;
        } else {
            int11 = 4;
        };
        if (((varclient_3851 != 0) && (int11 == varclient_3851))) {
            return;
        };
        CC_DELETEALL(comp(673, 0));
        CC_CREATE(comp(673, 0), 3, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETFILL(1);
        CC_SETTRANS(125);
        CC_CREATE(comp(673, 0), 5, 1);
        CC_SETGRAPHIC(21393 as graphic);
        CC_SETSIZE(41, 54, 0, 0);
        CC_SETONTIMER(callback(script773, 1, 0, 44105728));
        switch (int11) {
            case 2: {
                CC_SETPOSITION((int3 - CC_GETWIDTH()), ((int4 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
                CC_SET2DANGLE(16384);
                break;
            }
            case 3: {
                CC_SETPOSITION(((int3 / 2) - (CC_GETWIDTH() / 2)), 0, 0, 0);
                CC_SET2DANGLE(32768);
                break;
            }
            case 4: {
                CC_SETPOSITION(((int3 / 2) - (CC_GETWIDTH() / 2)), (int4 - CC_GETHEIGHT()), 0, 0);
                CC_SET2DANGLE(0);
                break;
            }
            default: {
                CC_SETPOSITION(0, ((int4 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
                CC_SET2DANGLE(49152);
                break;
            }
        };
        varclient_3851 = int11;
        return;
    };
    CC_DELETEALL(comp(673, 0));
    varclient_3851 = 0;
    var int13 = dbrow_getfield(varplayer_8746, 295312, 0);
    int5 = SCALE((varclient_3848 - varclient_3847), 100, varclient_3845);
    int6 = SCALE((varclient_3850 - varclient_3849), 100, varclient_3845);
    if ((int13 == 0)) {
        int5 = MAX(int5, int6);
        int6 = MAX(int5, int6);
    };
    [int12, int5, int6] = script771(int13, int5, int6);
    var int14 = 1;
    if ((dbrow_getfield(varplayer_8746, 295328, 0) == 1)) {
        int14 = 0;
    };
    if ((int13 == 0)) {
        int7 = (int1 - (int6 / 2));
        int9 = (int7 + int6);
        int8 = (int2 - SCALE(int6, 100, varclient_3846));
        int10 = (int8 + int6);
    } else {
        int7 = (int1 - (int5 / 2));
        int9 = (int7 + int5);
        int8 = (int2 - SCALE(int6, 100, varclient_3846));
        int10 = (int8 + int6);
    };
    IF_SETHIDE(false, comp(673, 1));
    stack(int12);
    stack(44105729);
    IF_SETGRAPHIC();
    IF_SETSIZE(int5, int6, 0, 0, 44105729);
    IF_SETPOSITION(int7, int8, 0, 0, 44105729);
    IF_SETHIDE(0, 44105730);
    IF_SETSIZE(int5, (int4 - (int4 - int8)), 0, 0, 44105730);
    IF_SETPOSITION(int7, 0, 0, 0, 44105730);
    IF_SETFILL(1, 44105738);
    IF_SETCOLOUR(0, 44105738);
    IF_SETTRANS(125, 44105738);
    IF_SETHIDE(int14, 44105731);
    IF_SETHIDE(0, 44105732);
    IF_SETSIZE(int5, (int4 - int10), 0, 0, 44105732);
    IF_SETPOSITION(int7, int10, 0, 0, 44105732);
    IF_SETFILL(1, 44105739);
    IF_SETCOLOUR(0, 44105739);
    IF_SETTRANS(125, 44105739);
    IF_SETHIDE(int14, 44105733);
    IF_SETHIDE(0, 44105734);
    IF_SETSIZE(int7, int4, 0, 0, 44105734);
    IF_SETPOSITION(0, 0, 0, 0, 44105734);
    IF_SETFILL(1, 44105740);
    IF_SETCOLOUR(0, 44105740);
    IF_SETTRANS(125, 44105740);
    IF_SETHIDE(int14, 44105735);
    IF_SETHIDE(0, 44105736);
    IF_SETSIZE((int3 - int9), int4, 0, 0, 44105736);
    IF_SETPOSITION(int9, 0, 0, 0, 44105736);
    IF_SETFILL(1, 44105741);
    IF_SETCOLOUR(0, 44105741);
    IF_SETTRANS(125, 44105741);
    IF_SETHIDE(int14, 44105737);
    return;
}