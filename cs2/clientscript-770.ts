//
function script770(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETWIDTH(comp(673, 0));  // tut5_spotlight:content_layer
    var int4 = IF_GETHEIGHT(comp(673, 0));  // tut5_spotlight:content_layer
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as graphic;
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
        CC_DELETEALL(comp(673, 0));  // tut5_spotlight:content_layer
        CC_CREATE(comp(673, 0), 3, 0);  // tut5_spotlight:content_layer
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETFILL(1);
        CC_SETTRANS(125);
        CC_CREATE(comp(673, 0), 5, 1);  // tut5_spotlight:content_layer
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
    CC_DELETEALL(comp(673, 0));  // tut5_spotlight:content_layer
    varclient_3851 = 0;
    var int13 = dbrow_getfield(varplayer_8746, 295328, 0);
    int5 = SCALE((varclient_3848 - varclient_3847), 100, varclient_3845);
    int6 = SCALE((varclient_3850 - varclient_3849), 100, varclient_3845);
    if ((int13 == 0)) {
        int5 = MAX(int5, int6);
        int6 = MAX(int5, int6);
    };
    [int12, int5, int6] = script771(int13, int5, int6);
    var int14 = true;
    if ((dbrow_getfield(varplayer_8746, 295344, 0) == 1)) {
        int14 = false;
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
    IF_SETHIDE(false, comp(673, 1));  // tut5_spotlight:centre
    IF_SETGRAPHIC(int12, comp(673, 1));  // tut5_spotlight:centre
    IF_SETSIZE(int5, int6, 0, 0, comp(673, 1));  // tut5_spotlight:centre
    IF_SETPOSITION(int7, int8, 0, 0, comp(673, 1));  // tut5_spotlight:centre
    IF_SETHIDE(false, comp(673, 2));  // tut5_spotlight:top
    IF_SETSIZE(int5, (int4 - (int4 - int8)), 0, 0, comp(673, 2));  // tut5_spotlight:top
    IF_SETPOSITION(int7, 0, 0, 0, comp(673, 2));  // tut5_spotlight:top
    IF_SETFILL(1, 44105738);
    IF_SETCOLOUR(0, comp(673, 10));  // tut5_spotlight:top_rect
    IF_SETTRANS(125, comp(673, 10));  // tut5_spotlight:top_rect
    IF_SETHIDE(int14, comp(673, 3));  // tut5_spotlight:top_noclickthrough
    IF_SETHIDE(false, comp(673, 4));  // tut5_spotlight:bottom
    IF_SETSIZE(int5, (int4 - int10), 0, 0, comp(673, 4));  // tut5_spotlight:bottom
    IF_SETPOSITION(int7, int10, 0, 0, comp(673, 4));  // tut5_spotlight:bottom
    IF_SETFILL(1, 44105739);
    IF_SETCOLOUR(0, comp(673, 11));  // tut5_spotlight:bottom_rect
    IF_SETTRANS(125, comp(673, 11));  // tut5_spotlight:bottom_rect
    IF_SETHIDE(int14, comp(673, 5));  // tut5_spotlight:bottom_noclickthrough
    IF_SETHIDE(false, comp(673, 6));  // tut5_spotlight:left
    IF_SETSIZE(int7, int4, 0, 0, comp(673, 6));  // tut5_spotlight:left
    IF_SETPOSITION(0, 0, 0, 0, comp(673, 6));  // tut5_spotlight:left
    IF_SETFILL(1, 44105740);
    IF_SETCOLOUR(0, comp(673, 12));  // tut5_spotlight:left_rect
    IF_SETTRANS(125, comp(673, 12));  // tut5_spotlight:left_rect
    IF_SETHIDE(int14, comp(673, 7));  // tut5_spotlight:left_noclickthrough
    IF_SETHIDE(false, comp(673, 8));  // tut5_spotlight:right
    IF_SETSIZE((int3 - int9), int4, 0, 0, comp(673, 8));  // tut5_spotlight:right
    IF_SETPOSITION(int9, 0, 0, 0, comp(673, 8));  // tut5_spotlight:right
    IF_SETFILL(1, 44105741);
    IF_SETCOLOUR(0, comp(673, 13));  // tut5_spotlight:right_rect
    IF_SETTRANS(125, comp(673, 13));  // tut5_spotlight:right_rect
    IF_SETHIDE(int14, comp(673, 9));  // tut5_spotlight:right_noclickthrough
    return;
}